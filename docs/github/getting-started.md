# Getting started

Unity Actions provide the fastest and **easiest** way to automatically test and build any Unity project.

There are a few parts to setting up a workflow. Steps may slightly differ depending on each license type.

## Mental model

#### Overall steps

1. Understand how
   [Github Actions](https://docs.github.com/en/actions)
   work.
2. Configure a license for Unity.
3. Set up a workflow for your project.
4. Result: Merge pull requests with more confidence.

#### Setting up a workflow

Setting up a workflow is easy!

Create a file called `.github/workflows/main.yml` in your repository and configure the following steps;

1. Checkout your repository using
   [Checkout](https://github.com/marketplace/actions/checkout).
2. Cache Unity Library folder using
   [Cache](https://github.com/marketplace/actions/cache).
3. Configure your test job using
   [Test Runner](https://github.com/marketplace/actions/unity-test-runner).
4. Configure your build job using
   [Builder](https://github.com/marketplace/actions/unity-builder).
5. Deploy your application.

_**Note:** all steps will be explained in the next chapters._

## Support

#### First time using GitHub Actions?

Read the official documentation on how to setup a
[workflow](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/configuring-a-workflow).

Any subsequent steps assume you have read the above.

#### Supported unity versions

Unity Actions are using 
[game-ci/docker](https://github.com/game-ci/docker/) 
since `unity-builder` version 2. Any version in this 
[list](https://hub.docker.com/r/unityci/editor/tags)
can be used to test and build projects.

It's generally considered good practice to use the same Unity version for Unity Actions as you do to develop your project. No need to specify your unity version anywhere, `unity-builder` and `unity-test-runner` will use the one specified in `ProjectSettings/ProjectVersion.txt`.

## Simple example

Below is a simple example. It is **recommended** to start from here.

This example assumes that your Unity project is in the root of your repository.

> _Note: this repository tests this workflow_

```yaml
name: Actions 😎

on:
  pull_request: {}
  push: { branches: [main] }

env:
  UNITY_LICENSE: ${{ secrets.UNITY_LICENSE }}

jobs:
  build:
    name: Build my project ✨
    runs-on: ubuntu-latest
    steps:
      # Checkout
      - name: Checkout repository
        uses: actions/checkout@v2
        with:
          lfs: true

      # Cache
      - uses: actions/cache@v2.1.3
        with:
          path: Library
          key: Library

      # Test
      - name: Run tests
        uses: webbertakken/unity-test-runner@v2

      # Build
      - name: Build project
        uses: webbertakken/unity-builder@v2
          targetPlatform: WebGL

      # Output
      - uses: actions/upload-artifact@v2
        with:
          name: Build
          path: build
```

## Advanced example

To get an idea of how to create a more advanced workflows,
have a look at the example below.

> _Note: this repository tests this workflow_

```yaml
name: Actions 😎

on:
  pull_request: {}
  push: { branches: [main] }

env:
  UNITY_LICENSE: ${{ secrets.UNITY_LICENSE }}

jobs:
  buildAndTestForSomePlatforms:
    name: Build for ${{ matrix.targetPlatform }} on version ${{ matrix.unityVersion }}
    runs-on: ubuntu-latest
    strategy:
      fail-fast: false
      matrix:
        projectPath:
          - test-project
        targetPlatform:
          - StandaloneOSX # Build a macOS standalone (Intel 64-bit).
          - StandaloneWindows64 # Build a Windows 64-bit standalone.
          - StandaloneLinux64 # Build a Linux 64-bit standalone.
          - iOS # Build an iOS player.
          - WebGL # WebGL.
    steps:
      - uses: actions/checkout@v2
        with:
          lfs: true
      - uses: actions/cache@v2.1.3
        with:
          path: ${{ matrix.projectPath }}/Library
          key: Library-${{ matrix.projectPath }}-${{ matrix.targetPlatform }}
          restore-keys: |
            Library-${{ matrix.projectPath }}-
            Library-
      - uses: webbertakken/unity-test-runner@v2
        id: testRunner
        with:
          projectPath: ${{ matrix.projectPath }}
          unityVersion: ${{ matrix.unityVersion }}
      - uses: actions/upload-artifact@v2
        with:
          name: Test results (all modes)
          path: ${{ steps.testRunner.outputs.artifactsPath }}
      - uses: webbertakken/unity-builder@v2
        with:
          projectPath: ${{ matrix.projectPath }}
          unityVersion: ${{ matrix.unityVersion }}
          targetPlatform: ${{ matrix.targetPlatform }}
          customParameters: '-myParameter myValue -myBoolean -ThirdParameter andItsValue'
      - uses: actions/upload-artifact@v2
        with:
          name: Build
          path: build
```

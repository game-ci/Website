# Introduction
## Concept - What Does Cloud Runner Do

**Cloud Runner enables you to run build and test workflows in the cloud, right from GitHub actions. Builder will automatically provision an environment at a Cloud Provider such as GCP and AWS. It will then send the project to be built and/or tested depending on your workflow configuration.** 

**Primarily Cloud Runner is useful for game development because it supports large projects. Cloud Runner has first class support for the Unity game engine.**
However, you could easily extend the system to run other tools and workloads. Cloud Runner can even use your projects to run workloads.

Cloud Runner uses git to track and transfer your projects and uses native cloud services such as AWS Fargate or Kubernetes to run your jobs.

The benefits include: 
1. Larger options and more control over disk size, memory and CPU. You can build projects of almost any size.
2. Scale up to much larger numbers of builds easily and fully on demand.
3. Run custom jobs and extend the system for any workload.
4. Cloud Runner creates resources on-demand, it costs you nothing while you don't use it.

## Cloud Runner Release Status
Cloud Runner is in "active development" ⚠️🔨

Cloud Runner overall release status: `preview`
This means some APIs may change, features are still being added but the minimum feature set works and is stable.

Release Stages: `experimental` ➡️ `preview` ➡️ `full release`

You must use a provider with Cloud Runner, each provider's release status is described below. This indicates the stability and support for cloud runner features and workflows.

### Development
_Cloud Runner is actively maintained and kept stable by the Game CI open source project contributors._

💬suggestions, 🐛bugs and ↕️Minor changes are tracked as GitHub issues:
 - [Game CI Issues - GitHub](https://github.com/game-ci/unity-builder/labels/cloud-runner)

You can also explore the [development roadmap page](development).

### Community
__Share your feedback with us!__
 - [__Discord Channel__](https://discord.com/channels/710946343828455455/789631903157583923)
 - [__Feedback Form__](https://forms.gle/3Wg1gGf9FnZ72RiJ9)

### Supported Cloud Runner Platforms
```md
| Cloud Provider Platform | Release Status            |
| ----------------------- | ------------------------- |
| Kubernetes              | ✔️ experimental release |
| AWS                     | ✔️ preview release      |
| GCP                     | ⚠ Considered             |
| Azure                   | ⚠ Considered             |
```
_Note for Kuberentes support:_
_Usually the cluster needs to be up and running at all times, as starting up a cluster is slow._
_Use Google Cloud's Kubernetes Autopilot you can scale down to the free tier automatically while not in use._

```md
| Git Platform          | Release Status       |
| --------------------- | -------------------- |
| GitHub                | ✔️ preview release |
| GitLab                | ✔️ preview release |
| Command Line          | ✔️ preview release |
| Any Git repository    | ✔️ preview release |
| Any Git automation/Ci | ✔️ preview release |
```

## Releases
All cloud runner releases are currently packaged and released with game-ci's unity-builder module:
[Game CI Releases - GitHub](https://github.com/game-ci/unity-builder/releases)

History up to latest open incoming changes for release can be found here:
[Cloud Runner PRs - GitHub](https://github.com/game-ci/unity-builder/pulls?q=is%3Apr+cloud+runner)

You can see further information about configuring the release version on the [Configuration](configuration) page.

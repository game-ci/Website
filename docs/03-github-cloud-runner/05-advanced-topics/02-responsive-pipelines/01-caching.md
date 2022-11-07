# Caching

Cloud Runner supports two main caching modes.

## Caching Modes

- Standard Caching
- Retained Workspace

You can even mix the two by specifying a "MaxRetainedWorkspaces" parameter. Above the max concurrent
jobs a new job will use standard caching.

## Standard Caching

### Good For

- Minimum storage use
- Smaller projects

### What is cached between builds

- LFS files
- Unity Library folder

## Retained Workspace

### Good For

- Minimum storage use
- Smaller projects

### What is cached between builds

- Entire Project Folder
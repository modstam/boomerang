# Boomerang

Deploy and manage your git repos to your servers. A personal project for easily deploying to multiple machines.

- Add and track git repositories
- Add and monitor machines (deploy targets)
- On machines, monitor deployments
- In the added git repositories, detect docker files that can be deployed
- Machines are controlled by a small script, talking to the server and fetching commands
- Easily setup new deploy targets by copy pasting a install script

## Technology goals

### Client

- browser based GUI
- html/css/vanilla js served from server. Only use native web technologies.
- want to avoid bundlers as much as possible, "keep it simple"

### Server

- express -- easy crud setup
- typescript -- types are essential server side
- sqlite -- no need to complicate things with a remote database, lets keep everything on the same machine
- keep a local docker registry, no images stored on the target machines
- serve with docker

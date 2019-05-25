# Remote containers #

The purpose of this project is to test the new feature in VS Code to remote into a docker container

## Why use remote containers ##

* Avoid installing dependencies and weird path variables on your own OS
* Have seperate extensions for VS code saved in the remote containers
* Optimised workflow for working with docker

## Prerequisites ##

* VS Code Insiders installed - [VS code insiders](https://code.visualstudio.com/insiders)
* Docker installed - [Docker for mac](https://docs.docker.com/docker-for-mac/install/)

## How to use remote containers ##

1. Install the VS Code insiders plugin [Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack) and it is also nice to have the vs code plugin for [Docker](https://code.visualstudio.com/docs/azure/docker) installed, to help with some syntax highligting.
2. Open an existing repo, or create a new project
3. Create a configuration file by using `Remote-Containers: Create Container Configuration File`. It can do multiple things.
    * If you never intend to use docker for the project, but just want to try out a repo that have some dependencies you don't want or can't install on your local environment, you choose the option to create a configution file from predefined configurations. That will create a `.devcontainer` folder. Within the folder you will find a config file, `devcontainer.json` and a docker file `Dockerfile`.
    * If you already intend to use docker in your project, will creating the config file from your Dockerfile like be a more suitable solution. This will only create a `devcontainer.json` in your root
4. Open your code in an existing container: `Remote-Containers: Open Folder in Container`
5. VS code should now be opened inside the container. If you had other dependencies or build processes than on your local OS, you should now be able to use execute those through your teminal inside vs code
6. While inside the the container you can also install local extensions. These extensions will only be visible inside the container. Or you can add the markdown ID to the `extensions` list in your `devcontainer.json` file
7. If you want to expose a port you can do that by a command or specify it in the `devcontainer.json` file, e.g. `"appPort": ["23000:3000"]`. If you do it in the `devcontainer.json` remember to rebuild the container: `Remote-Containers: Rebuild Container`.

## Commands cheat sheet ##

* `Remote-Containers: Create Container Configuration File` - When you need to create a configuation for remote containers
* `Remote-Containers: Open Folder in Container` - When you open for the first time (vs code will aslo ask in gui)
* `Remote-Containers: Reopen Folder in Container` - When you need to open your code in the container
* `Remote-Containers: Reopen Folder Locally` - When you want to open the folder on your local OS
* `Remote-Containers: Rebuild Container` - If you have made changes to your `devcontainer.json` or `Dockerfile` use this command

### Read more ###

* [Attach to an existing container](https://code.visualstudio.com/docs/remote/containers#_attaching-to-running-containers)
* [Port forwarding](https://code.visualstudio.com/docs/remote/containers#_forwarding-a-port)
* [Advanced stuff](https://code.visualstudio.com/docs/remote/containers#_indepth-setting-up-a-folder-to-run-in-a-container)
* [Configurations options](https://code.visualstudio.com/docs/remote/containers#_devcontainerjson-reference)

### Test existing projects ###

git clone <https://github.com/Microsoft/vscode-remote-try-node> <br />
git clone <https://github.com/Microsoft/vscode-remote-try-python> <br />
git clone <https://github.com/Microsoft/vscode-remote-try-go> <br />
git clone <https://github.com/Microsoft/vscode-remote-try-java> <br />
git clone <https://github.com/Microsoft/vscode-remote-try-dotnetcore> <br />
git clone <https://github.com/Microsoft/vscode-remote-try-php> <br />
git clone <https://github.com/Microsoft/vscode-remote-try-rust> <br />
git clone <https://github.com/Microsoft/vscode-remote-try-cpp> <br />

# CI/CD PIPELINE PROJECT
DEVELOPER: R4JxF60

# TL;DR
The project consists of simple node based application and **multi-branch** pipeline scripts for **[Docker](https://www.docker.com/)** and **[Jenkins](https://www.jenkins.io/)**. If you are newbie to **CI/CD**,**Docker**, and **Jenkins** you are welcome. In this project we are going to set up Docker and Jenkins and create a multi-branch pipeline from ground up. To get a hands on experience, just follow the guide. 

**Tabel of Contents** 

- [CI/CD PIPELINE PROJECT](#cicd-pipeline-project)
- [TL;DR](#tldr)
- [Environment Setup](#environment-setup)
  - [Prerequisites](#prerequisites)
  - [Setup Jenkins](#setup-jenkins)
    - [Create a bridge network](#create-a-bridge-network)
    - [Start the Jenkins node](#start-the-jenkins-node)
    - [Connect to a running docker container from the host](#connect-to-a-running-docker-container-from-the-host)

# Environment Setup

## Prerequisites

You need to have Docker Engine install in your environment. Follow the Docker [installation guide](https://docs.docker.com/engine/install/) based on your operating system to install Docker Engine into your system. 

## Setup Jenkins

### Create a bridge network
    docker network create pipeline_network
### Start the Jenkins node
    docker run --name pipeline_container --restart=on-failure --detach \
    					--volume pipeline_jenkins_home:/var/jenkins_home  \
    					--publish 8080:8080 \
    					--publish 50000:50000 \
    					--network pipeline_network \
						--add-host host.docker.internal:host-gateway \
	jenkins/jenkins:lts-jdk11

Now visit the [localhost:8080](http://localhost:8080) and wait until Jenkins start. When the Jenkins start, it will show window to enter the initial credentials for the root before login. You can find this credentials inside the `/var/jenkins_home/secrets/` directory in the Jenkins container. To grab the credentials follow up the following steps.

### Connect to a running docker container from the host

    docker exec -it pipeline_container bash

Now visit execute the following command in the terminal window to get the initial credentials.

    cat /var/jenkins_home/secrets/initialpassword


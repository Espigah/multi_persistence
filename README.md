# Purpose

Create a minimal app with docker-compose and multiple storage destinations

## What the program should do

* <strong>C</strong>reate products
* <strong>R</strong>ead products
* <strong>U</strong>pdate products
* <strong>D</strong>elete products
* Show products details
* Sale prodcuts



![multi_persistence](docs/multi_persistence.jpg)    

# Install dependencies

* [Node](https://nodejs.org/en/download/)
* [Docker](https://docs.docker.com/docker-for-windows/install/)
* [Docker Compose](https://docs.docker.com/compose/install/)
* [Kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)
* [Minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/)

# Running from DOCKER

## Create docker images

    $ make

![make](docs/multi_persistence_make_docker_images.gif)    

## Start composer

    $ dokcer-composer up

![dokcer-composer up](docs/multi_persistence_up.gif)


# Running from KUBERNETES

 $ kubectl apply -f couch-service.yaml,mongo-service.yaml,node-express-service.yaml,postgres-service.yaml,redis-service.yaml,couch-deployment.yaml,mongo-deployment.yaml,node-express-deployment.yaml,postgres-deployment.yaml,redis-deployment.yaml


 ![kompose up](docs/multi_persistence_kubernetes_minikube.gif)

# Author

@Name: Fabricio Goncalves (Espigah)

@Twitter: https://twitter.com/espigah

@Linkdin: https://www.linkedin.com/in/fabricio-gon%C3%A7alves-919a4424/

@Git: https://github.com/Espigah

@Blog: https://fabriciogoncalves.com

@email: fsrg@outlook.com



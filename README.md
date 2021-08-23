# Develop tooling

This repository contain a docker configuration to generate a different resources which are commonly needed when developing in local environment.

## How to use.

Docker compose will up some resources defined in `docker-compose.yaml` file using a new common network `localnet` that you need to create first. 

```sh
1. docker network create localnet
2. docker-compose up
```

🚀 This repository will store all your info in the `volumes` folder. So, if you delete the ignored `volume` folder all data will be lost.

⚠️ Please make sure you have the same network in this resources repository and all your other services working with docker. 

## Docker resources documentation.
[Rabbit MQ](https://hub.docker.com/_/rabbitmq)

[Redis](https://hub.docker.com/r/bitnami/redis/)

[MariaDB](https://hub.docker.com/_/mariadb)

## How to use it.
First, you need to know your system must live in the same network with this repository, as that, the available url to connect the resources with your system is defined as a `container_name` in `docker-compose.yaml` file.

Also, you can connect to these resources from your local client or web browser. These connections will be explained in each section because there are different ways to do that.

### Rabbit mq server
http://localhost:15672   guest:guest

### Maria Database

Util commands

```sh
docker exec mariadb mysql --version
docker exec mariadb mysql -e 'show databases;'
docker exec mariadb mysql -uroot -pDBPassword -e 'show databases;'
docker exec -it mariadb mysql
```

When you run this command, the mariadb will live inside a ubuntu system so if you try to connect to it with `mysql` command you will try to connect to your main filesystem database and not to docker database. 
```sh
> which mysql
/usr/local/bin/mysql
```

#### TLDR;
This database is exposed in port `3307` to don't crash by port match with local databases
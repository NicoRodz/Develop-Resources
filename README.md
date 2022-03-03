nuevo feature de test para release
# Develop tooling

This repository contain a docker configuration to generate a different resources which are commonly needed when developing in local environment.

## How to use.

Docker compose will up some resources defined in `docker-compose.yaml` file using a new common network `localnet` that you need to create first. 

```sh
1. docker network create localnet
2. docker-compose up -d
```

🚀 This repository will store all your info in the `volumes` folder. So, if you delete the ignored `volume` folder all data will be lost.

⚠️ Please make sure you have the same network in this resources repository and all your other services working with docker. 

## Docker resources documentation.
[Rabbit MQ](https://hub.docker.com/_/rabbitmq)

[Redis](https://hub.docker.com/r/bitnami/redis/)

[MariaDB](https://hub.docker.com/_/mariadb)

# How to use it.
First, you need to know your system must live in the same network with this repository, as that, the available url to connect the resources with your system is defined as a `container_name` in `docker-compose.yaml` file.

Also, you can connect to these resources from your local client or web browser. These connections will be explained in each section because there are different ways to do that.

## Rabbit mq server
To see the console in the web browser just use.
```sh
http://localhost:15672   guest:guest
```
To connect to the queues from local, you need to use the docker url exposed in docker-compose file which is `rabbitmq`.
```sh
amqp://guest:guest@rabbitmq:5672
```

## Maria Database

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

## Redis
If you want to use celery connection with python, do the following:
```sh
> pip install -U "celery[redis]"
redis://:password@hostname:port/db_number
Info: all fields after the scheme are optional, and will default to localhost on port 6379, using database 0.
> redis://redis:6379/0
```
# TLDR;
This database is exposed in port `3307` to don't crash by port match with local databases


# How to tag

Basic tags
```bash
git tag v0.2.0 #this creates a new tag for the current commit
git tag v0.1.0 commit-hash #Tag oldest commits
git tag -d v0.1.0 #Delete tag
git tag -h #HELP
git tag -l #List and filter tags
git tag -l "v0.1.*"
git tag -l "v0.*.0"
git tag -l "v2.*"
```

Move between tags
```bash
git checkout v0.1.0 #Will generate detached tag
```

Annotated tags
```bash
git tag -a v0.1.0
git show v0.1.0
git push origin --tags
```
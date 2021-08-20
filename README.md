# Alba develop tooling

This repository will help you to compose all backend for alba in local environment.

## How to use.

This repository will up three main resources that you need. The first is a mariadb, next is rmq queue and a redis db. 

```
1. docker-compose up
```

⚠️ Please make sure you have the same network in this repository and all other micro services. 

🚀 This repository will store all your info in the `volumes` folder.

## Resources documentation.

[Rabbit MQ](https://hub.docker.com/_/rabbitmq)
[Redis](https://hub.docker.com/r/bitnami/redis/)
[MariaDB](https://hub.docker.com/_/mariadb)

## How to use it.

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
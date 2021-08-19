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
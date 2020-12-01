Simple (incomplete) Express API Boilerplate with swagger-ui-express
==
Usage:
---
```
npm start
```

Prerequisites:
---
MySQL >= 5.7

Docker run command to spin up a containerised version for dev environment:
```
docker run -it -e ALLOW_EMPTY_PASSWORD=yes -e MYSQL_USER=test -e MYSQL_PASSWORD=test -e MYSQL_DATABASE=test -e MYSQL_AUTHENTICATION_PLUGIN=mysql_native_password -v /MOUNT-MY-VOLUME:/bitnami/mysql/data -p 3306:3306 bitnami/mysql:latest
```
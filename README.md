# nodejs-mongodb-docker
Example of NodeJs with MongoDB on Docker. 

# SEE ALSO 
info-code.txt

# INFO 
docker version
docker info

# CREATE
docker container run -it --publish 80:80 nginx
docker container run --detach --publish 8080:80 --name mydocker nginx  // go to http://localhost:8080/
docker container run -d -p 8081:80 --name myapcahe httpd
docker container run -d -p 3306:3306 --name minemysql mysql

// ubuntu
docker container run --detach --publish 8080:80 --volume $(pwd):/usr/share/nginx/html --name docloc1 nginx

// win
docker container run --detach --publish 8080:80 -v /c/wamp64/www/nodejs-mongodb-docker://usr/share/nginx/html --name docloc1 nginx
docker container run --detach --publish 8080:80 -v /c/wamp64/www/nodejs-mongodb-docker://usr/share/nginx/html --name docloc1 nemanjamil/nginx-website

# REMOVE
docker container rm [ID of container or first 3 letters] []
docker rm $(docker ps -a -q) -f

# LIST
docker ps -a  // list all container's
docker container ls -a

# IMAGES 
docker image ls

# START STOP
docker container stop or start " NAME OF _>mysql ili nginx il httpd"
docker kill "first 3 letters ID, aaa, bbb"

# ENTER CONTAINER 
docker container exec -it nameofcontainer bash

# DOCKER IMAGE BUILT 
1. must be in that directory where is Dockerfile
docker image build -t nemanjamil/nginx-website .

2. get image
docker container run -d -p 8083:80 nemanjamil/nginx-website

3. push image to hub.docker
docker push nemanjamil/nginx-website

# COMPOSE
docker-compose up
docker-compose up -d // start in background 
docker-compose down


# LIST WEBSITE
https://hub.docker.com


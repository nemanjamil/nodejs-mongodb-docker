# this is for nginx 
# FROM nginx:latest
# WORKDIR /usr/share/nginx/html
# COPY . . 

FROM node:10 
# we can use node:latest 

WORKDIR /usr/src/app

# we need to copy package.json file into root of container
COPY package.json ./
COPY npm-shrinkwrap.json ./

RUN npm install

COPY . . 

EXPOSE 3000

# this start node index.js
CMD ["npm","start"] 
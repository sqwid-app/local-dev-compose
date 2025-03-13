FROM node:18 as builder

RUN apt-get update && apt-get -y upgrade && apt-get install -y node-gyp git

WORKDIR /usr/app
RUN git clone https://github.com/sqwid-app/sqwid-backend.git

COPY /server/.env /usr/app/sqwid-backend/.env

WORKDIR /usr/app/sqwid-backend
RUN yarn install

EXPOSE 80

ENTRYPOINT ["yarn", "start"]


FROM node:18 as builder

RUN apt-get update && apt-get -y upgrade && apt-get install -y node-gyp git

WORKDIR /usr/app
RUN git clone https://github.com/sqwid-app/sqwid-client.git

WORKDIR /usr/app/sqwid-client
RUN yarn install
RUN rm /usr/app/sqwid-client/src/constants/networks.js
COPY /client/dev/networks.js /usr/app/sqwid-client/src/constants/networks.js

EXPOSE 3000

ENTRYPOINT ["yarn", "start"]
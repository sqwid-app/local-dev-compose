FROM node:18-alpine

RUN apk add --no-cache python3 py3-pip make g++ 

WORKDIR /app

COPY /indexer/package.json /indexer/package-lock.json ./
RUN npm install

COPY /indexer .

RUN make build

EXPOSE 3001 4000 4350

CMD ["sh", "-c", "make process & make serve"]
FROM node:18-alpine

RUN apk add --no-cache python3 py3-pip make g++ git

WORKDIR /app
RUN git clone https://github.com/sqwid-app/marketplace-indexer .
RUN npm install

COPY /indexer .

RUN make build

EXPOSE 3001 4000 4350

CMD ["sh", "-c", "make process & make serve"]
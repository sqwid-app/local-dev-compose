#!/bin/bash

# Check if the dev.docker-compose.yml file exists
if [ ! -f dev.docker-compose.yml ]; then
  echo "Error: dev.docker-compose.yml file not found!"
  exit 1
fi

# Run docker-compose with dev.docker-compose.yml
docker-compose -f dev.docker-compose.yml up --build

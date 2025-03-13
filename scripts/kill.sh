#!/bin/bash

# Stop all running containers if any
docker ps -q | xargs -r docker stop

# Remove all containers if any (including stopped ones)
docker ps -a -q | xargs -r docker rm

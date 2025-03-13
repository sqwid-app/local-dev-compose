# Sqwid Docker Compose

Docker Compose configuration for deploying the Sqwid Marketplace, including backend, database, indexer, and client services.

## Hardware Requirements
To ensure optimal performance, your system should meet the following minimum requirements:

### Recommended Configuration:
- **RAM:** 8GB or more
- **Storage:** SSD with at least 20GB of free space

## Prerequisites
Before running the Sqwid Marketplace, you need to set up the required environment variables. Follow these steps:

### Setting Up Environment Variables
1. Navigate to the respective directories:
   - `indexer/`
   - `server/dev/`
2. Copy the `.env.sample` file in each directory and rename it to `.env`:
   ```sh
   cp indexer/.env.sample indexer/.env
   cp server/dev/.env.sample server/dev/.env
   ```
3. Open each `.env` file and replace the placeholder values with the required environment variables.

## Running Sqwid Marketplace

### To Run Mainnet Dev Sqwid
Use the following command:
```sh
docker-compose -f dev.docker-compose.yml up --build
```

### To Run Mainnet
```sh
docker-compose up --build
```

## Scripts

### Running Mainnet Dev Sqwid
#### 1. Give Execution Access
```sh
chmod +x ./scripts/dev-run.sh
```

#### 2. Run the Script
```sh
./scripts/dev-run.sh
```

### Kill All Docker Containers on Machine
If you need to stop all running Docker containers:
```sh
./scripts/kill.sh
```


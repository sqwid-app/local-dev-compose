FROM --platform=linux/amd64 debian:bookworm-slim

WORKDIR /app

RUN apt-get update && apt-get install -y curl && \
    curl -L -o reef-node https://github.com/reef-defi/reef-chain/releases/download/v10/reef-node && \
    chmod +x reef-node

EXPOSE 30333 9933 9944 9615

CMD ["./reef-node", "--dev", "--rpc-external", "--ws-external"]

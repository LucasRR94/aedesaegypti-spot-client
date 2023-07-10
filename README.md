# aedesaegypti-spot-client

This application is the client side of the project [aedesaegypti-spot](https://github.com/julianojj/aedesaegypti-spot).

## Pre requisites

This application uses docker compose, so the pre requisites to correct installation are:

- docker
- docker compose

## Installation

To running the development container, is required to use the command:

```
docker compose up
```

ps: if you docker compose returned an error, please check if you aren't running an old version that uses docker compose. Instead of the supplied command use **docker-compose**.

## Usage

The application can be execute by using the command:

```
docker compose up
```

The development environment expose development server in the port 3000. So if you want to check the client side is necessary to access the
localhost at the port 3000.

This application uses node and npm package manager,

authors:[Lucas Rocha](https://github.com/LucasRR94/) , [Juliano Silva](https://github.com/julianojj)

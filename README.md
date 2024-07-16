# docker-basics
This educational repository has 2 simple node projects which were dockerized to be used for an easy introduction to Docker.

## Setup
- Download and install [Node.js](https://nodejs.org/en/download/package-manager)
- Download and install [Docker Desktop](https://docs.docker.com/get-docker/) by following the guide for your platform
- Install npm packages for both the projects by running `npm i` on the root folder for each one

## simple-dockerfile
This project saves a local log file based on the time that the exposed endpoint was called. It's possible to run this project without Docker. The intention is to demonstrate that a project can be easily dockerized and run as a conteiner.

### Without Docker
Installing packages

	npm i

Running the project

	npm start

Making a request to GET http://localhost:3000/ will save a local log file. This can be done with apps like Insomnia or by simply going to that address on you browser of choice.

### With Docker
The project has a Dockerfile, a series of instructions to create an image.
With Docker installed, build the image of the project

    docker build -t simple-dockerfile:v1 .

Then create the container using the project's image

	docker run -p 3000:3000 --name simple-container simple-dockerfile:v1

You can now make the same GET request aforementioned, but a keen eye will see that new log files are not been created like before. They are been created, but are only visible inside the container because there is no volume configured. This will be address on the other project. For now, you can access the container to see that the logs are been created inside it

	docker exec -it simple-container sh

## simple-compose
This project expands the simple-dockerfile one by adding a database layer. The timestamp used for logging is retrieved from a Postgres database. It is possible to run this project without Docker too, but nothing different will be learned aside from setting up a local database. Also, Docker allows us to transform this whole setup into an abstraction, so we'll focus on the containerization.
The project has a docker-compose.yml file, which is a recipe to put the whole system up, with all the dependencies necessaries. It will run a Postgres database and run the project

	docker compose up

Just like before, a GET request will create the log file, and this time locally too.

## examples
On the examples folder there are some examples of Dockerfiles and docker-composes.
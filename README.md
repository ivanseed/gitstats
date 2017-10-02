# GitStats

## Introduction
A simple PreactJS app that uses the GitHub search API to display repositories in a list. Details like such as the number of forks, number of stars
and a short description of each repository are shown. 

The repositories can be sorted in ascending/descending order based on number of stars or forks or the last updated time.



## Setup for Development

`npm install` then `npm run start`

## Deploying
To deploy I run the build step and move the new js and css files to the docs folders which is the root GitHub pages folder. However please do not commit changes to the docs folders as I will do this manually.

## Running with Docker
If you are comfortable using Docker, you can build this image.

The only command to build this image is:

```bash
docker build -t gitstats:development .
```

If the image fails on the building process, check out the log, could be failing tests.

Once the image is built, you can run it:

```bash
docker run -d -p 8080:8080 gitstats:development
```

### Docker Compose
You can run this image using the `docker-compose.yml` file.

```bash
docker-compose up -d
```

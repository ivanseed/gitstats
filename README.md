# GitStats

## Introduction
A simple PreactJS app that uses the GitHub search API to display repositories in a list.

Live site:
https://gitstats.io

[![Build Status](https://travis-ci.org/ivanseed/gitstats.svg?branch=master)](https://travis-ci.org/ivanseed/gitstats) [![Code Climate](https://codeclimate.com/github/ivanseed/gitstats/badges/gpa.svg)](https://codeclimate.com/github/ivanseed/gitstats)

![gitstats.io](./GitStatsView.png)

## Features

* Search for github repositories by name.

* Details like such as the number of forks, number of stars and a short description of each repository are shown.

* The repositories can be sorted in ascending/descending order based on number of stars or forks or the last updated time.

## Setup for Development

Please make sure that node js is setup on the dev machine by running the command below:

  `npm -v`

If not installed, download and install node from here: https://nodejs.org/en/

Run the command below to install the required dependenices:

  `npm install`

To run the app on your local machine use the command below:

  `npm run start`

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

## External Libraries Used

* [axios](https://github.com/axios/axios)
* [data-fns](https://date-fns.org)
* [preact-helmet](https://www.npmjs.com/package/preact-helmet)
* [node-emoji](https://github.com/omnidan/node-emoji)
* [react-octicons](https://insin.github.io/react-octicon/)

## Additional Resources

* https://preactjs.com/

## License

[MIT License Copyright (c) 2017 Ivan Seed](https://github.com/ivanseed/gitstats/blob/master/LICENSE)
# GitStats
A simple PreactJS app that uses the GitHub search API to display repositories in a list.

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

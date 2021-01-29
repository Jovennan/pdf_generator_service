# pdf_generator_service

To build the image:

```
docker build -t pdf_generator_image .
```

To run the container:

```
// To use a custom external port
export PORT=8081

docker run -it --rm -p ${PORT}:8080 --name pdf_generator_service pdf_generator_image
```

Access the service in port 8081.

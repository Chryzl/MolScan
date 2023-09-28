# MolScan
Optical Structure Recognition using OSRA

## Running backend server

### Starting docker
The docker image is based on this repo: https://github.com/daverona/docker-osra/

#### Building
```
    cd <backend-folder> 
    docker build -t <your-image-name> .
```

#### Running
```
    docker container run --rm --publish 3000:3000 <your-image-name>
```

This will run the image in a new container and map the exposed port 3000 to the machines port 3000.

To not keep the container, `--rm` will remove it, after it is stopped.
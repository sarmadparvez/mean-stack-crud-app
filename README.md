# MEAN Stack CRUD application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Dockerization
To create a docker image for the app Run `docker build -t  <image-name> .`

Running the app through container `docker run -d -it -p 4201:80/tcp --name angular-crud <image-name>`

After that, to run the app in browser, open `http://localhost:4201`

## dockerhub
The application's image is also available publically on docker hub.

`docker pull sarmadparvez/angular-crud` 

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## What I learned
- Angular development
- Dockerizing an Angular app

# Stage 1

# base image
FROM node:12.14 as build-step

RUN mkdir -p /app

WORKDIR /app

COPY . /app

RUN npm install

RUN npm run build --prod

FROM nginx:1.17.1-alpine

# nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

COPY ./default.conf /etc/nginx/conf.d/default.conf

COPY --from=build-step /app/dist /usr/share/nginx/html


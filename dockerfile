FROM nginx:latest

COPY build/ /usr/share/nginx/html/

COPY default.conf /etc/nginx/conf.d/

EXPOSE 80
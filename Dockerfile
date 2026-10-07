FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY ["mikrotik wizard.html", "/usr/share/nginx/html/index.html"]
COPY main.js i18n.js /usr/share/nginx/html/

EXPOSE 80

FROM node:20.10.0-alpine

COPY server.js /opt/project-docker-app-nodejs/

WORKDIR /opt/project-docker-app-nodejs/

CMD ["node", "server.js"]

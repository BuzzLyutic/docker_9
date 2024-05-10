FROM node:14

WORKDIR /usr/src/web

COPY package*.json ./

RUN npm install express axios

COPY . .

EXPOSE 3000

CMD [ "node", "server.js" ]

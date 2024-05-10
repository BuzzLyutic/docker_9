FROM node:14

WORKDIR /usr/src/api

COPY package*.json ./

RUN npm install express

COPY . .

EXPOSE 3001

CMD [ "node", "api.js" ]

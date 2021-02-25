FROM node:14

//work direct
WORKDIR /usr/rom/tool

COPY package*.json ./

RUN npm install
COPY . .

CMD [ "node", "app.js" ]

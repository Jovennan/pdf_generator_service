FROM node:lts-alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

# If you are building your code for production
# RUN npm ci --only=production

COPY . .

EXPOSE 8080

CMD [ "node", "src/server.js" ]
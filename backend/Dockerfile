FROM node:14
WORKDIR /app
COPY package.json ./
RUN npm install && npm install wait-port
COPY . .
EXPOSE 3000
CMD npx wait-port db:3306 && node app.js
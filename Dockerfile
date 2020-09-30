FROM node:12.13-alpine as development

WORKDIR /usr/src/app

COPY package.json .
RUN npm install

COPY . .

EXPOSE 3000
CMD [ "npm", "run", "start:prod" ]

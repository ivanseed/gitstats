FROM node:6

WORKDIR /app

COPY package.json /app

RUN npm install

COPY src/ /app/src/

EXPOSE 8080

ENTRYPOINT ["npm", "run", "start"]

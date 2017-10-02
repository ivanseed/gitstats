FROM node:6

WORKDIR /app

COPY package.json /app

RUN npm install --quiet

COPY src/ /app/src/

EXPOSE 8080

CMD ["npm", "run", "start"]

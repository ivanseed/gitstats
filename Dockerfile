FROM node:6

WORKDIR /app

COPY package.json package-lock.json .eslintrc .eslintignore /app/

RUN npm install --loglevel=error

COPY src/ /app/src/

EXPOSE 8080

CMD ["npm", "run", "start"]

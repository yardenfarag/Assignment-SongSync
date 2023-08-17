FROM node:18 AS Production

ENV NODE_ENV=production

WORKDIR /usr/src/backend

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . . 

RUN npm install -g @nestjs/cli

RUN npm run build

CMD ["node", "dist/main"]
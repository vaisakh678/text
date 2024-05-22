FROM node:20.12.0
WORKDIR /usr/src/build
COPY package.json package-lock.json ./
ENV NODE_ENV=dev
RUN npm i
COPY ./ ./
RUN npm run build:dev
EXPOSE 3000
CMD [ "node", "./dist/index.js" ]
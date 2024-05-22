FROM node:20.12.0 as TextBuild
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm i
COPY ./ ./
RUN npm run build:dev

FROM nginx:alpine
COPY --from=TextBuild /www /usr/share/nginx/html/
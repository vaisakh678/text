FROM node:20.12.0
WORKDIR /usr/src/build
COPY package.json package-lock.json ./
ENV env=dev
RUN npm i
COPY ./ ./
RUN npm run build
EXPOSE 3000
CMD ["sh", "-c", "npm run start:$env"]
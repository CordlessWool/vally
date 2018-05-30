FROM node:8

WORKDIR /usr/src/app
ADD . .

RUN npm install
RUN npm install enduro -g --unsafe-perm

EXPOSE 5000

CMD [ "enduro", "start" ]

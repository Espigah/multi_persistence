FROM node:13-alpine

ARG VERSION=1.0.0

#make sure node_modules have correct permissions 
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app 

ENV NODE_ENV = dev

#To install global npm dependencies, it is recommended to place those dependencies in the non-root user directory. (@see https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#global-npm-dependencies)
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin

WORKDIR /home/node/app

COPY package*.json ./


RUN npm install && npm audit fix

#RUN npm prune --production

COPY . .

COPY --chown=node:node . .

USER node

EXPOSE 4321

CMD [ "npm", "run", "start" ]
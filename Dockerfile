FROM openjdk:11.0.16-jdk
ARG PORT
ENV PORT ${PORT}
EXPOSE ${PORT}
RUN apt-get update && apt-get install \
    lsb-release curl  -y
RUN curl -sL https://deb.nodesource.com/setup_18.x -o nodesource_setup.sh
RUN bash nodesource_setup.sh
RUN apt-get install -y nodejs
VOLUME [ "/workspace/app" ]
WORKDIR /workspace/app
COPY package.json .
COPY package-lock.json .
COPY routes routes
COPY tests tests
COPY application.js .
COPY server.js .
RUN npm run build
RUN npm run test
ENTRYPOINT [ "npm", "run", "start" ]
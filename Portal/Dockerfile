FROM node:10-alpine

WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (n  pm@5+)
COPY package*.json ./

RUN npm install

# Bundle app source
COPY src src
COPY server server
COPY configs configs
COPY angular.json angular.json
COPY webpack.config.js webpack.config.js
RUN npm run build

EXPOSE 6006

# We probably want to bump the version here?
# npm version prerelease --preid=${env.UNIQUE_BUILD_ID} --no-git-tag-version

# Run the Server in production mode
CMD [ "npm", "run", "serve" ]
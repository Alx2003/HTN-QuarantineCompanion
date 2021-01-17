FROM node:14
WORKDIR /usr/src/app

# install deps
COPY package*.json ./ 
RUN npm install
# Bundle app source
COPY . .

EXPOSE 3000
CMD ["npm", "start"]

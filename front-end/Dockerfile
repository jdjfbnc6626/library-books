# What image do you want to start building on?
FROM node:latest

# Tell your container where your app's source code will live
WORKDIR /front-end

# What source code do you want to copy, and where to put it?
COPY package*.json ./

# Does your app have any dependencies that should be installed?
RUN npm install

# Maximize efficiency through correct copy
COPY . .

# What port will the container talk to the outside world with once created?
EXPOSE 3000

# How do you start your app?
CMD [ "npm", "start" ]
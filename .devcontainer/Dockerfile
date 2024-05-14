FROM debian:bullseye-slim

# Update System
RUN apt-get update


# Install extra packages
RUN apt-get install git -y
RUN apt-get install nodejs -y
RUN apt-get install npm -y
RUN apt-get install curl -y


# Install Node
RUN npm install -g n
# Update Node to Latest Version
RUN n latest
RUN hash -r


# Install Angular
RUN npm install -g @angular/cli

# Install python, django
RUN apt-get install python3-pip -y
RUN pip3 install Django
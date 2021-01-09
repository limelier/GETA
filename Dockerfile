# use the nodejs image as a base
FROM node
# copy project files to docker image
COPY . .
# run on image building
RUN npm install
EXPOSE 1234

# run on start
CMD npm start

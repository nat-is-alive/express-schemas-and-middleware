FROM node:slim
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080 3000
CMD ["npm", "run", "dev"] 

# To build and run container:
# - docker build -t <image-name> .
# - docker run -dp 8080:8080 -p 3000:3000 <image-name>
# - ensure docker is installed and you may need to use sudo before these commands
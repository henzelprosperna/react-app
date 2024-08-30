# Step 1: Build the React app
FROM node

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

# Step 2: Serve the React app using a lightweight web server
FROM nginx

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

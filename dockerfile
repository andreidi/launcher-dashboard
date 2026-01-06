# Build stage
FROM node:20-alpine AS build
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source files
COPY . .

# Build the Angular app
RUN npm run build -- --configuration production

# Production stage
FROM nginx:alpine-slim

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy only the built files (not node_modules)
COPY --from=build /app/dist/launcher-dashboard/browser /usr/share/nginx/html

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

# Use official Node.js 20 image as the base
FROM node:20-alpine AS builder

# Set working directory inside the container
WORKDIR /app

# Copy package files first to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of your source code
COPY . .

# Build the Next.js app for production
RUN npm run build

# --- Production Stage ---
FROM node:20-alpine AS runner
WORKDIR /app

# Set NODE_ENV to production for optimization
ENV NODE_ENV=production

# Copy built assets from builder stage
COPY --from=builder /app ./

# Expose the port Next.js runs on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]

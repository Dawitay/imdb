# --- Builder Stage ---
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .

# Skip type checking for lighter builds
ENV NEXT_TELEMETRY_DISABLED=1
ENV CI=true

# Build without type-check (saves memory)
RUN npm run build --no-lint

# --- Runner Stage ---
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app ./

EXPOSE 3000
CMD ["npm", "start"]

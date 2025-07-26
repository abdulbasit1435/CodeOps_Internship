# Base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy only package files first (better caching)
COPY app/package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the app
COPY app .

# Create a non-root user
RUN useradd --create-home --shell /bin/bash appuser
RUN chown -R appuser /app

# Switch to that user
USER appuser

# Expose port (if needed)
EXPOSE 3000

# Start app
CMD ["npm", "start"]

# Healthcheck to ensure app is responding
HEALTHCHECK --interval=30s --timeout=10s --start-period=10s --retries=3 \
  CMD curl -f http://localhost:3000/ || exit 1


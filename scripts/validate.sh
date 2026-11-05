#!/bin/bash
# Wait for application startup
sleep 3

# Check health route for successful response
curl -f http://localhost:3000/health

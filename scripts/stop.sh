#!/bin/bash
# Stop running application instance
pkill -f "node server.js" || true

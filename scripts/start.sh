#!/bin/bash
# Move to application folder and start Node process in background
cd /home/ec2-user/app
nohup node server.js > app.log 2>&1 &

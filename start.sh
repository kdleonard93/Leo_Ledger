#!/usr/bin/env bash

# Exit on error
set -o errexit

# Start Gunicorn with Uvicorn workers
exec gunicorn finance_project.asgi:application \
    --bind 0.0.0.0:$PORT \
    --workers 4 \
    --worker-class uvicorn.workers.UvicornWorker \
    --log-file -
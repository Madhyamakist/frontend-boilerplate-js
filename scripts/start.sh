#!/bin/bash

echo "Starting the development server..."

# Optional: check if node_modules exists
if [ ! -d node_modules ]; then
  echo "node_modules not found. Run ./setup.sh first."
  exit 1
fi

npm run dev

if [ $? -ne 0 ]; then
  echo "Failed to start the server. Check for errors above."
  exit 1
fi

#!/bin/bash

echo "🔧 Installing dependencies using npm..."

# Optional: check if package.json exists
if [ ! -f package.json ]; then
  echo "package.json not found. Are you in the project root?"
  exit 1
fi

npm install

if [ $? -eq 0 ]; then
  echo "Dependencies installed successfully!"
else
  echo "Installation failed."
  exit 1
fi
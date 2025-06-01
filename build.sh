#!/bin/bash

# Build the project
npm run build

# Copy static assets to dist
cp -r Images dist/
cp -r Fonts dist/
cp -r js/vendor dist/js/
cp -r css/vendor dist/css/
cp lottie.min.js dist/

# Copy additional vendor scripts referenced in HTML
mkdir -p dist/js/vendor
cp js/vendor/lazysizes.min.js dist/js/vendor/

echo "Build complete with all assets copied!"
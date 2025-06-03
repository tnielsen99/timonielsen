import { execSync } from 'child_process';
import { copyFileSync, mkdirSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';

// Helper function to copy directory recursively
function copyDir(src, dest) {
  mkdirSync(dest, { recursive: true });
  const entries = readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
    }
  }
}

console.log('Starting Vercel build process...');

try {
  // Build SCSS
  console.log('Building SCSS...');
  execSync('npm run sass:build', { stdio: 'inherit' });

  // Build with Vite
  console.log('Building with Vite...');
  execSync('vite build', { stdio: 'inherit' });

  // Copy static assets
  console.log('Copying static assets...');
  
  // Copy Images
  copyDir('Images', 'dist/Images');
  
  // Copy Fonts
  copyDir('Fonts', 'dist/Fonts');
  
  // Copy vendor files
  mkdirSync('dist/js/vendor', { recursive: true });
  copyDir('js/vendor', 'dist/js/vendor');
  
  mkdirSync('dist/css/vendor', { recursive: true });
  copyDir('css/vendor', 'dist/css/vendor');
  
  // Copy lottie.min.js
  copyFileSync('lottie.min.js', 'dist/lottie.min.js');

  console.log('Build complete!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}
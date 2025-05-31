# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static portfolio website with a focus on animations and visual effects. The project uses vanilla JavaScript with GSAP for animations, Barba.js for page transitions, and pre-compiled SCSS for styling.

## Architecture

The codebase follows a traditional static website structure:
- **HTML Pages**: Main entry at `home.html`, additional pages in `pages/`, work details in `works/`
- **Styles**: SCSS source files in `scss/` (organized by components), compiled CSS in `css/style.css`
- **JavaScript**: Modular ES6 architecture with main entry at `js/index.js` and feature modules in `js/modules/`
- **Assets**: Custom fonts in `Fonts/`, third-party libraries in `js/vendor/` and `css/vendor/`

## Key Libraries and Dependencies

- **GSAP v3.10.4**: Animation engine
- **Barba.js**: Page transition management
- **Locomotive Scroll v4.1.4**: Smooth scrolling and parallax
- **Splitting.js**: Text splitting animations
- **Lottie v5.9.1**: Animation player
- **Vite**: Modern build tool with hot module replacement
- **Sass**: SCSS compilation with automatic builds

## Development Commands

### Initial Setup
```bash
# Install dependencies
npm install

# Start development server with hot reload
npm run dev

# The site will open automatically at:
http://localhost:3000/home.html
```

### Build Commands
```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Watch SCSS files for changes (development)
npm run sass:watch

# Build CSS from SCSS (one time)
npm run sass:build

# Clean build artifacts and dependencies
npm run clean
```

## Important Development Notes

1. **CSS Compilation**: SCSS files are now automatically compiled when running `npm run dev` or `npm run build`.

2. **JavaScript Modules**: The site uses ES6 modules with dynamic imports. Each page has its own animation handler module.

3. **Page Structure**: Each HTML page follows a consistent structure with data attributes for animations and transitions.

4. **Animation System**: Heavy use of GSAP animations triggered by scroll events and page transitions.

5. **Package Management**: Dependencies are now managed via npm with package.json.

6. **Build Output**: Production builds are generated in the `dist/` directory with optimized assets.
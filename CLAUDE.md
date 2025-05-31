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
- **No build tools**: Currently no npm/webpack/vite setup

## Development Commands

Since this is a static site without build tools:
```bash
# Start a local server (choose one):
python -m http.server 8000
# or
npx serve .
# or use any static file server

# Access the site at:
http://localhost:8000/home.html
```

## Important Development Notes

1. **CSS Compilation**: The SCSS files are pre-compiled. To modify styles, you'll need to compile SCSS manually or set up a build process.

2. **JavaScript Modules**: The site uses ES6 modules with dynamic imports. Each page has its own animation handler module.

3. **Page Structure**: Each HTML page follows a consistent structure with data attributes for animations and transitions.

4. **Animation System**: Heavy use of GSAP animations triggered by scroll events and page transitions.

5. **No Package Management**: Currently no package.json or dependency management system in place.
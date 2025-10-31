# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a portfolio website featuring animated page transitions, smooth scrolling, and interactive visual effects. The site is built with vanilla JavaScript (ES6 modules), SCSS, and relies heavily on animation libraries for rich user experiences.

## Architecture

### JavaScript Structure

The codebase uses ES6 modules with a clear separation of concerns:

- **Entry Point**: `js/index.js` - Initializes global and module-specific JavaScript
  - `initJsGlobal()`: Functions that run once and persist across page transitions (menu handling, GSAP config, text splitting)
  - `initJsModule()`: Functions that reinitialize on each page transition (sliders, scrolling, animations)

- **Modules** (`js/modules/`): Self-contained animation and interaction handlers
  - Page-specific animations: `handleAnimate[PageName].js` (About, Works, Contact, Playground, Home, WorksDetail)
  - Core features: `pageTransition.js`, `handlePreloader.js`, `horizontalScroll.js`
  - UI interactions: `handleMenu.js`, `handleTransitionMenu.js`, `hoverScaleGrey.js`
  - Third-party integrations: `locomotive.js`, `Splitting.js`, `handleLoadLottie.js`

- **Services** (`js/services/`): Currently minimal, intended for shared utilities

### Page Transition System

The site uses **Barba.js** for SPA-like page transitions without full page reloads. Key points:

- Custom transition animations defined in `pageTransition.js`
- The `.transition` element animates between pages with text splitting effects
- Each page namespace triggers specific animation handlers (e.g., entering "about" page calls `handleAnimateAbout()`)
- Functions in `initJsGlobal()` persist across transitions; `initJsModule()` functions reinitialize

### SCSS Architecture

Organized using a modified BEM/ITCSS approach:

- `scss/base/`: Foundational styles (`_reset.scss`, `_font.scss`, `_layout.scss`)
- `scss/components/`: Reusable UI components (`_header.scss`, `_footer.scss`, `_menu.scss`, `_menuMobile.scss`, `_loader.scss`, `_transition.scss`)
- `scss/pages/`: Page-specific styles organized by route
  - Each page has its own directory (home, about, works, contact, play-ground, works-detail-pages)
  - Page directories contain an `_index.scss` plus component partials
- `scss/scss-utils/`: Mixins, variables, breakpoints, helpers

**SCSS is pre-compiled to CSS** - edit `.scss` files, not `css/style.css`. The compiled CSS is located at `css/style.css`.

### Third-Party Libraries

All loaded via CDN in HTML files:

- **GSAP** (GreenSock Animation Platform): Core animation engine used throughout
- **ScrollTrigger**: GSAP plugin for scroll-based animations
- **Locomotive Scroll**: Custom smooth scrolling (config in `js/modules/locomotive.js`)
- **Barba.js**: Page transition framework
- **Splitting.js**: Text animation effects (character/word splitting)
- **Lottie**: JSON-based animations (`lottie.min.js`)
- **Masonry**: Grid layouts on some pages
- **Imagesloaded**: Ensures images load before animations
- **Lazysizes**: Lazy loading images

## Key Development Patterns

### Animation Handlers

Each page-specific animation module follows this pattern:

```javascript
const handleAnimate[PageName] = () => {
  const scrollContainer = document.querySelector("[data-scroll-container]");
  // Check if on the correct page
  if (!scrollContainer?.classList.contains('[page-prefix]')) return;

  // Set up GSAP timelines and animations
  // Usually includes ScrollTrigger integration
};
```

### Adding New Pages

1. Create HTML file in `pages/` directory
2. Create SCSS partial in `scss/pages/[page-name]/`
3. Create animation handler in `js/modules/handleAnimate[PageName].js`
4. Import and call handler in `initJsGlobal()` in `js/index.js`
5. Add navigation link with appropriate `data-menu` attribute
6. Add corresponding transition item in `.transition-group`

### Responsive Design

Breakpoints are defined in `scss/scss-utils/_breakpoints.scss` using mixins:
- Use `@include respond-above(xl)` for desktop-specific styles
- Mobile-first approach: base styles are mobile, desktop overrides added via mixins
- JavaScript checks: `window.matchMedia("(min-width: 1024px)")` for conditional behavior

## File Paths and Asset Loading

- **Images**: `/Images/` (absolute path from root)
- **Fonts**: `/Fonts/` (loaded via `@font-face` in `scss/base/_font.scss`)
- **CSS**: `css/style.css` (compiled from SCSS)
- **JavaScript**: ES6 modules loaded with `type="module"`

## Running the Site

This is a static site with no build process configured in the repository. To develop locally:

```bash
# Serve the site with any static server
python -m http.server 8000
# or
npx serve
# or
php -S localhost:8000
```

Then navigate to `http://localhost:8000/home.html`

## SCSS Compilation

SCSS files must be compiled to CSS before changes are visible. No build tool is currently configured in the repo. Use your preferred SCSS compiler:

```bash
# Watch for SCSS changes and compile
sass --watch scss:css

# One-time compilation
sass scss:css/style.css
```

## Common Tasks

### Debugging Animations

- GSAP config includes `nullTargetWarn: false` to suppress missing element warnings
- Check browser console for errors
- Use GSAP DevTools in development to scrub timelines
- Verify elements exist in DOM before animation (especially with Barba page transitions)

### Modifying Page Transitions

Edit `js/modules/handleTransitionMenu.js` and `js/modules/pageTransition.js`. The transition system uses:
- `.transition-item.active` to show current page name during transition
- Splitting.js for character-by-character text animation
- GSAP timeline with `Expo.easeInOut` easing

### Working with Locomotive Scroll

- Configuration in `js/modules/locomotive.js`
- Elements need `data-scroll-container` wrapper
- Individual animated elements use `data-scroll-section`
- Smooth scrolling disabled on mobile/tablet
- Call `scroll.update()` after DOM changes

### Menu System

Two menus exist:
- **Desktop**: `.menu` - Full-page overlay with numbered links
- **Mobile**: `.menuMobile` - Hamburger menu with burger button (`.nav-burger`)
- Both use `data-menu` attributes to trigger corresponding transition animations

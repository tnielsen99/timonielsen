# Design & Visual Specifications
## Small Business Portfolio Transformation

**Purpose:** Visual design guidelines for implementing small-business-focused changes while maintaining current aesthetic quality
**Companion documents:** SMALL_BUSINESS_STRATEGY.md, IMPLEMENTATION_TEMPLATES.md

---

## DESIGN PHILOSOPHY SHIFT

### Current Aesthetic
- Elegant, minimalist portfolio showcase
- Heavy use of black/white/grey
- Sophisticated animations (GSAP, Barba.js)
- Design-forward, creative industry feel

### Target Aesthetic (Small Business Focused)
- Professional but approachable
- Clear visual hierarchy emphasizing results/ROI
- Strategic use of color to highlight business value
- Animations that enhance (not distract from) business content
- Trust signals prominently displayed

### What to Keep
✓ Smooth page transitions (Barba.js)
✓ Quality of animations (GSAP timing)
✓ Generous whitespace
✓ Clean typography
✓ Mobile-responsive grid system
✓ Professional nav/footer structure

### What to Evolve
→ Add accent color for business CTAs
→ Create data visualization aesthetic (metrics, numbers)
→ Design trust badge components
→ Develop before/after comparison layouts
→ Add "conversion-focused" design patterns
→ Balance elegance with clarity (less art, more business)

---

## COLOR SYSTEM

### Current Palette
```
Primary Background: #EBEBEB (light grey)
Text: #1C1C1C (near black)
Accents: None (pure black/white)
```

### Recommended Additions

**Option 1: Trust & Stability (Recommended)**
```
Accent Primary: #2563EB (Professional Blue)
  - Use for: CTAs, metrics, key data points
  - RGB: 37, 99, 235
  - Contrast ratio with white: 7.8:1 (WCAG AAA)

Accent Secondary: #059669 (Success Green)
  - Use for: Results, positive metrics, "win" indicators
  - RGB: 5, 150, 105

Accent Tertiary: #DC2626 (Alert Red)
  - Use for: Problems/pain points, urgency indicators
  - RGB: 220, 38, 38
```

**Option 2: Warm & Approachable**
```
Accent Primary: #EA580C (Energetic Orange)
Accent Secondary: #0891B2 (Calm Teal)
Accent Tertiary: #16A34A (Growth Green)
```

**Option 3: Corporate & Premium**
```
Accent Primary: #1E40AF (Deep Blue)
Accent Secondary: #7C3AED (Royal Purple)
Accent Tertiary: #059669 (Emerald Green)
```

### Color Usage Guidelines

**CTAs & Buttons:**
```scss
.cta-button-primary {
  background: #2563EB;
  color: #FFFFFF;
  border: none;

  &:hover {
    background: #1D4ED8; // Darker blue
  }
}

.cta-button-secondary {
  background: transparent;
  color: #2563EB;
  border: 2px solid #2563EB;

  &:hover {
    background: #2563EB;
    color: #FFFFFF;
  }
}
```

**Metrics & Numbers:**
```scss
.metric-value {
  color: #2563EB; // Accent blue for emphasis
  font-weight: 700;
  font-size: 2rem;
}

.positive-metric {
  color: #059669; // Green for positive results
}

.negative-metric {
  color: #DC2626; // Red for problems/costs
}
```

**Trust Badges:**
```scss
.trust-badge {
  background: rgba(37, 99, 235, 0.05); // Light blue tint
  border-left: 4px solid #2563EB;
}
```

---

## TYPOGRAPHY SYSTEM

### Current Fonts
- **Display/Headers:** Displaay (custom)
- **Body:** Displaay (same)
- **Accent:** Harmond (decorative caps)

### Recommended Adjustments

**Keep for Brand Continuity:**
- Displaay for headlines (elegant, distinctive)
- Harmond for decorative initial caps (playful touch)

**Add for Readability:**
```scss
// Business-focused body text
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
               "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #1C1C1C;
}

// Business section overrides
.business-content {
  font-size: 18px; // Larger for readability
  line-height: 1.7;
  max-width: 70ch; // Optimal reading width
}

// Metrics/Numbers (high emphasis)
.metric-value {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto;
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 1.2;
  letter-spacing: -0.02em; // Tighter for large numbers
}
```

### Typography Scale (Business Sections)

```scss
// Hierarchy for business content
h1 {
  font-size: 3rem;      // 48px - Page titles
  line-height: 1.1;
  font-weight: 700;
}

h2 {
  font-size: 2.25rem;   // 36px - Section titles
  line-height: 1.2;
  font-weight: 600;
}

h3 {
  font-size: 1.5rem;    // 24px - Subsections
  line-height: 1.3;
  font-weight: 600;
}

.metric-large {
  font-size: 3.5rem;    // 56px - Hero numbers
  font-weight: 700;
}

.metric-medium {
  font-size: 2rem;      // 32px - Card metrics
  font-weight: 700;
}

.label-text {
  font-size: 0.875rem;  // 14px - Labels, captions
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

### Responsive Typography

```scss
// Mobile adjustments
@media (max-width: 768px) {
  h1 {
    font-size: 2rem;    // 32px
  }

  h2 {
    font-size: 1.5rem;  // 24px
  }

  .metric-large {
    font-size: 2.5rem;  // 40px
  }

  body {
    font-size: 16px;    // No reduction - maintain readability
  }
}
```

---

## COMPONENT DESIGN SPECIFICATIONS

### 1. Value Proposition Component

**Visual Design:**
```
┌────────────────────────────────────────────┐
│  [Icon: 💰]                                │
│  Typical ROI: 5-10x in Year 1             │
│  ──────────────────────                    │
└────────────────────────────────────────────┘
```

**Specifications:**
```scss
.value-prop-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background: #FFFFFF;
  border: 2px solid #E5E7EB;
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    border-color: #2563EB;
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(37, 99, 235, 0.15);
  }
}

.value-prop-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  line-height: 1;
}

.value-prop-text {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1F2937;
}
```

**Layout:**
- Grid: 3 columns on desktop, 1 column on mobile
- Gap: 2rem between items
- Max-width: 1200px container

### 2. Metric Display Component

**Visual Design:**
```
┌─────────────────┐
│    $120K        │  ← Large, bold, accent color
│ Annual Savings  │  ← Small, grey label
│                 │
│ 30% reduction   │  ← Context text
│ in inventory    │
│ costs           │
└─────────────────┘
```

**Specifications:**
```scss
.metric-card {
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, #F9FAFB 0%, #FFFFFF 100%);
  border-radius: 16px;
  border: 1px solid #E5E7EB;
}

.metric-value {
  font-size: 3rem;
  font-weight: 700;
  color: #2563EB;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.metric-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: #6B7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
}

.metric-context {
  font-size: 1rem;
  color: #4B5563;
  line-height: 1.5;
}
```

### 3. Case Study Card

**Visual Design:**
```
┌──────────────────────────────────────────┐
│ [Tag: Retail • 25 employees]             │
│                                           │
│ Inventory Forecasting That                │
│ Saved $120K                               │
│                                           │
│ Brief description of the project and      │
│ the business impact achieved...           │
│                                           │
│ ┌──────┐  ┌──────┐  ┌──────┐            │
│ │$120K │  │8 weeks│  │$18K  │            │
│ │Saved │  │Time  │  │Cost  │            │
│ └──────┘  └──────┘  └──────┘            │
│                                           │
│ Read full story →                         │
└──────────────────────────────────────────┘
```

**Specifications:**
```scss
.case-study-card {
  background: #FFFFFF;
  border: 2px solid #E5E7EB;
  border-radius: 16px;
  padding: 2.5rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: #2563EB;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
    transform: translateY(-8px);
  }
}

.case-tag {
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 600;
  color: #6B7280;
  background: #F3F4F6;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  margin-bottom: 1.5rem;
}

.case-study-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #1F2937;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.case-summary {
  font-size: 1rem;
  color: #4B5563;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.case-metrics {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #E5E7EB;
}

.metric {
  flex: 1;
  text-align: center;
}

.case-link {
  font-size: 1rem;
  font-weight: 600;
  color: #2563EB;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: all 0.2s ease;

  &:hover {
    color: #1D4ED8;
    transform: translateX(4px);
  }
}
```

### 4. CTA Button Component

**Visual Design:**
```
Primary (High Emphasis):
┌─────────────────────────────────┐
│  Schedule Free Assessment  →    │  ← White text, blue bg
└─────────────────────────────────┘
     Free 30-minute call             ← Grey subtext

Secondary (Medium Emphasis):
┌─────────────────────────────────┐
│  Learn More About This  →       │  ← Blue text, transparent bg
└─────────────────────────────────┘
```

**Specifications:**
```scss
.cta-button-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: #FFFFFF;
  background: #2563EB;
  border: none;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);

  &:hover {
    background: #1D4ED8;
    box-shadow: 0 8px 24px rgba(37, 99, 235, 0.4);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
}

.cta-button-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: #2563EB;
  background: transparent;
  border: 2px solid #2563EB;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #2563EB;
    color: #FFFFFF;
    transform: translateY(-2px);
  }
}

.cta-subtext {
  display: block;
  font-size: 0.875rem;
  font-weight: 400;
  color: #6B7280;
  margin-top: 0.5rem;
}
```

### 5. Trust Badge Component

**Visual Design:**
```
┌──────────────────────────────────┐
│ [✓]  30-Day Money-Back Guarantee │
│      If you don't find value,    │
│      you don't pay                │
└──────────────────────────────────┘
```

**Specifications:**
```scss
.trust-badge {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(37, 99, 235, 0.05);
  border-left: 4px solid #2563EB;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.trust-icon {
  font-size: 1.5rem;
  color: #2563EB;
  flex-shrink: 0;
}

.trust-content {
  flex: 1;
}

.trust-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1F2937;
  margin-bottom: 0.25rem;
}

.trust-description {
  font-size: 0.875rem;
  color: #6B7280;
  line-height: 1.5;
}
```

### 6. FAQ Component

**Visual Design:**
```
┌────────────────────────────────────┐
│ Q: Do I need a data team?          │
│                                     │
│ A: Nope. I build systems that work │
│    with whatever you have—even if  │
│    that's just Excel...             │
└────────────────────────────────────┘
```

**Specifications:**
```scss
.faq-item {
  padding: 2rem;
  background: #F9FAFB;
  border-radius: 12px;
  border: 1px solid #E5E7EB;
  transition: all 0.3s ease;

  &:hover {
    background: #FFFFFF;
    border-color: #2563EB;
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.1);
  }
}

.faq-question {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1F2937;
  margin-bottom: 0.75rem;

  &::before {
    content: "Q: ";
    color: #2563EB;
    font-weight: 700;
  }
}

.faq-answer {
  font-size: 1rem;
  color: #4B5563;
  line-height: 1.7;

  &::before {
    content: "A: ";
    color: #059669;
    font-weight: 600;
  }
}
```

### 7. Timeline Component (Implementation)

**Visual Design:**
```
Week 1-2  ●────────  Assessment
          │         • Review data
          │         • Identify opportunities
          │
Week 3-5  ●────────  Build & Test
          │         • Develop models
          │         • Validate accuracy
          │
Week 6-8  ●────────  Launch
                    • Deploy system
                    • Train team
```

**Specifications:**
```scss
.timeline {
  position: relative;
  padding-left: 3rem;

  &::before {
    content: "";
    position: absolute;
    left: 0.75rem;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(180deg, #2563EB 0%, #93C5FD 100%);
  }
}

.timeline-item {
  position: relative;
  padding-bottom: 3rem;

  &::before {
    content: "";
    position: absolute;
    left: -2.5rem;
    top: 0.25rem;
    width: 1rem;
    height: 1rem;
    background: #2563EB;
    border: 3px solid #FFFFFF;
    border-radius: 50%;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
  }
}

.timeline-week {
  font-size: 0.875rem;
  font-weight: 700;
  color: #2563EB;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
}

.timeline-content h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1F2937;
  margin-bottom: 0.5rem;
}

.timeline-content p {
  font-size: 1rem;
  color: #6B7280;
  line-height: 1.6;
}
```

### 8. Testimonial/Quote Component

**Visual Design:**
```
┌────────────────────────────────────────┐
│  "The first month, it told us to order │
│   40% less... That alone saved us      │
│   $12K in dead inventory."             │
│                                         │
│   — Owner, 25-person retailer          │
└────────────────────────────────────────┘
```

**Specifications:**
```scss
.testimonial {
  position: relative;
  padding: 2.5rem;
  background: linear-gradient(135deg, #F9FAFB 0%, #FFFFFF 100%);
  border-left: 4px solid #2563EB;
  border-radius: 12px;
  margin: 2rem 0;

  &::before {
    content: """;
    position: absolute;
    top: 1rem;
    left: 1.5rem;
    font-size: 4rem;
    color: rgba(37, 99, 235, 0.15);
    font-family: Georgia, serif;
    line-height: 1;
  }
}

blockquote {
  font-size: 1.25rem;
  color: #1F2937;
  line-height: 1.6;
  margin: 0 0 1rem 0;
  padding-left: 2rem;
  font-style: italic;
}

cite {
  font-size: 1rem;
  color: #6B7280;
  font-style: normal;
  font-weight: 600;
  padding-left: 2rem;
  display: block;

  &::before {
    content: "— ";
  }
}
```

---

## LAYOUT SPECIFICATIONS

### Grid System

**Homepage Layout:**
```
┌─────────────────────────────────────┐
│ Hero Section (Full Width)           │  ← H1, subtext, CTA
├─────────────────────────────────────┤
│ Value Props (3-col grid)            │  ← ROI, Timeline, Pricing
├─────────────────────────────────────┤
│ Problems Solved (3-col grid)        │  ← Business pain points
├─────────────────────────────────────┤
│ Credentials (3-col grid)            │  ← Experience metrics
├─────────────────────────────────────┤
│ How It Works (3-col timeline)       │  ← Process steps
├─────────────────────────────────────┤
│ Social Proof (2-col)                │  ← Testimonials
├─────────────────────────────────────┤
│ Final CTA (Centered)                │  ← Book assessment
└─────────────────────────────────────┘
```

**Works Page Layout:**
```
┌─────────────────────────────────────┐
│ Page Header                          │
│ • Title: "Small Business Success"   │
│ • Filter tabs: All, Retail, Mfg...  │
├─────────────────────────────────────┤
│ Case Study Grid                      │
│ ┌─────────┐ ┌─────────┐ ┌─────────┐│
│ │ Card 1  │ │ Card 2  │ │ Card 3  ││
│ └─────────┘ └─────────┘ └─────────┘│
│ ┌─────────┐ ┌─────────┐ ┌─────────┐│
│ │ Card 4  │ │ Card 5  │ │ Card 6  ││
│ └─────────┘ └─────────┘ └─────────┘│
└─────────────────────────────────────┘
```

**Case Study Detail Layout:**
```
┌─────────────────────────────────────┐
│ Header (Full Width)                  │
│ • Tag, Title, Subtitle               │
├─────────────────────────────────────┤
│ Overview (4-col grid)                │
│ • Industry, Size, Timeline, Cost     │
├─────────────────────────────────────┤
│ The Challenge (2-col)                │
│ • Text + Quote sidebar               │
├─────────────────────────────────────┤
│ The Solution (Text only)             │
├─────────────────────────────────────┤
│ Results (4-col metric cards)         │
├─────────────────────────────────────┤
│ Testimonial (Full width quote)       │
├─────────────────────────────────────┤
│ Implementation (Timeline)            │
├─────────────────────────────────────┤
│ Technical Details (Collapsible)      │
├─────────────────────────────────────┤
│ CTA (Centered)                       │
└─────────────────────────────────────┘
```

### Responsive Breakpoints

```scss
// Breakpoint system
$breakpoint-sm: 640px;   // Mobile landscape
$breakpoint-md: 768px;   // Tablet portrait
$breakpoint-lg: 1024px;  // Tablet landscape / Small desktop
$breakpoint-xl: 1280px;  // Desktop
$breakpoint-2xl: 1536px; // Large desktop

// Grid adjustments
.grid-3-col {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: $breakpoint-lg) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: $breakpoint-md) {
    grid-template-columns: 1fr;
  }
}
```

### Spacing System

```scss
// Consistent spacing scale
$space-xs: 0.5rem;   // 8px
$space-sm: 1rem;     // 16px
$space-md: 1.5rem;   // 24px
$space-lg: 2rem;     // 32px
$space-xl: 3rem;     // 48px
$space-2xl: 4rem;    // 64px
$space-3xl: 6rem;    // 96px

// Section spacing
.section {
  padding: $space-3xl 0;

  @media (max-width: $breakpoint-md) {
    padding: $space-2xl 0;
  }
}

// Container
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 $space-lg;

  @media (max-width: $breakpoint-md) {
    padding: 0 $space-md;
  }
}
```

---

## ANIMATION SPECIFICATIONS

### Keep Existing Animations
✓ Page transitions (Barba.js)
✓ Text splitting effects (Splitting.js)
✓ Smooth scrolling (Locomotive Scroll on desktop)
✓ Navigation menu animations

### New Animations to Add

**Metric Count-Up:**
```javascript
// Animate numbers when they enter viewport
const animateValue = (element, start, end, duration) => {
  const startTime = performance.now();
  const animate = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = start + (end - start) * easeOut;

    element.textContent = Math.floor(current).toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };
  requestAnimationFrame(animate);
};

// Trigger on scroll into view
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = entry.target;
      const endValue = parseInt(target.dataset.value);
      animateValue(target, 0, endValue, 2000);
      observer.unobserve(target);
    }
  });
});

document.querySelectorAll('.metric-value').forEach(el => {
  observer.observe(el);
});
```

**Card Hover Effects:**
```scss
// Subtle lift on hover
.case-study-card,
.problem-card,
.engagement-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
  }
}
```

**CTA Button Pulse (Attention):**
```scss
@keyframes pulse {
  0%, 100% {
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
  }
  50% {
    box-shadow: 0 4px 24px rgba(37, 99, 235, 0.5);
  }
}

.cta-button-primary {
  animation: pulse 2s ease-in-out infinite;

  &:hover {
    animation: none; // Stop pulse on hover
  }
}
```

**Stagger Animations (Grid Items):**
```javascript
// GSAP stagger for cards entering view
gsap.from(".case-study-card", {
  scrollTrigger: {
    trigger: ".case-study-grid",
    start: "top 80%"
  },
  opacity: 0,
  y: 40,
  duration: 0.6,
  stagger: 0.1,
  ease: "power2.out"
});
```

### Animation Performance Guidelines
- Use `transform` and `opacity` (GPU-accelerated)
- Avoid animating `width`, `height`, `top`, `left`
- Keep animations under 300ms for interactions
- Use `will-change` sparingly (only during animation)
- Test on mobile devices (60fps target)

---

## ACCESSIBILITY SPECIFICATIONS

### Color Contrast

**Minimum Requirements (WCAG 2.1 AA):**
- Normal text: 4.5:1 contrast ratio
- Large text (18px+): 3:1 contrast ratio
- UI components: 3:1 contrast ratio

**Current Palette Compliance:**
```
✓ #1C1C1C on #EBEBEB: 12.5:1 (AAA)
✓ #2563EB on #FFFFFF: 7.8:1 (AAA)
✓ #FFFFFF on #2563EB: 7.8:1 (AAA)
✓ #6B7280 on #FFFFFF: 5.3:1 (AA)
⚠ #6B7280 on #F9FAFB: 4.6:1 (AA, borderline)
```

### Focus States

```scss
// Visible focus indicators
*:focus {
  outline: 3px solid #2563EB;
  outline-offset: 2px;
}

// Custom focus for buttons
.cta-button-primary:focus,
.cta-button-secondary:focus {
  outline: 3px solid #2563EB;
  outline-offset: 4px;
  box-shadow: 0 0 0 6px rgba(37, 99, 235, 0.2);
}

// Skip focus styling for mouse users
*:focus:not(:focus-visible) {
  outline: none;
}
```

### Semantic HTML

```html
<!-- Good: Semantic structure -->
<article class="case-study">
  <header>
    <h1>Case Study Title</h1>
  </header>
  <section>
    <h2>The Challenge</h2>
    <p>...</p>
  </section>
</article>

<!-- Bad: Divs everywhere -->
<div class="case-study">
  <div>
    <div class="title">Case Study Title</div>
  </div>
</div>
```

### ARIA Labels

```html
<!-- Button with icon needs label -->
<button aria-label="Close menu">
  <svg>...</svg>
</button>

<!-- Link that opens externally -->
<a href="..." target="_blank" rel="noopener">
  LinkedIn
  <span class="sr-only">(opens in new window)</span>
</a>

<!-- Screen reader only text -->
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

### Keyboard Navigation

**Requirements:**
- All interactive elements must be keyboard accessible
- Tab order must follow visual order
- Focus must be visible on all interactive elements
- Escape key closes modals/menus
- Enter/Space activates buttons

**Testing Checklist:**
- [ ] Can navigate entire site using only Tab key
- [ ] Can activate all buttons with Enter/Space
- [ ] Can close menu with Escape
- [ ] Focus indicators are clearly visible
- [ ] No keyboard traps (focus can always move away)

---

## MOBILE DESIGN SPECIFICATIONS

### Touch Targets

**Minimum Sizes (iOS/Android Guidelines):**
- Buttons: 44px × 44px minimum
- Links in text: 44px × 44px tap area
- Form inputs: 44px height minimum
- Icons/controls: 44px × 44px minimum

```scss
// Ensure touch-friendly sizes
.cta-button-primary,
.cta-button-secondary {
  min-height: 48px; // Comfortable tap target
  padding: 1rem 2rem;
}

// Increase touch area for small elements
.case-link {
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -12px;
    left: -12px;
    right: -12px;
    bottom: -12px;
  }
}
```

### Mobile-Specific Layouts

```scss
// Stack cards on mobile
.case-study-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: $breakpoint-md) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

// Adjust spacing for mobile
.section {
  padding: 4rem 0;

  @media (max-width: $breakpoint-md) {
    padding: 2rem 0;
  }
}

// Reduce metric font sizes
.metric-large {
  font-size: 3.5rem;

  @media (max-width: $breakpoint-md) {
    font-size: 2.5rem;
  }
}
```

### Mobile Navigation

- Hamburger menu (keep existing)
- Ensure close button is accessible
- Menu items should be large (44px+ height)
- Consider sticky header for easy navigation

---

## PRINT STYLES (OPTIONAL)

```scss
@media print {
  // Hide navigation, footer, CTAs
  header,
  footer,
  .cta-button,
  .menu {
    display: none;
  }

  // Optimize typography
  body {
    font-size: 12pt;
    line-height: 1.5;
  }

  h1 { font-size: 24pt; }
  h2 { font-size: 18pt; }
  h3 { font-size: 14pt; }

  // Avoid page breaks in inappropriate places
  .case-study-card,
  .testimonial,
  .faq-item {
    page-break-inside: avoid;
  }

  // Show link URLs
  a::after {
    content: " (" attr(href) ")";
    font-size: 10pt;
    color: #666;
  }
}
```

---

## IMPLEMENTATION PRIORITY

### Phase 1: Essential Components (Week 1)
1. Update color system (add accent blue)
2. Design CTA button styles
3. Create metric display component
4. Update homepage hero section

### Phase 2: Content Components (Week 2-3)
1. Case study card component
2. Problem card component
3. Trust badge component
4. FAQ component

### Phase 3: Interactions (Week 4)
1. Add hover animations
2. Implement metric count-up
3. Add stagger animations for grids
4. Test mobile interactions

### Phase 4: Polish (Ongoing)
1. Refine animations
2. Test across browsers
3. Optimize performance
4. Accessibility audit

---

## DESIGN SYSTEM DOCUMENTATION

### Component Library Structure

```
/components
  /buttons
    - cta-primary.html
    - cta-secondary.html
  /cards
    - case-study-card.html
    - metric-card.html
    - problem-card.html
  /badges
    - trust-badge.html
    - tag-badge.html
  /layouts
    - grid-3-col.html
    - timeline.html
  /typography
    - headings.html
    - body-text.html
```

### Design Tokens (Variables)

```scss
// colors.scss
$color-primary: #2563EB;
$color-secondary: #059669;
$color-tertiary: #DC2626;
$color-text: #1F2937;
$color-text-light: #6B7280;
$color-background: #FFFFFF;
$color-background-subtle: #F9FAFB;
$color-border: #E5E7EB;

// spacing.scss
$spacing: (
  xs: 0.5rem,
  sm: 1rem,
  md: 1.5rem,
  lg: 2rem,
  xl: 3rem,
  2xl: 4rem,
  3xl: 6rem
);

// typography.scss
$font-size: (
  xs: 0.75rem,
  sm: 0.875rem,
  base: 1rem,
  lg: 1.125rem,
  xl: 1.25rem,
  2xl: 1.5rem,
  3xl: 2rem,
  4xl: 2.5rem,
  5xl: 3rem
);

// borders.scss
$border-radius: (
  sm: 4px,
  md: 8px,
  lg: 12px,
  xl: 16px,
  full: 9999px
);

// shadows.scss
$shadow: (
  sm: 0 2px 8px rgba(0, 0, 0, 0.08),
  md: 0 4px 16px rgba(0, 0, 0, 0.12),
  lg: 0 8px 32px rgba(0, 0, 0, 0.16),
  xl: 0 20px 60px rgba(0, 0, 0, 0.20)
);
```

---

**End of Design Specifications**
**Version:** 1.0
**Last Updated:** November 2025
**Maintained by:** Timo Nielsen


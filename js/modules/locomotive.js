// init LocomotiveScroll on page load
export const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  lerp: 0.085,
  multiplier: 0.85,
  scrollFromAnywhere: true,
  tablet: {
    smooth: false,
  },
  smartphone: { smooth: false },
});
setTimeout(() => {
  scroll.update();
}, 500);

export default function handleMenu() {
  const menuBtn = document.querySelector(".nav-burger__btn");
  const child1 = document.querySelector(".nav-burger__line:nth-child(1)");
  const child2 = document.querySelector(".nav-burger__line:nth-child(2)");
  const getMobileLinks = document.querySelectorAll(".menuMobile-link__animate");
  const tl = gsap.timeline();
  tl.to(
    child1,
    {
      y: 4,
      rotate: 45,
    },
    "start"
  );
  tl.to(
    child2,
    {
      y: -4,
      rotate: -45,
    },
    "start"
  );
  tl.to(".menuMobile", { autoAlpha: 1 }, "start");

  tl.from(
    [".menuMobile-col1", ".menuMobile-footer"],
    { opacity: 0, stagger: { amount: 0.15 }, ease: Power1.easeInOut, },
  );
  tl.from(
    ".menuMobile-link__number",
    {
      duration: 0.4,
      opacity: 0,
      stagger: { amount: 0.15 },
      ease: Power1.easeInOut,
    },
    "-=0.4"
  );
  tl.from(
    ".menuMobile-link__animate",
    {
      yPercent: 100,
      duration: 0.8,
      stagger: { amount: 0.15 },
      ease: Power1.easeInOut,
    },
    "-=0.6"
  );

  tl.reverse();
  menuBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("disable-scroll");
    if (tl.reversed()) {
      tl.play();
    } else {
      tl.reverse();
    }
  });

  getMobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      document.documentElement.classList.remove("disable-scroll");
      if (tl.reversed()) {
        tl.play();
      } else {
        tl.reverse();
      }
    });
  });
}

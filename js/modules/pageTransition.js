import { initJsModule } from "../index.js";
import handleAnimateAbout from "./handleAnimateAbout.js";
import handleAnimateWorks from "./handleAnimateWorks.js";
import handlePreloader from "./handlePreloader.js";
import SplittingFunction from "./Splitting.js";
import { scroll } from "./locomotive.js";
import handleAnimateContact from "./handleAnimateContact.js";
import handleAnimatePlayground from "./handleAnimatePlayground.js";
import handleAnimateHome from "./handleAnimateHome.js";
import horizontalScroll from "./horizontalScroll.js";
import handleNormalScroll from "./handleNormalScroll.js";
import handleAnimateWorksDetail from "./handleAnimateWorksDetail.js";
import handleSplitTextWorksDetail from "./handleSplitTextWorksDetail.js";
export default function pageTransition() {

  function enterAnimation() {
    const transitionItem = document.querySelector(".transition-item.active");
    const transitionItemChars = transitionItem.querySelectorAll("span.char");
    const mainTransition = document.querySelector(".transition");
    const count = document.getElementById("progress");
    const hint = document.getElementById("scroll-discover");
    const ctaWorkDetail = document.querySelectorAll(".project-cta");
    if (!transitionItem) return;
    document.documentElement.classList.add("hide-cursor");
    ctaWorkDetail &&
      ctaWorkDetail.forEach((cta) => {
        cta.classList.add("disable-hover");
      });
    const tlEnterAnimation = gsap.timeline({
      defaults: { duration: 1.2, ease: Expo.easeInOut },
      onUpdate: () => {
        let countNumber = Math.round(tlEnterAnimation.progress() * 100);
        count.innerHTML = `<span> Loading </span>  - <span class="font-sec"> ${countNumber}% </span>`;
      },
      onComplete: () => {
        count.innerHTML = `<span> Loading </span> - <span class="font-sec"> 100% </span>`;
        gsap.to(".loader", { zIndex: 999 });
        gsap.to(count, { autoAlpha: 0, delay: 0.1 });
        document.documentElement.classList.remove("hide-cursor");
      },
    });
    gsap.set(mainTransition, { height: "100vh" });
    tlEnterAnimation
      .to([transitionItemChars], 0, { y: "0%" })
      .to(mainTransition, 0, { zIndex: 1000 })
      .from(mainTransition, {
        height: "16.203703703703702vh",
      })
      .to(
        transitionItemChars,
        { color: "#FFFFFF", stagger: { each: 0.04 } },
        "-=1"
      )
      .to(
        transitionItemChars,
        { color: "#282828", stagger: { each: -0.03 } },
        "label-=0.5"
      )
      .to(transitionItemChars, { opacity: 0 }, "<=20%")
      .to(".transition-item", { y: "-100%", ease: Power1.easeInOut }, "label")
      .to(
        mainTransition,
        {
          top: "-60%",
        },
        "label"
      )
      .set(
        [
          mainTransition,
          transitionItem,
          ".transition-item",
          transitionItemChars,
        ],
        {
          clearProps: "all",
        }
      );
  }
  const delay = (n) => {
    n = n || 2000;
    return new Promise((done) => {
      setTimeout(() => {
        done();
      }, n);
    });
  };

  barba.hooks.beforeEnter((data) => {
    let regexp = /\<body.*\sclass=["'](.+?)["'].*\>/gi,
      match = regexp.exec(data.next.html);
    if (!match || !match[1]) {
      // If no body class, remove it
      document.body.style.overflow = "hidden";
      document.body.setAttribute("class", "");
    } else {
      // Set the new body class
      document.body.setAttribute("class", match[1]);
    }
    horizontalScroll(data.next.container);
    handleNormalScroll(data.next.container);
  });
  barba.hooks.enter(() => {
    let menuItem = document.querySelectorAll(".menu__item");
    menuItem.forEach((item) => item.classList.remove("is-animating"));
    SplittingFunction();
    initJsModule();
    ScrollTrigger.refresh(true);
  });
  barba.hooks.beforeLeave((data) => {
    scroll.destroy();
  });
  barba.hooks.after((data) => {
    scroll.init();
  });
  barba.init({
    sync: true,
    transitions: [
      {
        name: "home",
        to: {
          namespace: ["home"],
        },
        once() {
          handlePreloader();
        },
        async leave() {
          const done = this.async();
          enterAnimation();
          await delay(1100);
          done();
        },
        async enter() {
          handleAnimateHome();
        },
      },
      {
        name: "contact",
        to: {
          namespace: ["contact"],
        },
        async leave() {
          const done = this.async();
          enterAnimation();
          await delay(1100);
          done();
        },
        async enter() {
          handleAnimateContact();
        },
      },
      {
        name: "about",
        to: {
          namespace: ["about"],
        },
        async leave() {
          const done = this.async();
          enterAnimation();
          await delay(1100);
          done();
        },
        async enter() {
          handleAnimateAbout();
        },
      },
      {
        name: "works",
        to: {
          namespace: ["works"],
        },
        async leave() {
          const done = this.async();
          enterAnimation();
          await delay(1100);
          done();
        },
        async enter() {
          handleAnimateWorks();
        },
      },
      {
        name: "play-ground",
        to: {
          namespace: ["play-ground"],
        },
        async leave() {
          const done = this.async();
          enterAnimation();
          await delay(1100);
          done();
        },
        async enter() {
          handleAnimatePlayground();
        },
      },
      {
        name: "works-detail",
        from: {
          namespace: ["works-detail"],
        },
        async leave() {
          const done = this.async();
          enterAnimation();
          await delay(1100);
          done();
        },
        async enter() {
          handleSplitTextWorksDetail();
          const contactLinksInner = document.querySelectorAll(
            ".info-text_animate span"
          );
          ScrollTrigger.matchMedia({
            // desktop
            "(min-width: 1025px)": function () {
              const initTL = gsap.timeline({
                defaults: { ease: Power1.easeInOut },
                delay: 0.7,
              });
              initTL
                .from([".project-one-line .char", ".project-two-line .char"], {
                  yPercent: 150,
                  ease: Power1.easeInOut,
                  duration: 0.8,
                  stagger: { amount: 0.25 },
                })
                .from(
                  [contactLinksInner],
                  0.8,
                  { yPercent: 110, stagger: { each: 0.025 } },
                  "<=20%"
                )
                .from(
                  [".info-visit", ".project-cta__leave"],
                  {
                    autoAlpha: 0,
                  },
                  "<=100%"
                );
            },
          });
        },
      },
      {
        name: "from-works",
        from: {
          namespace: ["works"],
        },
        to: {
          namespace: ["works-detail"],
        },
        async enter() {
          handleSplitTextWorksDetail();
          handleAnimateWorksDetail();
        },
      },
    ],
  });
}

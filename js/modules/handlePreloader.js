const handlePreloader = () => {
  let lottieHome = document.getElementById("lottie-home");
  let lottieLoader = document.getElementById("lottie-loader");
  let lottieDrop = document.getElementById("lottie-drop");

  let renderLoader = bodymovin.loadAnimation({
    container: lottieLoader,
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "/Images/Animate/HomeLoop.json",
  });

  let renderDrop = bodymovin.loadAnimation({
    container: lottieDrop,
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "/Images/Animate/HomeDrop.json",
  });
  let renderHome = bodymovin.loadAnimation({
    container: lottieHome,
    renderer: "svg",
    loop: true,
    autoplay: false,
    path: "/Images/Animate/HomeLoop.json",
  });

  gsap.set(["#lottie-drop", "#lottie-home", "#lottie-loader"], { opacity: 0 });
  const chars = document.querySelectorAll(".hello-title span.char");
  const count = document.getElementById("progress");
  ScrollTrigger.matchMedia({
    // desktop
    "(min-width: 769px)": animatesPreloaderDesktop("4rem"),
    // mobile & tablet
    "(max-width: 768px)": animatesPreloaderMobile("1.6rem"),
  });

  function animatesPreloaderDesktop(position) {
    return function () {
      setTimeout(() => {
        renderLoader.play();
      }, 2800);
      //Get DOM
      document.documentElement.classList.add("hide-cursor");
      const preloaderTl = gsap.timeline({
        defaults: { duration: 1.2, ease: Expo.easeInOut },
        onUpdate: () => {
          count.innerHTML = `<span> Loading... </span>`;
        },
        onComplete: () => {
          gsap.to(".loader", { zIndex: 999 });
          gsap.to(count, { autoAlpha: 0, delay: 0.1 });
          document.documentElement.classList.remove("hide-cursor");
        },
      });
      preloaderTl.set(".loader", { zIndex: 1000 });
      preloaderTl.set(".hello-title", { perspective: 300 });
      preloaderTl.set(".preloader", { autoAlpha: 1 });
      preloaderTl
        .set(".footer", { left: "50%", bottom: "50%" })
        .from(".footer", { opacity: 0 })
        .to(".footer", { width: "100%" }, "+=1.05")
        .to("#lottie-loader", { opacity: 1 }, "-=1")
        .to(".footer", { bottom: position }, "+=4")
        .to(".footer", { width: "auto" }, "-=0.25")
        .from(
          [chars],
          1,
          {
            yPercent: 110,
            stagger: { amount: 0.38, from: "center" },
            ease: Power1.easeInOut,
          },
          "-=1.05"
        )
        .from(".hello-sub span", { yPercent: 100 }, "-=1.2")
        .from(".person-col2", { opacity: 0 }, "-=1")
        .from(".menu-home", { yPercent: 100 }, "-=0.8")
        .from("header", { opacity: 0 }, "-=1");
    };
  }
  function animatesPreloaderMobile(position) {
    return function () {
      setTimeout(() => {
        renderLoader.play();
      }, 2000);
      const preloaderTl = gsap.timeline({
        defaults: { duration: 1.2, ease: Expo.easeInOut },
        // onComplete: () => {
        //   gsap.to(".loader", { zIndex: 999 });
        // },
      });
      preloaderTl.set(".loader", { zIndex: 1000 });
      preloaderTl.set(".hello-title", { perspective: 300 });
      preloaderTl.set(".preloader", { autoAlpha: 1 });
      preloaderTl
        .set(".footer", { left: "50%", bottom: "50%" })
        .from(".footer", { opacity: 0 })
        .to(".footer", { bottom: position }, "+=1")
        .to("#lottie-loader", { opacity: 1 }, "-=1")
        .from(
          [chars],
          1,
          {
            yPercent: 110,
            stagger: { amount: 0.38, from: "center" },
            ease: Power1.easeInOut,
          },
          "+=4"
        )
        .from(".hello-sub span", { yPercent: 105 }, "-=1.2")
        .from(".person-col2", { opacity: 0 }, "-=0.8")
        .from(".menu-home", { yPercent: 100 }, "-=0.6")
        .from("header", { opacity: 0 }, "-=1.4");
    };
  }
  renderLoader.addEventListener("complete", () => {
    gsap.set("#lottie-loader", { opacity: 0 }, "start");
    gsap.set("#lottie-drop", { opacity: 1 }, "start");
    renderDrop.play();
  });
  renderDrop.addEventListener("complete", () => {
    gsap.set("#lottie-home", { opacity: 1 }, "start");
    ScrollTrigger.matchMedia({
      // desktop
      "(min-width: 769px)": function () {
        gsap.to(".preloader", { zIndex: -9999 }, "-=4.5");
      },
      // mobile & tablet
      "(max-width: 768px)": function () {
        gsap.to(".preloader", { zIndex: -9999 }, "-=5.5");
      },
    });

    gsap.to("#lottie-drop", 0, { opacity: 0 });
    renderHome.play();
  });
};

export default handlePreloader;

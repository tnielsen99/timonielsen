const handleNormalScroll = (container) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      scrub: 0.3,
      start: "top top",
      end: () => "+=" + container.offsetHeight,
    },
  });
  tl.to(".nav-logo__rotate", {
    rotate: 360,
    duration: 1,
    ease: "none",
  });
  if (container) {
    function hideMenuWhenScroll() {
      const showAnim = gsap
        .from(".menu", {
          autoAlpha: 0,
          paused: true,
        })
        .progress(1);

      const playAnim = ScrollTrigger.create({
        start: "top top",
        end: () => "+=" + container.offsetHeight,
        // end: 99999,
        onUpdate: (self) => {
          self.direction === -1 ? showAnim.play() : showAnim.reverse();
        },
      });
      return playAnim;
    }
    const getAllItems = gsap.utils.toArray(".playground-item");
    const lastItemPlayGround = getAllItems.splice(-1)[0];
    gsap.to(
      ".menu",
      {
        ease: "none",
        autoAlpha: 1,
        scrollTrigger: {
          trigger: lastItemPlayGround,
          start: "bottom bottom",
          toggleActions: "play none none reverse",
        },
      },
      "-=1"
    );
    hideMenuWhenScroll();
  }
}

export default handleNormalScroll;
import { scroll } from "./locomotive.js";
export default function horizontalScroll(container) {
  if (!container) return;
  const sections = gsap.utils.toArray(".project-full");
  const lastSection = sections.slice(-1)[0];
  const horizontalContainer = container.querySelector(".horizontal");
  const horizontalWrap = container.querySelector(".horizontal-wrap");
  const visitLink = document.querySelector(".info-visit");
  const visitArrow = document.querySelector(".info-arrow img");
  const visitLine = document.querySelector(".info-line");
  gsap.set(visitArrow, { x: "-102%", y: "150%" });
  gsap.set(visitLine, { x: "-102%" });
  //Horizontal Scroll
  if (horizontalContainer) {
    ScrollTrigger.matchMedia({
      // desktop
      "(min-width: 1025px)": function () {
        gsap.set(".project-cta__next", { autoAlpha: 0 });
        const scrollContainer = document.querySelector(
          "[data-scroll-container]"
        );
        scroll.on("scroll", ScrollTrigger.update);
        ScrollTrigger.scrollerProxy(scrollContainer, {
          scrollTop(value) {
            return arguments.length
              ? scroll.scrollTo(value, 0, 0)
              : scroll.scroll.instance.scroll.y;
          },
          getBoundingClientRect() {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight,
            };
          },
          pinType: scrollContainer.style.transform ? "transform" : "fixed",
        });
        ScrollTrigger.addEventListener("refresh", () => scroll.update());
        ScrollTrigger.refresh(true);
        const tlHorizontal = gsap.timeline({
          scrollTrigger: {
            trigger: horizontalContainer,
            scroller: scrollContainer,
            pin: true,
            pinType: "transform",
            invalidateOnRefresh: true,
            scrub: true,
            end: () => "+=" + (horizontalWrap.offsetWidth - innerWidth),
          },
        });
        tlHorizontal.to(
          horizontalWrap,
          {
            x: -(horizontalContainer.scrollWidth - innerWidth) + "px",
            ease: "none",
          },
          "start"
        );

        const showAnim = gsap
          .from([".menu"], {
            autoAlpha: 0,
            paused: true,
          })
          .progress(1);

        ScrollTrigger.create({
          scroller: scrollContainer,
          start: "top top",
          end: () => "+=" + (horizontalWrap.offsetWidth - innerWidth),
          onUpdate: (self) => {
            self.direction === -1 ? showAnim.play() : showAnim.reverse();
          },
        });

        gsap.to([".menu", ".project-cta__next"], {
          ease: "none",
          autoAlpha: 1,
          scrollTrigger: {
            trigger: lastSection,
            scroller: scrollContainer,
            containerAnimation: tlHorizontal,
            start: "top top",
            end: "center center",
            toggleActions: "play none none reverse",
          },
        });

        if (visitLink) {
          visitLink.addEventListener("mouseenter", () => {
            gsap.killTweensOf(visitArrow);
            gsap.killTweensOf(visitLine);
            gsap.set(visitArrow, { y: "150%", x: "-102%" });
            gsap.set(visitLine, { x: "-102%" });

            gsap.to(visitArrow, 0.4, {
              y: "0%",
              x: "0%",
              ease: Power1.easeInOut,
            });
            gsap.to(visitLine, 0.4, { x: "0%", ease: Power1.easeInOut });
          });
          visitLink.addEventListener("mouseleave", () => {
            gsap.killTweensOf(visitArrow);
            gsap.killTweensOf(visitLine);

            gsap.to(visitArrow, 0.4, {
              y: "-100%",
              x: "102%",
              ease: Power1.easeOut,
            });
            gsap.to(visitLine, 0.4, { x: "102%", ease: Power1.easeOut });
          });
        }
      },
    });
  }
}

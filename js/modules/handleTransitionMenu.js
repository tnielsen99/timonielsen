export default function handleTransitionMenu() {
  const menuItems = document.querySelectorAll(".menu-hover");
  const count = document.getElementById("progress");

  let active = false;

  menuItems.forEach((item, i) => {
    let transition = document.querySelector(".transition");
    let siblings = item.querySelector(".menu__link");
    let attrMenu = siblings.getAttribute("data-menu");
    let transitionItem = document.querySelector(
      `.transition-item[id="${attrMenu}"]`
    );
    let chars = transitionItem.querySelectorAll("span.char");

    if (chars) {
      let activeTransitionItem = document.querySelector(
        ".transition-item.active"
      );
      const elms = document.querySelectorAll(".menu__link");
      if (!transitionItem) return;

      function onClick(e) {
        active = false;
        chars.forEach((char) => {
          gsap.to(char, {
            y: "0%",
            opacity: 1,
          });
        });
        gsap.to(".loader", { zIndex: 1000 });
        gsap.to(count, { autoAlpha: 1 });
        gsap.to(".menu", {
          mixBlendMode: "exclusion",
          filter: "invert(100%)",
          overwrite: "auto",
        });
        gsap.to(elms, 1, { color: "#1c1c1c" }, 0);
        activeTransitionItem.classList.remove("active");
        transitionItem.classList.add("active");
      }
      function onEnter() {
        active = true;
        gsap.killTweensOf(elms);
        gsap.killTweensOf(transition);
        gsap.killTweensOf(transitionItem);
        gsap.to(elms, 1, { color: "#FFFFFF" }, 0);
        gsap.to(".menu", 1, { mixBlendMode: "unset", filter: "unset" });
        gsap.to(
          transition,
          0.4,
          { height: "16.203703703703702vh", ease: "Power1.easeIn" },
          0
        );
        gsap.to(transitionItem, { opacity: 1 }, 0);
        chars.forEach((char, index) => {
          gsap.killTweensOf(char);
          gsap.to(char, 0.6, {
            y: "0%",
            delay: index * 0.05,
            ease: "Power1.easeOut",
          });
        });
      }
      function onLeave() {
        if (!active) return;
        gsap.killTweensOf(elms);
        gsap.killTweensOf(transition);
        gsap.killTweensOf(transitionItem);
        chars.forEach((char, index) => {
          gsap.killTweensOf(char);
          gsap.to(char, 0.6, {
            y: "105%",
            delay: index * 0.05,
            ease: "Power1.easeOut",
          });
        });
        gsap.to(transition, 0.4, { height: "0", ease: "Power1.easeIn" }, 0);
        gsap.to(elms, 1, { color: "#1c1c1c" }, 0);
        gsap.to(".menu", 1, {
          mixBlendMode: "exclusion",
          filter: "invert(100%)",
        });
      }
      item.addEventListener("mouseenter", onEnter);
      item.addEventListener("mouseleave", onLeave);
      item.addEventListener("click", onClick);
    }
  });

  const links = document.querySelectorAll("a[href]");
  const cbk = function (e) {
    if (e.currentTarget.href === window.location.href) {
      e.preventDefault();
      e.stopPropagation();
    }
  };
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", cbk);
  }

  const loader = document.querySelector(".loader");
  function handleLoader(e) {
    const { clientX, clientY } = e;
    gsap.to(loader, 0.3, {
      x: clientX,
      y: clientY,
    });
  }
  window.addEventListener("mousemove", handleLoader);
}

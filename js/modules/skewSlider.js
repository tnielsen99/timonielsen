import {lerp} from '../services/index.js';
export default class Slider {
  constructor(options = {}) {
    this.bind();

    this.opts = {
      el: options.el || ".js-slider",
      ease: options.ease || 0.06,
      speed: options.speed || 1.2,
      scroll: options.scroll || false
    };

    this.slider = document.querySelector(".js-slider");
    this.sliderInner = this.slider.querySelector(".js-slider__inner");
    this.slides = [...this.slider.querySelectorAll(".js-slide")];
    this.images = [...this.slider.querySelectorAll('.slide__bg > img')]
    this.slidesNumb = this.slides.length;


    this.rAF = undefined;
    this.sliderWidth = 0;
    this.onX = 0;
    this.offX = 0;
    this.currentX = 0;
    this.lastX = 0;
    this.min = 0;
    this.max = 0;
    this.centerX = window.innerWidth / 3;
    this.timer;


  }

  bind() {
    ["setPos", "run", "onDrag", "offDrag", "resize"].forEach(
      (fn) => (this[fn] = this[fn].bind(this))
    );
  }

  setBounds() {
    const bounds = this.slides[this.slides.length - 1].getBoundingClientRect();
    const slideWidth = bounds.width / 20;
    this.sliderWidth = this.slidesNumb * slideWidth;
    this.max = (-(this.slider.scrollWidth - this.slider.offsetWidth) - slideWidth)
  }

  setPos(e) {
    if (!this.isDragging) return;
    this.sliderInner.classList.add('is-dragging')
    e.preventDefault();
    e.stopPropagation();
    this.currentX = this.offX + e.clientX - this.onX * this.opts.speed;
    this.clamp();
  }

  clamp() {
    this.currentX = Math.max(Math.min(this.currentX, this.min), this.max);
  }

  run() {
    this.lastX = lerp(this.lastX, this.currentX, this.opts.ease);
    this.sliderInner.style.transform = `translate3d(${this.lastX}px, 0, 0)`;
    this.requestAnimationFrame();
  }


  onDrag(e) {
    this.isDragging = true;
    e.preventDefault()
    e.stopPropagation();
    this.onX = e.clientX;
    this.slider.classList.add('is-grabbing')
  }


  offDrag(e) {
    this.isDragging = false;
    this.offX = this.currentX;
    this.slider.classList.remove("is-grabbing");
    setTimeout(() => {
      this.sliderInner.classList.remove('is-dragging')
    }, 800)
  }

  requestAnimationFrame() {
    this.rAF = requestAnimationFrame(this.run);
  }


  addEvents() {
    this.run();
    this.slider.addEventListener("mousemove", this.setPos);
    this.slider.addEventListener("mousedown", this.onDrag);
    this.slider.addEventListener("mouseup", this.offDrag);
    window.addEventListener("mouseup", this.offDrag);
    window.addEventListener("resize", this.resize, false);
  }
  resize() {
    this.setBounds();
  }

  init() {
    this.setBounds();
    this.addEvents();
  }


}

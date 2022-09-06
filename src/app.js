import "./styles/loader.scss";
import "./styles/styles.css";
import "./styles/experiences.scss";
import "./styles/footer.scss";
import "./styles/navigation.scss";
import "./styles/index.scss";

// assets
import A3Studio from "./assets/images/A3-studio.jpg";
import ceiltoVino from "./assets/images/ceilto-vino.png";
import elpha from "./assets/images/elpha.jpeg";
import favour from "./assets/images/favour.jpg";
import upArrow from "./assets/images/up-arrow.png";
import leges from "./assets/images/leges.png";
import portfolio from "./assets/images/portfolio-v2.png";
import poshSuites from "./assets/images/posh-suites.png";



// locomotive scroll
import LocomotiveScroll from "./lib/locomotive-scroll.min.js";
import "./lib/locomotive-scroll.css";


gsap.registerPlugin(ScrollTrigger);

var locoScroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  tablet: { smooth: true },
  smartphone: { smooth: true },
});
var tl = gsap.timeline({});

$(window).on("load", () => {
  window.paceOptions = {
    ajax: true,
    eventLag: false,
    document: true,
  };

  Pace.on("done", () => {
    tl.to(".pace", 1, {
      autoAlpha: 0,
    })
      .to(".top-half", 1, {
        y: "-100%",
      })
      .to(
        ".bottom-half",
        1,
        {
          y: "100%",
        },
        "-=0.95"
      )
      .to(".loader", {
        zIndex: -1,
      });
  });
});

ScrollTrigger.scrollerProxy("[data-scroll-container]", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },

  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },

  pinType: document.querySelector("[data-scroll-container]").style.transform
    ? "transform"
    : "fixed",
});

$(".menu-open").on("click", () => {
  tl.to(".navigation-wrapper", 1, {
    x: 0,
  });
});

$(".menu-close").on("click", () => {
  tl.to(".navigation-wrapper", 1, {
    x: "-100%",
  });
});

gsap.to(".about-favour .line", 2, {
  width: "100%",
  scrollTrigger: {
    trigger: ".about-favour > h2",
    scrub: true,
    // start: "top center",
  },
});

$('[data-text="Home"]').on("click", () => {
  tl.to(".navigation-wrapper", 1, {
    x: "-100%",
  }).add(() => {
    locoScroll.scrollTo(document.querySelector("body"));
  });
});

$('[data-text="About"]').on("click", () => {
  tl.to(".navigation-wrapper", 1, {
    x: "-100%",
  }).add(() => {
    locoScroll.scrollTo(document.querySelector(".about-section"));
  });
});

$('[data-text="Experience"]').on("click", () => {
  tl.to(".navigation-wrapper", 1, {
    x: "-100%",
  }).add(() => {
    locoScroll.scrollTo(document.querySelector(".about-section"));
  });
});

$('[data-text="Projects"]').on("click", () => {
  tl.to(".navigation-wrapper", 1, {
    x: "-100%",
  }).add(() => {
    locoScroll.scrollTo(document.querySelector(".projects-section"));
  });
});

$('[data-text="Contact"]').on("click", () => {
  tl.to(".navigation-wrapper", 1, {
    x: "-100%",
  }).add(() => {
    locoScroll.scrollTo(document.querySelector(".footer-section"));
  });
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
locoScroll.on("scroll", ScrollTrigger.update);

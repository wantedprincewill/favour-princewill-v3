var smooth;

$(window).on("load", () => {
  smooth = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    tablet: { smooth: true },
    smartphone: { smooth: true },
  });

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

var tl = gsap.timeline({});

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
    smooth.scrollTo(document.querySelector("body"));
  });
});

$('[data-text="About"]').on("click", () => {
  tl.to(".navigation-wrapper", 1, {
    x: "-100%",
  }).add(() => {
    smooth.scrollTo(document.querySelector(".about-section"));
  });
});

$('[data-text="Experience"]').on("click", () => {
  tl.to(".navigation-wrapper", 1, {
    x: "-100%",
  }).add(() => {
    smooth.scrollTo(document.querySelector(".about-section"));
  });
});

$('[data-text="Projects"]').on("click", () => {
  tl.to(".navigation-wrapper", 1, {
    x: "-100%",
  }).add(() => {
    smooth.scrollTo(document.querySelector(".projects-section"));
  });
});

$('[data-text="Contact"]').on("click", () => {
  tl.to(".navigation-wrapper", 1, {
    x: "-100%",
  }).add(() => {
    smooth.scrollTo(document.querySelector(".footer-section"));
  });
});



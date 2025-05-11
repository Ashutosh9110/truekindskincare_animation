import gsap from "gsap";

import CustomEase from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);
CustomEase.create("hop", "0.9, 0, 0.1, 1");

document.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline({
    delay: 0.3,
    defaults: {
      ease: "hop",
    },
  });
  const counts = document.querySelectorAll(".count")

  counts.forEach((count, index) => {
    const digits = count.querySelectorAll(".digit h1")

    tl.to(
      digits,
      {
        y: "0%",
        duration: 1,
        stagger: 0.075,
      },
      index * 1
    )
    if ( index < counts.length) {
      tl.to(
        digits,
        {
          y:"-100%",
          duration: 1,
          stagger: 0.075,
        },
        index * 1 + 1
      )
    }
  })
});

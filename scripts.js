window.addEventListener("DOMContentLoaded", () => {
  let tl = gsap.timeline();
  tl.fromTo(
    ".pic-1 path",
    { opacity: 0, y: -40 },
    { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" }
  );

  // Line drawing
  const vec4Path = document.querySelector(".vec-4 path");
  if (vec4Path) {
    const length = vec4Path.getTotalLength();
    gsap.set(vec4Path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });
    tl.to(vec4Path, {
      strokeDashoffset: 0,
      duration: 1.2,
      ease: "power2.out",
    });
  }

  // Wave animation
  const paragraph = document.querySelector(".content p");
  if (paragraph) {
    const words = paragraph.textContent.trim().split(" ");
    paragraph.innerHTML = words
      .map((word) => `<span class="wave-word">${word} </span>`)
      .join("");
    gsap.fromTo(
      ".wave-word",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 2,
        ease: "back.out(2)",
      }
    );
  }

  // Infinite pulse
  gsap.to(".author-img", {
    scale: 1.2,
    repeat: -1,
    yoyo: true,
    duration: 0.8,
    ease: "sine.inOut",
  });
});

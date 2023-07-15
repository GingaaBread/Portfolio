const topChevron = document.getElementById("top-chevron");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
    topChevron.classList.remove("hidden");
  else topChevron.classList.add("hidden");
});

ScrollReveal({
  origin: "left",
  distance: "5rem",
  reset: true,
}).reveal(".project .text", { delay: 200 });

ScrollReveal({
  origin: "right",
  distance: "5rem",
  reset: true,
}).reveal(".project .media", { delay: 100 });

const topChevron = document.getElementById("top-chevron");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
    topChevron.classList.remove("hidden");
  else topChevron.classList.add("hidden");
});

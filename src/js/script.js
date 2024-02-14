addEventListener("DOMContentLoaded", () => {
  const popoverButtonElement = document.querySelector(".popoverButton");
  const popoverElement = document.querySelector(".popover");
  const popoverButtonElementRect = popoverButtonElement.getBoundingClientRect();

  popoverButtonElement.addEventListener("click", () => {
    if (popoverElement.classList.contains("popover_active")) {
      return;
    } else {
      popoverElement.classList.add("popover_active");
      const gap = 10;
      popoverElement.style.top =
        popoverButtonElementRect.top - popoverElement.offsetHeight - gap + "px";
      popoverElement.style.left =
        popoverButtonElementRect.left +
        popoverButtonElementRect.width / 2 -
        popoverElement.offsetWidth / 2 +
        "px";
    }
  });
  addEventListener("click", (e) => {
    if (e.target == popoverButtonElement) {
      return;
    } else {
      popoverElement.classList.remove("popover_active");
    }
  });
});

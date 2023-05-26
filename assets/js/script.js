let navbar = document.getElementById("navbar");
import { Carousel, initTE } from "tw-elements";
initTE({ Carousel });

window.addEventListener("scroll", (e) => {
  let scrollPos = window.scrollY;
  if (scrollPos > 0) {
    navbar.classList.add("sticky");
    navbar.classList.add("bg-white");
    navbar.classList.add("text-bc-primary");
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.remove("bg-white");
    navbar.classList.remove("text-bc-primary");
  }
});

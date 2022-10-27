// FUNCTION:: Get elements by id
const _ = (elm) => document.getElementById(elm);
// FUNCTION:: Get elements by queryselector
const qs = (elm) => document.querySelector(elm);
// FUNCTION:: Get elements by queryselectorAll
const qsa = (elm) => document.querySelectorAll(elm);

// Get all DOM elements
const [navMenu, navMenuToggleBtn, navLinks, imageThumbnails, image, backToTop] =
  [
    qs(".navbar "),
    qs(".toggle-btn"),
    qsa(".navbar a"),
    qsa(".small-thumbnails img"),
    qs(".big-image img"),
    _("backToTop"),
  ];

// Toggle navbar menu
navMenuToggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Add active class to the navlinks
navLinks.forEach((navLink) => {
  if (document.location.href.indexOf(navLink.href) >= 0) {
    navLink.classList.add("active");
  }
});

// Back to top button
window.addEventListener("scroll", () => {
  backToTop.classList.toggle("active", window.scrollY > 500);
});

backToTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// Image change
imageThumbnails.forEach((imageThumbnail) => {
  imageThumbnail.addEventListener("click", () => {
    let src = imageThumbnail.src;
    image.src = src;
  });
});

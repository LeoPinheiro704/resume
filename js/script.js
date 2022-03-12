///////////////////////////////////////////////////////////
// Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

///////////////////////////////////////////////////////////
// Get age
const ageEl = document.querySelector(".age");
const birthday = new Date(1996, 07, 17);
const ageDifMs = Date.now() - birthday.getTime();
const ageDate = new Date(ageDifMs);
ageEl.textContent = Math.abs(ageDate.getUTCFullYear() - 1970);

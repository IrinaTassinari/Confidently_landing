if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});

const headerLang = document.querySelector(".header-lang");
const headerLangButton = document.querySelector(".header-lang-button");

headerLangButton.addEventListener("click", () => {
  headerLang.classList.toggle("is-open");
});

document.addEventListener("click", (event) => {
  if (!headerLang.contains(event.target)) {
    headerLang.classList.remove("is-open");
  }
});

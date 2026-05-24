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

const legalModal = document.getElementById("legalModal");
const legalIframe = document.getElementById("legalModalIframe");
const legalTitle = document.getElementById("legalModalTitle");
const legalLinks = document.querySelectorAll(".footer-links a[data-iframe-title]");
const legalCloseButtons = document.querySelectorAll("[data-legal-close]");

function openLegalModal(url, title) {
  legalTitle.textContent = title;
  if (legalIframe) {
    legalIframe.src = url;
    legalIframe.title = title;
  }
  legalModal.classList.add("is-open");
  legalModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("legal-modal-open");
}

function closeLegalModal() {
  legalModal.classList.remove("is-open");
  legalModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("legal-modal-open");
  if (legalIframe) {
    legalIframe.src = "";
    legalIframe.title = "";
  }
}

legalLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    openLegalModal(link.href, link.dataset.iframeTitle);
  });
});

legalCloseButtons.forEach((button) => {
  button.addEventListener("click", closeLegalModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && legalModal.classList.contains("is-open")) {
    closeLegalModal();
  }
});

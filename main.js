// MENTE EM EVOLUÇÃO — interações globais
document.addEventListener("DOMContentLoaded", function () {
  // Menu mobile
  var openBtn = document.querySelector(".hamburger");
  var closeBtn = document.querySelector(".mobile-menu .close-btn");
  var menu = document.querySelector(".mobile-menu");
  if (openBtn && menu) {
    openBtn.addEventListener("click", function () { menu.classList.add("open"); });
  }
  if (closeBtn && menu) {
    closeBtn.addEventListener("click", function () { menu.classList.remove("open"); });
  }
  if (menu) {
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { menu.classList.remove("open"); });
    });
  }

  // Header muda de estado leve ao rolar (mantém legibilidade)
  var header = document.querySelector(".site-header");
  window.addEventListener("scroll", function () {
    if (!header) return;
    header.style.boxShadow = window.scrollY > 12 ? "0 1px 0 rgba(11,11,12,0.06)" : "none";
  });

  // Barra fixa mobile: some ao rolar para baixo, volta ao rolar para cima
  var cta = document.querySelector(".mobile-cta");
  var lastY = window.scrollY;
  window.addEventListener("scroll", function () {
    if (!cta) return;
    var y = window.scrollY;
    if (y > lastY && y > 200) {
      cta.style.transform = "translateY(100%)";
    } else {
      cta.style.transform = "translateY(0)";
    }
    lastY = y;
  });

  // Scroll reveal
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }
});

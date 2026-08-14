/**
 * CONFIGURAÇÃO CENTRAL DO SITE — MENTE EM EVOLUÇÃO
 * -----------------------------------------------------------
 * Se o link de afiliado mudar no futuro, altere APENAS o valor
 * de AFFILIATE_URL abaixo. Todos os botões do site usam esta
 * variável — nenhum link deve ser escrito diretamente no HTML.
 * -----------------------------------------------------------
 */
window.SITE_CONFIG = {
  AFFILIATE_URL: "https://pay.kiwify.com.br/bi0m6Dr?afid=VAlZrRvs",
  PRODUCT_NAME: "Box do Sucesso",
  DEFAULT_CTA_LABEL: "Conhecer o Box do Sucesso",
  ACTIVE: true
};

/**
 * Aplica a AFFILIATE_URL a todo elemento marcado com
 * data-affiliate-link assim que a página carrega, e registra
 * o clique (contador local simples em localStorage, sem dados
 * pessoais) para o painel de métricas internas do /admin.
 */
document.addEventListener("DOMContentLoaded", function () {
  var cfg = window.SITE_CONFIG;
  var links = document.querySelectorAll("[data-affiliate-link]");
  links.forEach(function (el) {
    if (!cfg.ACTIVE) {
      el.setAttribute("aria-disabled", "true");
      return;
    }
    el.setAttribute("href", cfg.AFFILIATE_URL);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener sponsored");
    el.addEventListener("click", function () {
      try {
        var key = "meb_box_clicks";
        var current = parseInt(localStorage.getItem(key) || "0", 10);
        localStorage.setItem(key, String(current + 1));
      } catch (e) {
        /* localStorage indisponível — ignora silenciosamente */
      }
    });
  });
});

/* Personalização por link: ?wa=5511999998888&nome=Nome%20da%20Oficina */
const params = new URLSearchParams(location.search);
const WA = (params.get("wa") || "5500900000000").replace(/\D/g, "");
const NOME = params.get("nome");
const waUrl = msg => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
const fmtPhone = n => {
  const d = n.replace(/^55/, "");
  return d.length === 11 ? `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
       : d.length === 10 ? `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}` : n;
};

if (NOME) {
  document.querySelectorAll("[data-brand]").forEach(el => (el.textContent = NOME));
  document.title = NOME + " | Orçamento antes de qualquer serviço";
}
document.querySelectorAll("a[data-wa]").forEach(a => (a.href = waUrl(a.dataset.wa)));
if (params.get("wa")) document.querySelectorAll("[data-phone]").forEach(el => (el.textContent = fmtPhone(WA)));

/* Ordem de serviço: monta o pedido de orçamento e abre o WhatsApp */
const form = document.getElementById("orcamento");
form.addEventListener("submit", e => {
  e.preventDefault();
  const servs = [...form.querySelectorAll("input[name=serv]:checked")].map(i => i.value);
  const carro = form.carro.value.trim(), obs = form.obs.value.trim();
  const err = document.getElementById("err");
  err.hidden = servs.length > 0 || !!obs;
  if (!servs.length && !obs) return;
  let msg = "Olá! Gostaria de um orçamento";
  if (carro) msg += ` para o meu ${carro}`;
  msg += ".";
  if (servs.length) msg += `\nServiços: ${servs.join(", ")}.`;
  if (obs) msg += `\nProblema: ${obs}`;
  window.open(waUrl(msg), "_blank", "noopener");
});

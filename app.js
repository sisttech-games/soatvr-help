import { articles, releases, immersions, documents, experienceGuides, supportUrl } from "./content.js";
import { catalog } from "./catalog.js";

const icons = {
  orbit:'<ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(-36 12 12)"/><circle cx="12" cy="12" r="4"/><path d="M19 4h.01M7 20h.01"/>',
  headset:'<path d="M3 14v-2a9 9 0 0 1 18 0v2M3 14a2 2 0 0 1 2-2h2v7H5a2 2 0 0 1-2-2zm18 0a2 2 0 0 0-2-2h-2v7h2a2 2 0 0 0 2-2zm-4 5a3 3 0 0 1-3 3h-3"/>',
  search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4 4"/>',
  arrow:'<path d="M4 12h15m-6-6 6 6-6 6"/>',
  spark:'<path d="M12 2c0 6 4 10 10 10-6 0-10 4-10 10 0-6-4-10-10-10 6 0 10-4 10-10Z"/>',
  close:'<path d="m6 6 12 12M18 6 6 18"/>',
  external:'<path d="M13 4h7v7m0-7-9 9m8 0v7H4V5h7"/>',
  glasses:'<rect x="2" y="6" width="20" height="12" rx="4"/><path d="m9 18 1-3h4l1 3M6 11h2m8 0h2"/>',
  wifi:'<path d="M2 9a16 16 0 0 1 20 0M5 13a11 11 0 0 1 14 0m-11 4a6 6 0 0 1 8 0m-4 4h.01"/>',
  station:'<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M4 12h16M9 8h6m-6 8h6"/>',
  book:'<path d="M12 6c-3-3-7-3-10-2v15c3-1 7-1 10 2 3-3 7-3 10-2V4c-3-1-7-1-10 2zm0 0v15"/>'
};
const $ = selector => document.querySelector(selector);
const icon = name => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + icons[name] + '</svg>';
const esc = value => String(value ?? "").replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[char]);
const normalize = value => value.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
const dialog = $("#dialog");
const modal = $("#dialog-body");
const label = (section, title) => '<p class="eyebrow">' + esc(section) + '</p><h2 id="dialog-title">' + esc(title) + '</h2>';
const link = (href, title, className = "btn outline") => {
  const external = /^https?:/.test(href);
  return '<a class="' + className + '" href="' + esc(href) + '"' + (external ? ' target="_blank" rel="noopener"' : "") + '>' + esc(title) + ' ' + icon(external ? "external" : "arrow") + '</a>';
};
const go = (href, title) => link(href, title);
const tile = name => '<span class="tile" data-icon="' + name + '">' + icon(name) + '</span>';
const status = message => '<div class="empty">' + esc(message) + '</div>';
const allArticles = [...articles, ...experienceGuides];
const tutorialRoutes = new Map(articles.filter(item => item.page).map(item => ["#guia/" + item.page,item]));
const articleControl = (id, content, className) => {
  const item = allArticles.find(article => article.id === id);
  return item?.page
    ? '<a class="' + className + '" href="#guia/' + esc(item.page) + '">' + content + '</a>'
    : '<button class="' + className + '" data-article="' + esc(id) + '">' + content + '</button>';
};
const catalogTerms = value => normalize(value).split(" ").filter(Boolean);
const catalogIndex = catalog.map(item => ({
  item,
  text: normalize([item.title,item.stage,...item.subjects,item.summary,...item.goals].join(" "))
}));
const pageSize = 12;
let catalogPage = 0;
let galleryExpanded = false;

function show(markup, focus = true) {
  dialog.classList.remove("experience-image-dialog");
  modal.innerHTML = markup;
  if (!dialog.open) dialog.showModal();
  if (focus) $("#dialog .close").focus();
}

function renderReleases() {
  $("#releases").innerHTML = releases.map(item => '<button class="release" data-release="' + item.id + '">' + tile(item.icon) + '<span><h3>' + esc(item.title) + '</h3><p>' + esc(item.summary) + '</p></span><span class="pill ' + (item.notes.length ? "" : "purple") + '">' + esc(item.type) + '</span><span>' + icon("arrow") + '</span></button>').join("");
}

function renderArticles() {
  const cards = list => list.map(item =>
    articleControl(item.id, tile(item.icon) + '<h3>' + esc(item.title) + '</h3><p>' + esc(item.summary) + '</p>', "article-card")
  ).join("");
  $("#articles").innerHTML = cards(articles.filter(item => item.id !== "inicio"));
  $("#experience-guides").innerHTML = cards(experienceGuides);
  $("#documents").innerHTML = documents.map(item => '<a class="resource-link" href="' + esc(item.url) + '" target="_blank" rel="noopener">' + tile("book") + '<span><strong>' + esc(item.title) + '</strong><small>' + esc(item.summary) + '</small></span>' + icon("external") + '</a>').join("");
}

function renderCatalog() {
  const terms = catalogTerms($("#catalog-query").value);
  const stage = $("#catalog-stage").value, subject = $("#catalog-subject").value;
  const matching = catalogIndex.filter(({item,text}) => (!stage || item.stage === stage) && (!subject || item.subjects.includes(subject)) && terms.every(term => text.includes(term)));
  const totalPages = Math.ceil(matching.length / pageSize);
  const offset = catalogPage * pageSize;
  $("#catalog-count").textContent = matching.length === 1 ? "1 imersão encontrada" : matching.length + " imersões encontradas";
  $("#catalog-results").innerHTML = matching.length ? matching.slice(offset,offset + pageSize).map(({item}) => '<button class="catalog-card" data-catalog="' + item.page + '"><span class="pill">' + esc(item.stage) + '</span><h3>' + esc(item.title) + '</h3><small>' + esc(item.subjects.join(" · ")) + '</small></button>').join("") : status("Nenhuma imersão com esses filtros.");
  $("#catalog-pages").hidden = totalPages < 2;
  $("#catalog-pages").innerHTML = '<button class="btn outline" id="catalog-prev"' + (catalogPage === 0 ? " disabled" : "") + '>Anterior</button><span>Página ' + (catalogPage + 1) + ' de ' + totalPages + '</span><button class="btn outline" id="catalog-next"' + (catalogPage + 1 >= totalPages ? " disabled" : "") + '>Próxima</button>';
}

function initCatalog() {
  const sortPt = (a,b) => a.localeCompare(b,"pt-BR",{numeric:true});
  const optionsFor = list => [...new Set(list)].sort(sortPt).map(value => '<option>' + esc(value) + '</option>').join("");
  $("#catalog-stage").insertAdjacentHTML("beforeend", optionsFor(catalog.map(item => item.stage)));
  $("#catalog-subject").insertAdjacentHTML("beforeend", optionsFor(catalog.flatMap(item => item.subjects)));
  $("#catalog-pdf").href = documents[0].url;
  renderCatalog();
}

function showCatalogEntry(item) {
  const goals = item.goals.length ? '<h3>Objetivos e interações do livro-guia</h3><ol>' + item.goals.map(goal => '<li>' + esc(goal) + '</li>').join("") + '</ol>' : "";
  show(label("CATÁLOGO · " + item.stage.toUpperCase(), item.title) + '<p><strong>Tema ' + item.chapter + ' · Componentes curriculares</strong> · ' + esc(item.subjects.join(", ")) + '</p><p>' + esc(item.summary) + '</p>' + goals + '<p>Ficha original na página ' + item.page + ' do catálogo.</p><div class="modal-links">' + go(documents[0].url,"Abrir catálogo original") + go(supportUrl,"Falar com o suporte") + '</div>');
}

function renderGallery() {
  $("#gallery").innerHTML = immersions.slice(0, galleryExpanded ? immersions.length : 3).map(item => '<button class="immersion" data-immersion="' + item.id + '"><img loading="lazy" alt="" src="./assets/' + item.id + '.webp"><small>' + esc(item.topic) + '</small><h3>' + esc(item.title) + '</h3></button>').join("");
  const toggle = $("#more-immersions");
  toggle.innerHTML = (galleryExpanded ? "Mostrar menos" : "Ver mais imersões") + " " + icon("arrow");
  toggle.setAttribute("aria-expanded", String(galleryExpanded));
}

function articleActions(item) {
  const links = item.links ?? (item.link ? [{url:item.link,label:item.linkLabel}] : []);
  const related = (item.related ?? []).map(entry => articleControl(entry.id,esc(entry.label),"btn outline")).join("");
  const support = links.some(entry => entry.url === supportUrl) ? "" : link(supportUrl,"Falar com o suporte oficial","btn primary");
  return links.map(entry => go(entry.url,entry.label)).join("") + related + support;
}

function showArticle(item) {
  const visual = item.image ? '<details class="article-image"><summary>Ver guia visual</summary><a href="' + esc(item.image.url) + '" target="_blank" rel="noopener"><img class="detail-image" src="' + esc(item.image.url) + '" alt="' + esc(item.image.alt) + '"></a></details>' : "";
  const steps = '<ol>' + item.steps.map(step => '<li>' + esc(step) + '</li>').join("") + '</ol>';
  show(label("GUIA DO T1M", item.title) + '<p>' + esc(item.summary) + '</p>' + steps + visual + '<div class="modal-links">' + articleActions(item) + '</div>');
}

function renderTutorial(item) {
  const folders = item.folders ? '<table class="article-folders"><caption>Pastas dentro de Arquivos</caption><thead><tr><th scope="col">Conteúdo</th><th scope="col">Pasta</th></tr></thead><tbody>' +
    item.folders.map(([format, folder]) => '<tr><th scope="row">' + esc(format) + '</th><td><code>' + esc(folder) + '</code></td></tr>').join("") + '</tbody></table>' : "";
  const example = item.example && (
    '<aside class="tutorial-example"><strong>' + esc(item.example.label) + '</strong><div class="tutorial-status">' +
    '<span>' + item.example.installed + ' de ' + item.example.total + ' apps instalados</span><span>1 instalação pendente</span></div>' +
    '<progress aria-label="Aplicativos instalados" value="' + item.example.installed + '" max="' + item.example.total + '"></progress><p>' +
    esc(item.example.note) + '</p></aside>'
  );
  const steps = item.steps ? '<ol class="tutorial-steps">' + item.steps.map((step,index) =>
    '<li><div class="tutorial-step"><h2>' + esc(item.stepTitles[index]) + '</h2><p>' + esc(step) + '</p>' +
    (folders && index === 2 ? folders : "") + (example && index === item.example.step ? example : "") + '</div></li>'
  ).join("") + '</ol>' : "";
  const questions = (item.questions ?? []).map(([question, answer]) =>
    '<details class="article-question"><summary>' + esc(question) + '</summary><p>' + esc(answer) + '</p></details>'
  ).join("");
  $("#guide-page").innerHTML = '<a class="text-link tutorial-back" href="#guias">Voltar para guias</a>' +
    '<header class="tutorial-heading">' + tile(item.icon) + '<h1 id="guide-title" tabindex="-1">' + esc(item.title) + '</h1><p>' + esc(item.summary) + '</p></header>' +
    steps + questions + '<div class="tutorial-actions">' + articleActions(item) + '</div>';
}

function showRelease(item) {
  show(label(item.area.toUpperCase(), item.title) + '<p>' + esc(item.summary) + '</p>' + (item.notes.length ? '<ul>' + item.notes.map(note => '<li>' + esc(note) + '</li>').join("") + '</ul>' : '<p>As notas oficiais desta área ainda não foram adicionadas à central.</p>'));
}

function showHistory() {
  show(label("CHANGELOG", "Histórico de atualizações") + releases.map(item => '<button class="result-item" data-release="' + item.id + '"><strong>' + esc(item.title) + '</strong><small>' + esc(item.type) + '</small></button>').join(""));
}

function showGuide() {
  show(label("GUIA SOATVR", "Oi, eu sou o T1M!") + '<p>O que vamos fazer hoje?</p><div class="modal-links"><button class="btn primary" data-article="inicio">Preparar minha primeira aula</button><button class="btn outline" data-article="mdm-conta">Solicitar uma conta MDM</button><button class="btn outline" data-history>Ver atualizações</button>' + go("#imersoes","Buscar uma imersão") + go("#experiencia-t1m","Experiência T1M") + go(supportUrl,"Falar com o suporte") + '</div>');
}

function searchFor(query) {
  const terms = normalize(query).split(" ").filter(Boolean);
  if (!terms.length) return;
  const options = [
    ...allArticles.map(item => ({
      ...item, kind:"article", section:"Guia",
      body:[...(item.stepTitles ?? []),...(item.steps ?? []),...(item.questions ?? []).flat(),...(item.folders ?? []).flat(),item.example?.note].join(" ")
    })),
    ...documents.map(item => ({...item, kind:"document", section:item.type ?? "Documento"})),
    ...releases.map(item => ({...item, kind:"release", section:"Atualização", body:item.notes.join(" ")})),
    ...catalog.map(item => ({...item, id:item.page, kind:"catalog", section:item.stage, body:[...item.subjects,...item.goals].join(" ")})),
    ...immersions.map(item => ({...item, kind:"immersion", section:"Imersão em destaque", body:item.topic}))
  ];
  const results = options.filter(item => terms.every(term => normalize([item.title,item.summary,item.body].join(" ")).includes(term)));
  show(label("BUSCA", query) + (results.length ? results.map(item => {
    const text = '<strong>' + esc(item.title) + '</strong><small>' + esc(item.section + " · " + item.summary) + '</small>';
    if (item.url) return '<a class="result-item" href="' + esc(item.url) + '" target="_blank" rel="noopener">' + text + '</a>';
    if (item.kind === "article") return articleControl(item.id,text,"result-item");
    return '<button class="result-item" data-' + item.kind + '="' + esc(item.id) + '">' + text + '</button>';
  }).join("") : '<p>Nenhum resultado. Tente outra palavra ou fale com a equipe.</p>' + go(supportUrl,"Falar com o suporte")));
}

document.querySelectorAll("[data-icon]").forEach(el => { el.innerHTML = icon(el.dataset.icon); });
renderReleases();
renderArticles();
initCatalog();
renderGallery();

$("#search").addEventListener("submit", event => { event.preventDefault(); searchFor($("#query").value.trim()); });
$("#all-releases").addEventListener("click", showHistory);
for (const [selector,eventName] of [["#catalog-query","input"],["#catalog-stage","change"],["#catalog-subject","change"]]) {
  $(selector).addEventListener(eventName, () => { catalogPage = 0; renderCatalog(); });
}
$("#catalog-pages").addEventListener("click", event => {
  const button = event.target.closest("button");
  if (!button || button.disabled) return;
  catalogPage += button.id === "catalog-next" ? 1 : -1;
  renderCatalog();
  ($("#" + button.id + ":enabled") ?? $("#catalog-pages button:enabled"))?.focus();
});
$("#more-immersions").addEventListener("click", () => { galleryExpanded = !galleryExpanded; renderGallery(); });
$("#dialog .close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
window.addEventListener("hashchange", () => {
  const hash = location.hash || "#inicio";
  const tutorial = tutorialRoutes.get(hash);
  const wasTutorial = !$("#guide-page").hidden;
  $("#home-page").hidden = Boolean(tutorial);
  $("#guide-page").hidden = !tutorial;
  document.title = tutorial ? tutorial.title + " · SOATVR" : "Central de Informação do SOATVR";
  document.querySelectorAll("nav a").forEach(link => link.classList.toggle("active", link.hash === (tutorial ? "#guias" : hash)));
  if (tutorial) {
    if (dialog.open) dialog.close();
    renderTutorial(tutorial);
    $("#guide-title").focus({preventScroll:true});
    window.scrollTo(0,0);
  } else if (wasTutorial) {
    (document.getElementById(hash.slice(1)) ?? $("#inicio")).scrollIntoView();
  }
});
window.dispatchEvent(new Event("hashchange"));

document.addEventListener("click", event => {
  const button = event.target.closest("button");
  if (!button) {
    if (!$("#guide-page").hidden && event.target.closest(".skip")) {
      event.preventDefault();
      $("#guide-title").focus();
    }
    if (dialog.open && event.target.closest('a[href^="#"]')) dialog.close();
    return;
  }
  const data = button.dataset;
  if ("guide" in data) showGuide();
  if ("history" in data) showHistory();
  if (data.search) { $("#query").value = data.search; searchFor(data.search); }
  if (data.article) showArticle(allArticles.find(item => item.id === data.article));
  if (data.catalog) showCatalogEntry(catalog.find(item => item.page === Number(data.catalog)));
  if (data.release) showRelease(releases.find(item => item.id === data.release));
  if ("experienceShot" in data) {
    const image = button.querySelector("img");
    const title = button.querySelector("span").textContent;
    show(label("Experiência T1M", title) + '<img class="experience-image" src="' + esc(image.getAttribute("src")) + '" alt="' + esc(image.alt) + '">');
    dialog.classList.add("experience-image-dialog");
  }
  if (data.immersion) {
    const item = immersions.find(entry => entry.id === data.immersion);
    show(label(item.topic.toUpperCase(), item.title) + '<img class="detail-image" src="./assets/' + item.id + '.webp" alt="' + esc(item.title) + '"><p>' + esc(item.summary) + '</p>');
  }

});

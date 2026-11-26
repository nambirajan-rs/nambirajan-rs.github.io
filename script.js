/* Renders the page from data.js. You normally don't need to edit this file. */
(function () {
  const D = PORTFOLIO;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const tags = (list) => `<div class="tags">${list.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>`;

  // ---------- Icons (inline SVG, Feather-style) ----------
  const svg = (p) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
  const I = {
    github: svg('<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>'),
    linkedin: svg('<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>'),
    mail: svg('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>'),
    download: svg('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>'),
    arrow: svg('<path d="M5 12h14M13 6l6 6-6 6"/>'),
    sun: svg('<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>'),
    moon: svg('<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>'),
    menu: svg('<path d="M3 6h18M3 12h18M3 18h18"/>'),
    close: svg('<path d="M18 6 6 18M6 6l12 12"/>'),
  };

  // ---------- Hero ----------
  $("heroName").textContent = D.name;
  $("heroTitle").textContent = D.title;
  $("openTo").textContent = D.openTo;
  $("tagline").textContent = D.tagline;
  $("footName").textContent = D.name;
  $("year").textContent = new Date().getFullYear();
  $("avatar").innerHTML = D.photo ? `<img src="${esc(D.photo)}" alt="${esc(D.name)}">` : esc(D.initials);

  $("heroCta").innerHTML =
    `<a href="#projects" class="btn btn-primary">View projects ${I.arrow}</a>` +
    (D.resume ? `<a href="${esc(D.resume)}" class="btn btn-ghost" target="_blank" rel="noopener">${I.download} Resume</a>` : "");

  $("heroSocial").innerHTML = [
    [D.github, I.github, "GitHub"],
    [D.linkedin, I.linkedin, "LinkedIn"],
    [D.email && "mailto:" + D.email, I.mail, "Email"],
  ]
    .filter((s) => s[0])
    .map(([href, icon, label]) => `<a href="${esc(href)}" target="_blank" rel="noopener" aria-label="${label}" title="${label}">${icon}</a>`)
    .join("");

  // ---------- About ----------
  $("aboutText").innerHTML = D.about.map((p) => `<p>${esc(p)}</p>`).join("");
  $("stats").innerHTML = D.stats.map((s) => `<div class="card stat"><b>${esc(s.value)}</b><span>${esc(s.label)}</span></div>`).join("");

  // ---------- Experience ----------
  $("experienceList").innerHTML = D.experience
    .map(
      (e) => `<div class="card">
        <div class="job-head"><h3>${esc(e.company)}</h3><span class="period">${esc(e.period)}</span></div>
        ${e.summary ? `<p class="job-summary">${esc(e.summary)}</p>` : ""}
        <div class="roles">${e.roles.map((r) => `<div class="role"><b>${esc(r.title)}</b><span>${esc(r.period)}</span></div>`).join("")}</div>
        <ul class="points">${e.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
      </div>`
    )
    .join("");

  // ---------- Projects ----------
  $("clientGrid").innerHTML = D.clientProjects
    .map(
      (p) => `<article class="card project">
        <span class="project-meta">${esc(p.client)}</span>
        <h4>${esc(p.title)}</h4>
        ${p.metric ? `<span class="metric">${esc(p.metric)}</span>` : ""}
        <p>${esc(p.description)}</p>
        ${tags(p.tech)}
      </article>`
    )
    .join("");
  $("githubGrid").innerHTML = D.githubProjects
    .map(
      (p) => `<article class="card project">
        <span class="project-meta">${esc(p.type)}</span>
        <h4>${esc(p.title)}</h4>
        <p>${esc(p.description)}</p>
        ${tags(p.tech)}
        ${p.github ? `<a class="link" href="${esc(p.github)}" target="_blank" rel="noopener">${I.github} View code</a>` : ""}
      </article>`
    )
    .join("");

  // ---------- Skills ----------
  $("skillsGrid").innerHTML = D.skills.map((s) => `<div class="card skill-card"><h3>${esc(s.category)}</h3>${tags(s.items)}</div>`).join("");
  $("learning").innerHTML = D.learning && D.learning.length ? `<b>Currently learning:</b> ${D.learning.map(esc).join(" · ")}` : "";

  // ---------- Education & certifications ----------
  $("eduList").innerHTML = D.education
    .map(
      (e) => `<div class="card edu">
        <h3>${esc(e.degree)}</h3><div class="school">${esc(e.school)}</div>
        <div class="meta"><span>${esc(e.period)}</span><b>${esc(e.detail)}</b></div>
      </div>`
    )
    .join("");
  $("certList").innerHTML =
    `<h3>Certifications</h3>` +
    D.certifications
      .map((c) => {
        const name = c.link ? `<a href="${esc(c.link)}" target="_blank" rel="noopener">${esc(c.name)}</a>` : esc(c.name);
        return `<div class="cert"><span>${name}</span><small>${esc([c.issuer, c.year].filter(Boolean).join(" · "))}</small></div>`;
      })
      .join("") +
    (D.languages && D.languages.length ? `<div class="langs"><b>Languages:</b> ${D.languages.map(esc).join(", ")}</div>` : "");

  // ---------- Contact ----------
  $("contactRow").innerHTML = [
    D.email && `<a class="btn btn-primary" href="mailto:${esc(D.email)}">${I.mail} ${esc(D.email)}</a>`,
    D.linkedin && `<a class="btn btn-ghost" href="${esc(D.linkedin)}" target="_blank" rel="noopener">${I.linkedin} LinkedIn</a>`,
    D.github && `<a class="btn btn-ghost" href="${esc(D.github)}" target="_blank" rel="noopener">${I.github} GitHub</a>`,
  ]
    .filter(Boolean)
    .join("");

  // ---------- Theme toggle ----------
  const root = document.documentElement;
  const themeBtn = $("themeToggle");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
  const currentTheme = () => root.dataset.theme || (prefersDark.matches ? "dark" : "light");
  const paintToggle = () => { themeBtn.innerHTML = currentTheme() === "dark" ? I.sun : I.moon; };
  let saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  if (saved) root.dataset.theme = saved;
  paintToggle();
  if (prefersDark.addEventListener) prefersDark.addEventListener("change", paintToggle);
  themeBtn.addEventListener("click", () => {
    const t = currentTheme() === "dark" ? "light" : "dark";
    root.dataset.theme = t;
    try { localStorage.setItem("theme", t); } catch (e) {}
    paintToggle();
  });

  // ---------- Mobile menu ----------
  const menuBtn = $("menuBtn");
  const navLinks = $("navLinks");
  menuBtn.innerHTML = I.menu;
  const toggleMenu = (open) => {
    navLinks.classList.toggle("open", open);
    menuBtn.innerHTML = open ? I.close : I.menu;
    menuBtn.setAttribute("aria-expanded", String(open));
  };
  menuBtn.addEventListener("click", () => toggleMenu(!navLinks.classList.contains("open")));
  navLinks.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => toggleMenu(false)));

  // ---------- Nav border + active link ----------
  const nav = $("nav");
  const sections = [...document.querySelectorAll("main section[id]")];
  const onScroll = () => {
    nav.classList.toggle("scrolled", window.scrollY > 10);
    let current = "";
    sections.forEach((s) => { if (window.scrollY >= s.offsetTop - 120) current = s.id; });
    navLinks.querySelectorAll("a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + current));
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();

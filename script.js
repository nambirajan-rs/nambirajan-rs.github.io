/* Renders the page from data.js. You normally don't need to edit this file. */
(function () {
  const D = PORTFOLIO;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // ---------- Icons (inline SVG, Feather-style) ----------
  const svg = (p) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
  const I = {
    github: svg('<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>'),
    linkedin: svg('<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>'),
    mail: svg('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>'),
    phone: svg('<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>'),
    pin: svg('<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>'),
    download: svg('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>'),
    send: svg('<path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/>'),
    external: svg('<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/>'),
    chart: svg('<path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>'),
    spark: svg('<path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1M5.6 18.4l2.1-2.1m8.6-8.6 2.1-2.1"/><circle cx="12" cy="12" r="3"/>'),
    bot: svg('<rect x="3" y="8" width="18" height="12" rx="2"/><path d="M12 4v4M8 14h.01M16 14h.01"/><circle cx="12" cy="3" r="1"/>'),
    code: svg('<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>'),
    brain: svg('<path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24A2.5 2.5 0 0 0 14.5 2Z"/>'),
    workflow: svg('<rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/><path d="M6 9v4a2 2 0 0 0 2 2h7"/>'),
    cap: svg('<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>'),
    award: svg('<circle cx="12" cy="8" r="6"/><path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11"/>'),
    sun: svg('<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>'),
    moon: svg('<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>'),
    menu: svg('<path d="M3 6h18M3 12h18M3 18h18"/>'),
    close: svg('<path d="M18 6 6 18M6 6l12 12"/>'),
  };

  // ---------- Hero ----------
  $("heroName").textContent = D.name;
  $("openTo").textContent = D.openTo;
  $("tagline").textContent = D.tagline;
  $("footName").textContent = D.name;
  $("year").textContent = new Date().getFullYear();
  $("avatar").innerHTML = D.photo
    ? `<img src="${esc(D.photo)}" alt="${esc(D.name)}">`
    : `<span class="grad">${esc(D.initials)}</span>`;

  $("heroCta").innerHTML =
    `<a href="#projects" class="btn btn-primary">View my work ${I.external}</a>` +
    (D.resume ? `<a href="${esc(D.resume)}" class="btn btn-ghost" target="_blank" rel="noopener">${I.download} View resume</a>` : "");

  const socials = [
    [D.github, I.github, "GitHub"],
    [D.linkedin, I.linkedin, "LinkedIn"],
    [D.email && "mailto:" + D.email, I.mail, "Email"],
  ].filter((s) => s[0]);
  $("heroSocial").innerHTML = socials
    .map(([href, icon, label]) => `<a href="${esc(href)}" target="_blank" rel="noopener" aria-label="${label}" title="${label}">${icon}</a>`)
    .join("");

  // Typing effect
  (function type() {
    const el = $("typed");
    let r = 0, i = 0, deleting = false;
    const tick = () => {
      const word = D.roles[r];
      el.textContent = word.slice(0, i);
      if (!deleting && i < word.length) i++;
      else if (deleting && i > 0) i--;
      else if (!deleting) { deleting = true; return setTimeout(tick, 1800); }
      else { deleting = false; r = (r + 1) % D.roles.length; }
      setTimeout(tick, deleting ? 40 : 80);
    };
    tick();
  })();

  // ---------- About ----------
  $("aboutText").innerHTML = D.about.map((p) => `<p>${esc(p)}</p>`).join("");
  $("stats").innerHTML = D.stats
    .map((s) => `<div class="card stat"><b class="grad">${esc(s.value)}</b><span>${esc(s.label)}</span></div>`)
    .join("");

  // ---------- Skills ----------
  $("skillsGrid").innerHTML = D.skills
    .map(
      (s) => `<div class="card skill-card reveal">
        <div class="skill-head"><div class="skill-icon">${I[s.icon] || I.code}</div><h3>${esc(s.category)}</h3></div>
        <div class="tags">${s.items.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
      </div>`
    )
    .join("");
  $("learningList").innerHTML = D.learning
    .map((l) => {
      const next = /next/i.test(l.status) ? " next" : "";
      return `<div class="learn-item">${esc(l.name)} <small class="${next.trim()}">${esc(l.status)}</small></div>`;
    })
    .join("");

  // ---------- Experience ----------
  $("timeline").innerHTML = D.experience
    .map(
      (e) => `<div class="card tl-item reveal">
        <div class="tl-top"><h3>${esc(e.role)}</h3><span class="tl-period">${esc(e.period)}</span></div>
        <div class="tl-company">${esc(e.company)}</div>
        ${e.summary ? `<p class="tl-summary">${esc(e.summary)}</p>` : ""}
        <ul class="tl-points">${e.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
      </div>`
    )
    .join("");

  // ---------- Projects ----------
  $("projectsGrid").innerHTML = D.projects
    .map((p) => {
      const links =
        (p.github ? `<a href="${esc(p.github)}" target="_blank" rel="noopener" aria-label="GitHub" title="Source code">${I.github}</a>` : "") +
        (p.demo ? `<a href="${esc(p.demo)}" target="_blank" rel="noopener" aria-label="Live demo" title="Live demo">${I.external}</a>` : "");
      return `<article class="card project reveal" data-cat="${esc(p.category)}">
        <div class="project-top"><div class="project-icon">${p.category === "ds" ? I.brain : I.workflow}</div><div class="project-links">${links}</div></div>
        <span class="project-type">${esc(p.type)}</span>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.description)}</p>
        <div class="tags">${p.tech.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
      </article>`;
    })
    .join("");

  $("filters").addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    document.querySelectorAll("#filters button").forEach((b) => b.classList.toggle("active", b === btn));
    const f = btn.dataset.filter;
    document.querySelectorAll(".project").forEach((card) => {
      card.classList.toggle("hide", f !== "all" && card.dataset.cat !== f);
    });
  });

  // ---------- Education & Certs ----------
  $("eduList").innerHTML = D.education
    .map(
      (e) => `<div class="card edu reveal">
        <div class="edu-icon">${I.cap}</div>
        <div><h3>${esc(e.degree)}</h3><div class="school">${esc(e.school)}</div>
        <div class="meta"><span>${esc(e.period)}</span><span class="highlight">${esc(e.detail)}</span></div></div>
      </div>`
    )
    .join("");
  $("certList").classList.add("card");
  $("certList").innerHTML =
    `<h3>Certifications</h3>` +
    D.certifications
      .map((c) => {
        const name = c.link ? `<a href="${esc(c.link)}" target="_blank" rel="noopener">${esc(c.name)}</a>` : esc(c.name);
        return `<div class="cert"><div class="cert-name">${I.award}<span>${name}</span></div><small>${esc(c.issuer)} · ${esc(c.year)}</small></div>`;
      })
      .join("") +
    (D.languages && D.languages.length ? `<div class="langs"><b>Languages:</b> ${D.languages.map(esc).join(", ")}</div>` : "");

  // ---------- Contact ----------
  const contacts = [
    D.email && ["mailto:" + D.email, I.mail, "Email", D.email],
    D.linkedin && [D.linkedin, I.linkedin, "LinkedIn", "Connect with me"],
    D.github && [D.github, I.github, "GitHub", D.github.replace(/^https?:\/\/(www\.)?/, "")],
    D.phone && ["tel:" + D.phone.replace(/\s/g, ""), I.phone, "Phone", D.phone],
    D.location && [null, I.pin, "Location", D.location],
  ].filter(Boolean);
  $("contactCards").innerHTML = contacts
    .map(([href, icon, title, sub]) => {
      const inner = `${icon}<b>${title}</b><span>${esc(sub)}</span>`;
      return href
        ? `<a class="card contact-card" href="${esc(href)}" target="_blank" rel="noopener">${inner}</a>`
        : `<div class="card contact-card">${inner}</div>`;
    })
    .join("");

  // ---------- Theme toggle ----------
  const root = document.documentElement;
  const themeBtn = $("themeToggle");
  // No saved choice = follow the visitor's system theme (dark is the fallback).
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)");
  const currentTheme = () => root.dataset.theme || (prefersLight.matches ? "light" : "dark");
  const paintToggle = () => { themeBtn.innerHTML = currentTheme() === "dark" ? I.sun : I.moon; };
  let saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  if (saved) root.dataset.theme = saved;
  paintToggle();
  if (prefersLight.addEventListener) prefersLight.addEventListener("change", paintToggle);
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
  };
  menuBtn.addEventListener("click", () => toggleMenu(!navLinks.classList.contains("open")));
  navLinks.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => toggleMenu(false)));

  // ---------- Nav background + active link ----------
  const nav = $("nav");
  const sections = [...document.querySelectorAll("main section[id]")];
  const onScroll = () => {
    nav.classList.toggle("scrolled", window.scrollY > 20);
    let current = "";
    sections.forEach((s) => { if (window.scrollY >= s.offsetTop - 120) current = s.id; });
    navLinks.querySelectorAll("a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + current));
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ---------- Reveal on scroll ----------
  const io = new IntersectionObserver(
    (entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); } }),
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
})();

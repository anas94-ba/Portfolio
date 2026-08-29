/* ============================================================
   EDIT YOUR INFO HERE
   ============================================================ */
const CONFIG = {
  name: "Anas Baba",
  title: "AI Engineer & Data Analyst",
  photo: "images/profile.png", // image URL or local path — leave empty for initials
  email: "anas2baba1994@gmail.com",
  linkedin: "https://www.linkedin.com/in/anasmustafababa/",
  github: "https://github.com/anas94-ba",
  phone: "+972594098620"
};

/* ============================================================
   SECTIONS — the three pillars. Each has an optional cover image.
   cover: "" -> auto placeholder in the section's accent color
   ============================================================ */
const SECTIONS = [
  { id:"ai", idx:"N.01", title:"AI", desc:"Computer vision and applied machine learning projects.", cover:"images/section-ai.svg" },
  { id:"software", idx:"N.02", title:"Software Development", desc:"Full-stack websites and desktop applications.", cover:"images/section-software.svg" },
  { id:"data", idx:"N.03", title:"Data Analysis", desc:"Dashboards, reports and dataset exploration across BI tools.", cover:"images/section-data.svg" }
];

/* ============================================================
   PROJECTS — add/edit projects here. Each project:
   id: unique slug (used in the URL)
   section: "ai" | "software" | "data"
   title: project name
   tag: short label shown on the card (tool / type)
   desc: description shown on the project page
   link: optional external link ("" to hide the button)
   cover: optional cover image path/URL ("" = auto placeholder)
   images: array of image paths/URLs for the gallery ([] = auto placeholders)
   ============================================================ */
const PROJECTS = [
  {
    id:"face-detection-recognition",
    section:"ai",
    title:"Face Detection & Recognition",
    tag:"Computer Vision",
    desc:"A computer vision system that detects and recognizes faces in real time, built and trained for accurate identification across varied lighting and angles.",
    link:"https://github.com/anas94-ba/Face-Detection-Recognition-using-OpenCV",
    cover:"images/face-detection-recognition.svg",
    images:["images/ai/face-detection-recognition/1.JPG","images/ai/face-detection-recognition/2.JPG","images/ai/face-detection-recognition/3.JPG"]
  },
  {
    id:"barbershop-management-system",
    section:"software",
    title:"Barbershop Management System",
    tag:"Website",
    desc:"A web application for managing bookings, staff schedules and customers for a barbershop business, built end to end as a full-stack website.",
    link:"https://github.com/anas94-ba/Barbershop-Managment-System",
    cover:"images/barbershop-management-system.svg",
    images:['images/sd/BMS/1.JPG','images/sd/BMS/2.JPG','images/sd/BMS/3.JPG','images/sd/BMS/4.JPG']
  },
  {
    id:"supermarket-management-system",
    section:"software",
    title:"Supermarket Management System",
    tag:"Desktop Application",
    desc:"A desktop application for managing inventory, sales and staff for a supermarket, designed for daily operational use.",
    link:"https://github.com/anas94-ba/SuperMarket",
    cover:"images/supermarket-management-system.svg",
    images:['images/sd/SMS/1.JPG','images/sd/SMS/2.JPG','images/sd/SMS/3.JPG','images/sd/SMS/4.JPG']
  },
  {
    id:"hr-analysis-excel",
    section:"data",
    title:"HR Analysis",
    tag:"Excel",
    desc:"An HR analytics workbook exploring workforce metrics such as headcount, attrition and performance, built with Excel formulas and pivot tables.",
    link:"https://docs.google.com/spreadsheets/d/1lJSjn8mFH0dNeAh931muLIe8-uiWX2D9/edit?usp=drive_link&ouid=103805479487189940846&rtpof=true&sd=true",
    cover:"images/hr-analysis-excel.svg",
    images:["images/da/1/1.JPG"]
  },
  {
    id:"superstore-analysis-tableau",
    section:"data",
    title:"Superstore Analysis",
    tag:"Tableau",
    desc:"An interactive Tableau dashboard analyzing sales, profit and shipping performance across the classic Superstore retail dataset.",
    link:"https://public.tableau.com/app/profile/anas.baba5653/viz/Book2_17838428714760/Story1",
    cover:"images/superstore-analysis-tableau.svg",
    images:["images/da/2/1.JPG","images/da/2/2.JPG"]
  },
  {
    id:"flights-analysis-sql",
    section:"data",
    title:"Flights Dataset Analysis",
    tag:"SQL",
    desc:"A SQL-based exploration of a flights dataset, covering delays, routes and airline performance through structured queries.",
    link:"",
    cover:"images/flights-analysis-sql.svg",
    images:["images/da/3/1.JPG","images/da/3/2.JPG","images/da/3/3.JPG","images/da/3/4.JPG"]
  },
  
  {
    id:"gaza-humanitarian-dashboard",
    section:"data",
    title:"Humanitarian Response Dashboard for the Gaza Strip",
    tag:"Power BI",
    desc:"A Power BI dashboard tracking humanitarian response indicators for the Gaza Strip, built to support clear, data-driven situational awareness.",
    link:"https://drive.google.com/file/d/1qWXoljGZd_QbwzgV-Ior3pUp4TswYA5G/view?usp=drive_link",
    cover:"images/gaza-humanitarian-dashboard.svg",
    images:["images/da/4/1.JPG","images/da/4/2.JPG","images/da/4/3.JPG"]
  },
  {
    id:"flights-analysis-powerbi",
    section:"data",
    title:"Flights Dataset Analysis",
    tag:"Power BI",
    desc:"A Power BI report examining flight performance, delays and route patterns from the flights dataset.",
    link:"https://drive.google.com/file/d/1C3NM5u9EV6h1ULbIlUfxAnqK1Uh89i8S/view?usp=drive_link",
    cover:"images/flights-analysis-powerbi.svg",
    images:["images/da/5/1.JPG","images/da/5/2.JPG","images/da/5/3.JPG","images/da/5/4.JPG"]
  },
  {
    id:"bank-campaign-analysis-tableau",
    section:"data",
    title:"Bank Campaign Dataset Analysis",
    tag:"Tableau",
    desc:"A Tableau dashboard analyzing a bank's marketing campaign dataset to uncover patterns in customer response and conversion.",
    link:"https://public.tableau.com/app/profile/anas.baba5653/viz/bank_17840351069080/Story1",
    cover:"images/bank-campaign-analysis-tableau.svg",
    images:["images/da/6/1.JPG","images/da/6/2.JPG","images/da/6/3.JPG"]
  },
  {
    id:"E-Commerce-Data-Analysis",
    section:"data",
    title:"E-Commerce Data Analysis",
    tag:"Python",
    desc:"E-commerce Data Analysis — Cleaned and analyzed 540K+ real retail transactions using Python and Pandas, uncovering that the top 31% of customers drive 80% of revenue. Built 12 visualizations to support data-driven retention and growth decisions.",
    link:"https://github.com/anas94-ba/E-Commerce-Data-Analysis",
    cover:"images/ecommerce_data_analysis.svg",
    images:["images/da/7/1.png","images/da/7/2.png","images/da/7/3.png","images/da/7/4.png"]
  }
];

/* ============================================================
   Helpers
   ============================================================ */
const accentOf = (sectionId) => sectionId === "ai" ? "var(--accent-ai)" : sectionId === "software" ? "var(--accent-sw)" : "var(--accent-da)";
const sectionOf = (id) => SECTIONS.find(s => s.id === id);
const projectsOf = (sectionId) => PROJECTS.filter(p => p.section === sectionId);
const projectById = (id) => PROJECTS.find(p => p.id === id);
const initials = (name) => name.split(" ").map(w=>w[0]).join("").toUpperCase().slice(0,2);

const ICONS = {
  mail:`<svg viewBox="0 0 24 24" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="M3 6.5l9 6.5 9-6.5"/></svg>`,
  link:`<svg viewBox="0 0 24 24"><path fill="currentColor" stroke="none" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554V9h3.412v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>`,  code:`<svg viewBox="0 0 24 24" stroke-width="1.6"><path d="M8 6L3 12l5 6"/><path d="M16 6l5 6-5 6"/></svg>`,
  phone:`<svg viewBox="0 0 24 24" stroke-width="1.6"><path d="M6 3h3l2 5-2.5 1.5a11 11 0 005 5L15 12l5 2v3a2 2 0 01-2 2C9.5 19 5 14.5 5 5a2 2 0 011-2z"/></svg>`,
  arrow:`<svg viewBox="0 0 24 24" stroke-width="1.8"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg>`,
  back:`<svg viewBox="0 0 24 24" stroke-width="1.8"><path d="M19 12H5"/><path d="M11 18l-6-6 6-6"/></svg>`
};

function pad2(n){ return n < 10 ? "0"+n : ""+n; }

/* ============================================================
   Views
   ============================================================ */
let sliderIndex = 0;
let sliderTotal = 0;

function updateSlider(){
  const track = document.getElementById("slider-track");
  if(!track) return;
  track.style.transform = `translateX(-${sliderIndex * 100}%)`;
  document.querySelectorAll(".slider-dots .dot").forEach((d, i) => {
    d.classList.toggle("active", i === sliderIndex);
  });
}

function slideMove(delta){
  if(sliderTotal === 0) return;
  sliderIndex = (sliderIndex + delta + sliderTotal) % sliderTotal;
  updateSlider();
}

function slideGo(i){
  sliderIndex = i;
  updateSlider();
}

function topbar(activeId){
  return `
  <header class="topbar">
    <div class="brand" onclick="navigate('')">${CONFIG.name}<span>${CONFIG.title}</span></div>
    <nav>
      ${SECTIONS.map(s => `<a href="#/section/${s.id}" class="${activeId===s.id?'active':''}">${s.title}</a>`).join("")}
    </nav>
  </header>`;
}

function viewHome(){
  const photo = CONFIG.photo
    ? `<img src="${CONFIG.photo}" alt="${CONFIG.name}">`
    : initials(CONFIG.name);

  return `
  ${topbar("")}
  <main>
    <section class="hero">
      <div class="eyebrow">Portfolio</div>
      <div class="hero-photo">${photo}</div>
      <h1>${CONFIG.name}</h1>
      <div class="role">${CONFIG.title}</div>

      <div class="contact-row">
        <a class="contact-pill" href="${CONFIG.github}" target="_blank" rel="noopener">${ICONS.code}GitHub</a>
      </div>

      <div class="connector"></div>
    </section>

    <div class="rail-wrap">
      <div class="rail"></div>
      <div class="pillars">
        ${SECTIONS.map(s => {
          const count = projectsOf(s.id).length;
          return `
          <div class="pillar" data-id="${s.id}" onclick="navigate('/section/${s.id}')">
            <div class="pillar-cover">
              ${s.cover ? `<img src="${s.cover}" alt="${s.title}">` : ``}
              <div class="idx">${s.idx}</div>
              <div class="pillar-stat">
                <div class="num">${pad2(count)}</div>
                <div class="label">Project${count===1?"":"s"}</div>
              </div>
            </div>
            <div class="pillar-body">
              <h3>${s.title}</h3>
              <p>${s.desc}</p>
            </div>
          </div>
        `;}).join("")}
      </div>
    </div>
  </main>
  ${footer()}
  `;
}

function viewSection(sectionId){
  const s = sectionOf(sectionId);
  if(!s) return viewNotFound();
  const accent = accentOf(sectionId);
  const list = projectsOf(sectionId);

  return `
  ${topbar(sectionId)}
  <main style="--accent:${accent}">
    <div class="page-header">
      <a class="back-link" href="#/" onclick="event.preventDefault(); navigate('')">${ICONS.back} Home</a>
      <div class="head-row">
        <div>
          <div class="idx">${s.idx}</div>
          <h2>${s.title}</h2>
          <p>${s.desc}</p>
        </div>
        <div class="total-stat">
          <div class="num">${pad2(list.length)}</div>
          <div class="label">Total project${list.length===1?"":"s"}</div>
        </div>
      </div>
    </div>

    <div class="project-grid">
      ${list.map(p => `
        <div class="project-card" onclick="navigate('/project/${p.id}')">
          <div class="cover">
            ${p.cover ? `<img src="${p.cover}" alt="${p.title}">` : `<span>${p.tag}</span>`}
          </div>
          <div class="card-body">
            <div class="tag">${p.tag}</div>
            <h4>${p.title}</h4>
          </div>
        </div>
      `).join("")}
    </div>
  </main>
  ${footer()}
  `;
}

function viewProject(projectId){
  const p = projectById(projectId);
  if(!p) return viewNotFound();
  const s = sectionOf(p.section);
  const accent = accentOf(p.section);
  const shots = p.images && p.images.length ? p.images : [1,2,3];

  sliderIndex = 0;
  sliderTotal = shots.length;

  return `
  ${topbar(p.section)}
  <main style="--accent:${accent}">
    <div class="project-hero">
      <a class="back-link" href="#/" onclick="event.preventDefault(); navigate('/section/${p.section}')">${ICONS.back} ${s.title}</a>
      <div class="tag">${p.tag}</div>
      <h2>${p.title}</h2>
      <p class="desc">${p.desc}</p>
      ${p.link ? `<a class="project-link" href="${p.link}" target="_blank" rel="noopener">View project ${ICONS.arrow}</a>` : ``}
    </div>

    <div class="slider">
      <div class="slider-track" id="slider-track">
        ${shots.map((img, i) => `
          <div class="slide">
            ${ (p.images && p.images.length) ? `<img src="${img}" alt="${p.title} screenshot ${i+1}">` : `<span>Image ${i+1}</span>` }
          </div>
        `).join("")}
      </div>
      ${shots.length > 1 ? `
      <button class="slider-btn prev" onclick="slideMove(-1)">${ICONS.back}</button>
      <button class="slider-btn next" onclick="slideMove(1)">${ICONS.arrow}</button>
      <div class="slider-dots">
        ${shots.map((_, i) => `<span class="dot${i===0?" active":""}" onclick="slideGo(${i})"></span>`).join("")}
      </div>` : ``}
    </div>
  </main>
  ${footer()}
  `;
}
function viewNotFound(){
  return `
  ${topbar("")}
  <main>
    <div class="page-header">
      <h2>Not found</h2>
      <p>That page doesn't exist.</p>
      <a class="back-link" style="margin-top:20px;" href="#/" onclick="event.preventDefault(); navigate('')">${ICONS.back} Home</a>
    </div>
  </main>
  ${footer()}
  `;
}

function footer(){
  return `
  <footer>
    <div class="footer-contacts">
      <a class="contact-pill" href="mailto:${CONFIG.email}">${ICONS.mail}${CONFIG.email}</a>
      <a class="contact-pill" href="${CONFIG.linkedin}" target="_blank" rel="noopener">${ICONS.link}LinkedIn</a>
      <a class="contact-pill" href="tel:${CONFIG.phone}">${ICONS.phone}${CONFIG.phone}</a>
    </div>
    <div class="footer-note">All Rights reserved © ${new Date().getFullYear()} ${CONFIG.name} </div>
  </footer>`;
}

/* ============================================================
   Router
   ============================================================ */
function navigate(path){
  location.hash = "#" + path;
}

function render(){
  const hash = location.hash.replace(/^#\/?/, "");
  const parts = hash.split("/").filter(Boolean);
  const app = document.getElementById("app");

  if(parts.length === 0){
    app.innerHTML = viewHome();
  } else if(parts[0] === "section" && parts[1]){
    app.innerHTML = viewSection(parts[1]);
  } else if(parts[0] === "project" && parts[1]){
    app.innerHTML = viewProject(parts[1]);
  } else {
    app.innerHTML = viewNotFound();
  }
  window.scrollTo(0,0);
}

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", render);

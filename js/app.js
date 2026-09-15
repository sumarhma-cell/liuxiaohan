const PORTRAIT = asset("关于/portrait.jpg");
const EMAIL = "917422163@qq.com";

const catLabel = (id) => CATEGORIES.find((c) => c.id === id)?.label ?? id;

function parseRoute() {
  const raw = (location.hash.replace(/^#/, "") || "/").replace(/^\//, "");
  const [page = "", a = ""] = raw.split("/");
  if (!page) return { name: "home" };
  if (page === "about") return { name: "about" };
  if (page === "contact") return { name: "contact" };
  if (page === "work") {
    const project = PROJECTS.find((p) => p.id === a);
    if (project) return { name: "project", id: a };
    return { name: "work", cat: a || "all" };
  }
  return { name: "home" };
}

function header(active) {
  const items = [
    ["#/about", "关于我", active === "about" || active === "home"],
    ["#/work", "作品", active === "work" || active === "project"],
    ["#/work/brand", "品牌设计", active === "brand"],
    ["#/work/illustration", "插画设计", active === "illustration"],
    ["#/work/visual", "视觉设计", active === "visual"],
    ["#/work/ip", "IP设计", active === "ip"],
  ];
  return `
    <header class="site-header">
      <div class="brand-bar">
        <a class="logo" href="#/">刘筱寒</a>
      </div>
      <nav class="main-nav">
        ${items
          .map(
            ([href, label, on]) =>
              `<a href="${href}" class="${on ? "is-active" : ""}">${label}</a>`
          )
          .join("")}
      </nav>
    </header>
  `;
}

function footer() {
  return `
    <section class="cta-band reveal">
      <span class="blob blob-cta" aria-hidden="true"></span>
      <h2>开放合作</h2>
      <svg class="scribble" viewBox="0 0 160 18" aria-hidden="true">
        <path d="M2 10 C28 2, 52 16, 80 9 S132 3, 158 11" fill="none" stroke="#3d2a16" stroke-width="1.4" stroke-linecap="round"/>
      </svg>
      <p>品牌升级、活动视觉、插画与 IP，都可以从一封邮件开始。</p>
      <a class="pill dark magnetic" href="https://wx.mail.qq.com/?cancel_login=true&from=upexpected_login_redirect" target="_blank" rel="noopener noreferrer">联系合作</a>
      <p class="cta-mail">${EMAIL}</p>
    </section>
    <footer class="site-footer">
      <div class="footer-grid">
        <div>
          <h4>刘筱寒</h4>
          <p>品牌设计 · 插画设计 · 视觉设计 · IP设计<br />Personal Portfolio 2026</p>
        </div>
        <div>
          <h4>浏览</h4>
          <p>
            <a href="#/about">关于</a><br />
            <a href="#/work">作品</a><br />
            <a href="#/contact">联系</a>
          </p>
        </div>
        <div>
          <h4>合作</h4>
          <p><a href="mailto:${EMAIL}">${EMAIL}</a></p>
        </div>
      </div>
      <p class="copyright">© ${new Date().getFullYear()} 刘筱寒</p>
    </footer>
  `;
}

function card(p) {
  return `
    <a class="work-card reveal" href="#/work/${p.id}">
      <span class="work-card-frame">
        <img src="${asset(p.cover)}" alt="${p.title}" />
      </span>
      <div class="meta">
        <h3>${p.title}</h3>
        <span>${catLabel(p.category)}</span>
      </div>
    </a>
  `;
}

function valuesSection() {
  return `
    <p class="kicker values-kicker reveal">What I’m into</p>
    <section class="values">
      <article class="value reveal">
        <h3>Authentic aesthetics</h3>
        <p>用手绘细节和可延展的系统，做出一眼能认出来、也能长期用下去的品牌语言。</p>
      </article>
      <article class="value reveal">
        <h3>Cultivating creativity</h3>
        <p>品牌、活动主视觉、插画和 IP 一起做，换媒介、换场景，把同一套气质铺开。</p>
      </article>
      <article class="value reveal">
        <h3>Good-vibes process</h3>
        <p>先把规范和风格定清楚，再对齐落地文件，让线上线下物料不用反复猜。</p>
      </article>
      <article class="value reveal">
        <h3>An all-out delivery</h3>
        <p>不只给一张主视觉。标识、物料、插画、界面和延展，尽量一次交付完整。</p>
      </article>
    </section>
  `;
}

function home() {
  return `
    ${header("home")}
    <section class="split-hero">
      <div class="panel bg-dusty">
        <svg class="doodle doodle-petal" viewBox="0 0 32 32" aria-hidden="true">
          <g fill="#f3d0d8">
            <ellipse cx="16" cy="9" rx="5" ry="7"/>
            <ellipse cx="16" cy="9" rx="5" ry="7" transform="rotate(72 16 16)"/>
            <ellipse cx="16" cy="9" rx="5" ry="7" transform="rotate(144 16 16)"/>
            <ellipse cx="16" cy="9" rx="5" ry="7" transform="rotate(216 16 16)"/>
            <ellipse cx="16" cy="9" rx="5" ry="7" transform="rotate(288 16 16)"/>
          </g>
          <circle cx="16" cy="16" r="3.4" fill="#f6e7c8"/>
        </svg>
        <div class="hero-copy">
          <p class="hero-kicker">Brand · Illustration · Visual · IP</p>
          <h1>做出让人记住的设计<br />而不是被遗忘的画面</h1>
          <a class="pill magnetic" href="#/work">查看作品</a>
        </div>
      </div>
      <div class="hero-photo"><img src="${PORTRAIT}" alt="刘筱寒" /></div>
    </section>
    ${aboutBody()}
    ${valuesSection()}
    <div class="marquee-stack" aria-hidden="true">
      <div class="marquee">
        <div class="marquee-track">
          <span>品牌 · 插画 · 视觉 · IP · 品牌 · 插画 · 视觉 · IP · </span>
          <span>品牌 · 插画 · 视觉 · IP · 品牌 · 插画 · 视觉 · IP · </span>
        </div>
      </div>
      <div class="marquee marquee-alt">
        <div class="marquee-track reverse">
          <span>BRAND · ILLUSTRATION · VISUAL · IP · BRAND · ILLUSTRATION · VISUAL · IP · </span>
          <span>BRAND · ILLUSTRATION · VISUAL · IP · BRAND · ILLUSTRATION · VISUAL · IP · </span>
        </div>
      </div>
    </div>
    ${footer()}
  `;
}

function aboutBody() {
  return `
    <div class="down-cue" aria-hidden="true">
      <span class="down-cue-dot"></span>
      <svg viewBox="0 0 24 64">
        <path class="down-stem" d="M12 4 v40" fill="none" stroke="#4a2c24" stroke-width="1.4" stroke-linecap="round"/>
        <path class="down-head" d="M5 36 L12 48 L19 36" fill="none" stroke="#4a2c24" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="about-wrap reveal">
      <p class="hello">Hello</p>
      <h2>关于我</h2>
      <p class="bio">你好，我是刘筱寒。专注品牌设计、插画、视觉系统与 IP 角色塑造。习惯从东方语境与社群温度出发，把概念落到可执行、可延展的视觉语言。</p>
      <p class="bio">书法可以成为标志，节气可以成为品牌时序，火烈鸟可以成为连接者。设计要好看，更要能被记住、被使用、被延续。</p>
    </div>
    <div class="resume">
      <h3 class="reveal">教育经历</h3>
      <div class="job reveal">
        <div>
          <h4>上海视觉艺术学院<span class="role">数字媒体艺术专业 · 2013–2017</span></h4>
        </div>
      </div>
      <h3 class="reveal">工作经历</h3>
      <div class="job reveal">
        <div>
          <h4>首程资本参加学院<span class="role">品牌设计 · 2022–2026</span></h4>
        </div>
        <ul>
          <li>品牌视觉：课程主视觉、LOGO、VIS 规范系统、IP 形象设计与延展应用</li>
          <li>平面物料：活动 / 课程海报、周边礼品文创、节气主题插画</li>
          <li>UI 界面：小程序界面、官方网站页面设计</li>
          <li>动态物料：短视频视觉，配合课程宣传产出动态素材</li>
          <li>落地支持：把控风格统一，输出可落地文件，保障线上线下物料一致</li>
        </ul>
      </div>
      <div class="job reveal">
        <div>
          <h4>上海淡远艺术设计有限公司<span class="role">平面设计 · 2018–2022</span></h4>
        </div>
        <ul>
          <li>公司品牌设计与 logo 创意</li>
          <li>海报等日常宣发设计</li>
          <li>公众号排版以及维护</li>
          <li>公司礼品设计</li>
        </ul>
      </div>
      <div class="meta-grid reveal">
        <div>
          <h3>证书</h3>
          <p>英语四级证书 · 计算机二级证书 · 普通话二级甲等证书</p>
        </div>
        <div>
          <h3>工具</h3>
          <p>Illustrator · Photoshop · Premiere</p>
        </div>
      </div>
    </div>
  `;
}

function work(cat) {
  const list = PROJECTS.filter((p) => cat === "all" || p.category === cat);
  const filters = [{ id: "all", label: "全部" }, ...CATEGORIES];
  const heroes = {
    all: {
      left: "bg-rose",
      right: "bg-dusty",
      lede: "品牌、视觉、插画与 IP。点击封面进入完整项目。",
      line: "不求花哨。<br />只做能落地的系统。",
    },
    brand: {
      left: "bg-sand",
      right: "bg-rose",
      lede: "标识、物料、规范。把气质做成能长期用的系统。",
      line: "先把调性定准。<br />再铺开一整套品牌。",
    },
    illustration: {
      left: "bg-sage",
      right: "bg-dusty",
      lede: "角色、节气与贴纸。让插画能传播、也能延展。",
      line: "画面要有温度。<br />也要一眼能认出来。",
    },
    visual: {
      left: "bg-dusty",
      right: "bg-sand",
      lede: "论坛、课程与现场。主视觉到物料一次对齐。",
      line: "一场活动一张脸。<br />线上线下同一套。",
    },
    ip: {
      left: "bg-rose",
      right: "bg-sage",
      lede: "形象、性格与周边延展。让 IP 能被记住、被使用。",
      line: "加加来了。<br />什么都加。",
    },
  };
  const hero = heroes[cat] || heroes.all;
  const title = cat === "all" ? "作品" : catLabel(cat);
  return `
    ${header(cat === "all" ? "work" : cat)}
    <section class="split-hero split-hero--short">
      <div class="panel ${hero.left}">
        <span class="blob blob-work" aria-hidden="true"></span>
        <div class="hero-copy">
          <h1>${title}</h1>
          <p class="lede">${hero.lede}</p>
        </div>
      </div>
      <div class="panel ${hero.right}">
        <div class="hero-copy">
          <h1>${hero.line}</h1>
        </div>
      </div>
    </section>
    <div class="filter-bar">
      ${filters
        .map(
          (f) =>
            `<a href="#/work${f.id === "all" ? "" : "/" + f.id}" class="magnetic ${
              (cat === "all" && f.id === "all") || cat === f.id ? "is-active" : ""
            }">${f.label}</a>`
        )
        .join("")}
    </div>
    <div class="work-grid">${list.map(card).join("")}</div>
    ${footer()}
  `;
}

function project(id) {
  const p = PROJECTS.find((x) => x.id === id);
  if (!p) return work("all");
  const i = PROJECTS.findIndex((x) => x.id === id);
  const prev = PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(i + 1) % PROJECTS.length];
  const gallery = p.images
    .map(
      (src) =>
        `<button class="gallery-item reveal" data-src="${asset(src)}" type="button">
          <img src="${asset(src)}" alt="${p.title}" />
        </button>`
    )
    .join("");
  const pdf = p.pdf
    ? `<embed src="${asset(p.pdf)}" type="application/pdf" />`
    : "";
  return `
    ${header("project")}
    <div class="project-head reveal">
      <p class="cat">${catLabel(p.category)}</p>
      <h1>${p.title}</h1>
      <p>${p.summary}</p>
    </div>
    <div class="gallery">${gallery}${pdf}</div>
    <div class="pager">
      <a href="#/work/${prev.id}">← ${prev.title}</a>
      <a href="#/work/${next.id}">${next.title} →</a>
    </div>
    ${footer()}
  `;
}

function about() {
  return `
    ${header("about")}
    <section class="split-hero">
      <div class="panel bg-dusty">
        <span class="blob blob-hero" aria-hidden="true"></span>
        <svg class="doodle doodle-petal" viewBox="0 0 32 32" aria-hidden="true">
          <g fill="#f3d0d8">
            <ellipse cx="16" cy="9" rx="5" ry="7"/>
            <ellipse cx="16" cy="9" rx="5" ry="7" transform="rotate(72 16 16)"/>
            <ellipse cx="16" cy="9" rx="5" ry="7" transform="rotate(144 16 16)"/>
            <ellipse cx="16" cy="9" rx="5" ry="7" transform="rotate(216 16 16)"/>
            <ellipse cx="16" cy="9" rx="5" ry="7" transform="rotate(288 16 16)"/>
          </g>
          <circle cx="16" cy="16" r="3.4" fill="#f6e7c8"/>
        </svg>
        <div class="hero-copy">
          <p class="hero-kicker">Brand · Illustration · Visual · IP</p>
          <h1>做出让人记住的设计<br />而不是被遗忘的画面</h1>
          <a class="pill magnetic" href="#/work">查看作品</a>
        </div>
      </div>
      <div class="hero-photo hero-photo--about"><img src="${PORTRAIT}" alt="刘筱寒" /></div>
    </section>
    ${aboutBody()}
    ${valuesSection()}
    <div class="marquee-stack" aria-hidden="true">
      <div class="marquee">
        <div class="marquee-track">
          <span>品牌 · 插画 · 视觉 · IP · 品牌 · 插画 · 视觉 · IP · </span>
          <span>品牌 · 插画 · 视觉 · IP · 品牌 · 插画 · 视觉 · IP · </span>
        </div>
      </div>
      <div class="marquee marquee-alt">
        <div class="marquee-track reverse">
          <span>BRAND · ILLUSTRATION · VISUAL · IP · BRAND · ILLUSTRATION · VISUAL · IP · </span>
          <span>BRAND · ILLUSTRATION · VISUAL · IP · BRAND · ILLUSTRATION · VISUAL · IP · </span>
        </div>
      </div>
    </div>
    ${footer()}
  `;
}

function contact() {
  return `
    ${header("contact")}
    <section class="contact-hero">
      <span class="blob blob-hero" aria-hidden="true"></span>
      <svg class="doodle doodle-petal doodle-contact" viewBox="0 0 32 32" aria-hidden="true">
        <g fill="#f3d0d8">
          <ellipse cx="16" cy="9" rx="5" ry="7"/>
          <ellipse cx="16" cy="9" rx="5" ry="7" transform="rotate(72 16 16)"/>
          <ellipse cx="16" cy="9" rx="5" ry="7" transform="rotate(144 16 16)"/>
          <ellipse cx="16" cy="9" rx="5" ry="7" transform="rotate(216 16 16)"/>
          <ellipse cx="16" cy="9" rx="5" ry="7" transform="rotate(288 16 16)"/>
        </g>
        <circle cx="16" cy="16" r="3.4" fill="#f6e7c8"/>
      </svg>
      <div class="hero-copy">
        <h1>Call me,<br />write me.</h1>
        <a class="mail" href="mailto:${EMAIL}">${EMAIL}</a>
        <div><a class="pill magnetic" href="#/work">先看作品</a></div>
      </div>
    </section>
    ${footer()}
  `;
}

function bindReveals() {
  const nodes = document.querySelectorAll(".reveal");
  if (!nodes.length) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    nodes.forEach((el) => el.classList.add("is-in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  nodes.forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i * 0.07, 0.42)}s`;
    io.observe(el);
  });
}

function bindCardSpotlights() {
  document.querySelectorAll(".work-card").forEach((card) => {
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    });
  });
}

function initScrollLine() {
  const line = document.getElementById("scrollLine");
  if (!line) return;
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const t = max > 0 ? window.scrollY / max : 0;
    line.style.transform = `scaleX(${Math.min(Math.max(t, 0), 1)})`;
  };
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("hashchange", () => requestAnimationFrame(update));
  update();
}

function bindMagnetic() {
  if (window.matchMedia("(pointer: coarse)").matches) return;
  document.querySelectorAll(".magnetic").forEach((el) => {
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.28;
      const y = (e.clientY - r.top - r.height / 2) * 0.28;
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
    el.addEventListener("pointerleave", () => {
      el.style.transform = "";
    });
  });
}

function bindLightbox() {
  document.querySelectorAll(".gallery-item").forEach((btn) => {
    btn.addEventListener("click", () => {
      const src = btn.getAttribute("data-src");
      const overlay = document.createElement("div");
      overlay.className = "lightbox";
      overlay.innerHTML = `<img src="${src}" alt="" />`;
      overlay.addEventListener("click", () => overlay.remove());
      document.body.appendChild(overlay);
    });
  });
}

function render() {
  const r = parseRoute();
  let html = "";
  if (r.name === "about") html = about();
  else if (r.name === "contact") html = contact();
  else if (r.name === "project") html = project(r.id);
  else if (r.name === "work") html = work(r.cat);
  else html = home();
  const app = document.getElementById("app");
  app.innerHTML = html;
  window.scrollTo(0, 0);
  bindReveals();
  bindCardSpotlights();
  bindMagnetic();
  bindLightbox();
}

function initCursorFlower() {
  const flower = document.getElementById("cursorFlower");
  if (!flower) return;
  const fine = window.matchMedia("(pointer: fine)").matches;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!fine || reduce) {
    flower.style.display = "none";
    return;
  }
  document.body.classList.add("has-flower");
  let x = window.innerWidth / 2;
  let y = window.innerHeight * 0.28;
  let tx = x;
  let ty = y;
  let rot = 0;
  let pressed = 1;
  let sparkAt = 0;
  window.addEventListener(
    "pointermove",
    (e) => {
      tx = e.clientX;
      ty = e.clientY;
      flower.classList.add("is-on");
      const now = performance.now();
      if (now - sparkAt > 42) {
        sparkAt = now;
        const spark = document.createElement("span");
        spark.className = "cursor-spark";
        spark.style.left = `${e.clientX}px`;
        spark.style.top = `${e.clientY}px`;
        document.body.appendChild(spark);
        window.setTimeout(() => spark.remove(), 700);
      }
    },
    { passive: true }
  );
  window.addEventListener("pointerdown", () => {
    pressed = 0.86;
  });
  window.addEventListener("pointerup", () => {
    pressed = 1;
  });
  window.addEventListener("pointerleave", () => flower.classList.remove("is-on"));
  const tick = () => {
    x += (tx - x) * 0.28;
    y += (ty - y) * 0.28;
    rot += 1.8;
    flower.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) rotate(${rot}deg) scale(${pressed})`;
    requestAnimationFrame(tick);
  };
  tick();
}

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", () => {
  initCursorFlower();
  initScrollLine();
  render();
});

/**
 * Retro Portfolio 90s — Application Logic
 * Content extracted from cursor-portfolio repository
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Sumit Gupta",
    role: "Full Stack Developer",
    tagline: "Full Stack Developer & Problem Solver",
    email: "sumitgupta19900@gmail.com",
    phone: "+91 7905342319",
    location: "Noida, India",
    github: "https://github.com/Imposter009",
    linkedin: "https://www.linkedin.com/in/sumit-gupta-dev/",
    resume: "../cursor-portfolio/assets/My Resume.pdf",
    summary:
      "Experienced Full Stack Developer with 2+ years of expertise in the Java/Spring ecosystem. I focus on engineering scalable backend systems and robust SQL databases. By prioritizing clean code and architectural efficiency, I have successfully enhanced system throughput and stability by 20% across core applications.",
    typingPhrases: [
      "Building Scalable Backend Solutions",
      "Optimizing Enterprise Applications",
      "Engineering High-Performance APIs",
      "Crafting Seamless Full-Stack Experiences",
    ],
    stats: [
      { value: "2+", label: "Years Experience" },
      { value: "10+", label: "Projects" },
      { value: "5+", label: "Technologies" },
    ],
    highlights: [
      { title: "Backend Development", text: "Expertise in Java, Spring Boot, and database optimization" },
      { title: "Frontend Development", text: "Skilled in Angular and modern web technologies" },
      { title: "Database Management", text: "Proficient in SQL and MongoDB database systems" },
    ],
  },

  experience: [
    {
      id: "intellect",
      period: "2024 - Present",
      title: "Associate Consultant",
      company: "Intellect Design Arena",
      achievements: [
        "Improved database performance and API responsiveness by 20%",
        "Reduced incident recurrence by 25%",
        "Improved team efficiency by 30% through API documentation",
      ],
      responsibilities: [
        "Developed and maintained iCPX/iGPX procurement solution",
        "Designed robust backend systems using SQL and Spring Boot",
        "Developed frontend features using Angular",
        "Diagnosed and resolved critical system issues",
        "Maintained 95% code coverage in unit testing",
      ],
      tech: ["Java", "Spring Boot", "Angular", "SQL", "Git", "Swagger", "Jira", "ELK", "CI/CD", "JasperReports", "Kafka"],
    },
    {
      id: "esyatech",
      period: "May 2023 - June 2023",
      title: "Web Development Intern",
      company: "Esyatech Solutions Pvt. Ltd",
      achievements: ["Reduced user training time by 20% through UI improvements"],
      responsibilities: [
        "Enhanced user experience of Zixana ERP React application",
        "Designed intuitive interfaces and streamlined workflows",
      ],
      tech: ["React", "JavaScript", "HTML", "CSS"],
      certLink: "https://drive.google.com/file/d/1gQAUBdNLOjxE1cA1QqdzX3w4zx_g-Y7t/view?usp=sharing",
    },
  ],

  projects: [
    {
      title: "E-commerce Website",
      description:
        "A fully functional e-commerce platform with end-to-end features. Implemented secure user authentication with JWT and file handling with Multer. Features include product management, user profiles, and shopping cart functionality.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Multer"],
      demo: "https://e-commerce-sooty-mu.vercel.app/",
      github: "https://github.com/Imposter009/e-commerce",
      thumbLabel: "[IMG: E-COMMERCE.GIF]",
    },
    {
      title: "Modern Portfolio Website (Cursor.AI)",
      description:
        "A professional portfolio website built entirely using Cursor.AI. Features include dark/light theme, smooth animations, responsive design, and modern UI components.",
      tech: ["HTML5", "CSS3", "JavaScript", "Cursor.AI"],
      demo: "https://cursor-portfolio-theta.vercel.app/",
      github: "https://github.com/Imposter009/cursor-portfolio",
      thumbLabel: "[IMG: PORTFOLIO.BMP]",
    },
    {
      title: "Nandini Chikan E-commerce",
      description:
        "A full-featured e-commerce website for Nandini Chikan, showcasing traditional Chikankari products with product categorization and responsive design.",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      demo: "https://imposter009.github.io/Nandini_Chikan",
      github: "https://github.com/Imposter009/Nandini_Chikan",
      thumbLabel: "[IMG: CHIKAN.JPG]",
    },
  ],

  skills: {
    "C:\\Program Files\\Languages": ["C/C++", "Java", "JavaScript", "TypeScript", "HTML5", "CSS3"],
    "C:\\Program Files\\Frontend": ["Angular", "React.js", "Tailwind CSS", "Redux"],
    "C:\\Program Files\\Backend": ["Spring Boot", "Node.js", "Express.js", "PostgreSQL", "MongoDB"],
    "C:\\Windows\\System32\\Drivers": [
      "Git", "VS Code", "MySQL", "Eclipse", "Cursor.AI", "Swagger",
      "ELK Stack", "REST APIs", "Microservices", "Jira", "JasperReports", "Kafka",
    ],
  },

  education: [
    { year: "2024", period: "2020 - 2024", degree: "Bachelor of Technology", school: "Amity University", location: "Lucknow, UP", score: "CGPA 8.35/10" },
    { year: "2019", period: "2018 - 2019", degree: "Class 12th (Science)", school: "City Montessori School", location: "Lucknow, UP", score: "91.25%" },
    { year: "2017", period: "2016 - 2017", degree: "Class 10th", school: "City Montessori School", location: "Lucknow, UP", score: "89.50%" },
  ],

  certifications: [
    { title: "SPOT Award", issuer: "Intellect Design Arena", date: "March 2026", type: "Award" },
    { title: '"You Did It" Award', issuer: "Intellect Design Arena", date: "March 2025", type: "Award" },
    { title: '"You Did It" Award', issuer: "Intellect Design Arena", date: "November 2024", type: "Award" },
    { title: "Research Publication", issuer: "Asian Journal of Research in Computer Science", date: "April 2024", type: "Publication" },
    { title: "MongoDB Node.js Developer Path", issuer: "MongoDB", date: "May 2024", type: "Certification" },
    { title: "MERN Stack - The Complete Guide", issuer: "Infosys", date: "December 2023", type: "Certification" },
  ],
};

const WINDOWS = [
  { id: "system-props", icon: "🖥️", label: "System Properties", title: "System Properties — Sumit Gupta", width: 480, height: 380, x: 120, y: 60 },
  { id: "my-computer", icon: "💻", label: "My Computer", title: "My Computer — C:\\DOS", width: 520, height: 420, x: 80, y: 80 },
  { id: "network", icon: "🌐", label: "Network Neighborhood", title: "Network Neighborhood — Corporate Intranet", width: 560, height: 440, x: 160, y: 100 },
  { id: "browser", icon: "🌍", label: "Internet Explorer", title: "Internet Explorer — Projects Gallery", width: 580, height: 480, x: 200, y: 60 },
  { id: "inbox", icon: "📧", label: "Inbox (Outlook)", title: "Outlook Express — New Message", width: 440, height: 400, x: 240, y: 120 },
  { id: "education", icon: "🎓", label: "Education", title: "Control Panel — Education Settings", width: 460, height: 360, x: 300, y: 80 },
  { id: "paint", icon: "🎨", label: "Paint", title: "untitled — Paint", width: 500, height: 420, x: 140, y: 90 },
];

/* ==========================================================================
   Sound Engine (Web Audio API beeps)
   ========================================================================== */

class SoundEngine {
  constructor() {
    this.enabled = true;
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  beep(freq = 880, duration = 0.06, type = "square", volume = 0.08) {
    if (!this.enabled) return;
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.value = volume;
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
    osc.stop(this.ctx.currentTime + duration);
  }

  click() { this.beep(600, 0.04); }
  open() { this.beep(440, 0.05); this.beep(660, 0.05); }
  close() { this.beep(330, 0.06); }
  minimize() { this.beep(520, 0.04); this.beep(380, 0.04); }
  error() { this.beep(200, 0.12, "sawtooth"); }
  startup() { [262, 330, 392, 523].forEach((f, i) => setTimeout(() => this.beep(f, 0.15, "square", 0.06), i * 120)); }

  crunch() {
    if (!this.enabled) return;
    this.init();
    const bursts = [60, 90, 70, 110, 55, 85, 45, 100, 65, 95];
    bursts.forEach((freq, i) => {
      setTimeout(() => this.beep(freq, 0.07, "sawtooth", 0.14), i * 35);
    });
    const bufferSize = this.ctx.sampleRate * 0.15;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    const gain = this.ctx.createGain();
    gain.gain.value = 0.08;
    noise.connect(gain);
    gain.connect(this.ctx.destination);
    noise.start();
  }
}

/* ==========================================================================
   Winamp Synth Player
   ========================================================================== */

class WinampPlayer {
  constructor(sound) {
    this.sound = sound;
    this.playing = false;
    this.trackIndex = 0;
    this.tracks = [
      "01. MODEM_DIALUP.WAV",
      "02. SYNTHWAVE_95.MID",
      "03. KAFKA_PIPELINE.MOD",
      "04. GEOCITIES_DREAM.WAV",
    ];
    this.interval = null;
    this.oscillators = [];
    this.notes = [220, 277, 330, 392, 440, 330, 277, 220];
    this.noteIndex = 0;

    this.visEl = document.getElementById("winamp-vis");
    this.trackEl = document.getElementById("winamp-track");
    this.playBtn = document.getElementById("winamp-play");
    this.stopBtn = document.getElementById("winamp-stop");
    this.prevBtn = document.getElementById("winamp-prev");
    this.nextBtn = document.getElementById("winamp-next");
    this.volumeEl = document.getElementById("winamp-volume");

    this.buildVisualizer();
    this.bindEvents();
    this.updateTrackDisplay();
  }

  buildVisualizer() {
    this.visEl.innerHTML = "";
    for (let i = 0; i < 16; i++) {
      const bar = document.createElement("span");
      bar.style.height = "2px";
      this.visEl.appendChild(bar);
    }
  }

  bindEvents() {
    this.playBtn.addEventListener("click", () => (this.playing ? this.pause() : this.play()));
    this.stopBtn.addEventListener("click", () => this.stop());
    this.prevBtn.addEventListener("click", () => this.prevTrack());
    this.nextBtn.addEventListener("click", () => this.nextTrack());
  }

  updateTrackDisplay() {
    this.trackEl.textContent = this.tracks[this.trackIndex];
  }

  play() {
    this.sound.init();
    this.playing = true;
    this.playBtn.classList.add("active");
    this.playBtn.textContent = "❚❚";

    this.interval = setInterval(() => {
      const freq = this.notes[this.noteIndex % this.notes.length];
      const vol = (this.volumeEl.value / 100) * 0.06;
      this.sound.beep(freq, 0.18, "triangle", vol);
      this.animateVis();
      this.noteIndex++;
    }, 280);
  }

  pause() {
    this.playing = false;
    this.playBtn.classList.remove("active");
    this.playBtn.textContent = "▶";
    clearInterval(this.interval);
  }

  stop() {
    this.pause();
    this.noteIndex = 0;
    this.buildVisualizer();
    this.sound.beep(300, 0.05);
  }

  prevTrack() {
    this.trackIndex = (this.trackIndex - 1 + this.tracks.length) % this.tracks.length;
    this.updateTrackDisplay();
    this.sound.click();
  }

  nextTrack() {
    this.trackIndex = (this.trackIndex + 1) % this.tracks.length;
    this.updateTrackDisplay();
    this.sound.click();
  }

  animateVis() {
    const bars = this.visEl.querySelectorAll("span");
    bars.forEach((bar) => {
      bar.style.height = `${Math.random() * 22 + 2}px`;
    });
  }
}

/* ==========================================================================
   Window Manager
   ========================================================================== */

class WindowManager {
  constructor(sound) {
    this.sound = sound;
    this.layer = document.getElementById("window-layer");
    this.taskbarWindows = document.getElementById("taskbar-windows");
    this.windows = new Map();
    this.zIndex = 100;
    this.activeId = null;
    this.dragState = null;
  }

  create(def, contentHtml) {
    if (this.windows.has(def.id)) {
      this.focus(def.id);
      const w = this.windows.get(def.id);
      if (w.el.classList.contains("minimized")) {
        w.el.classList.remove("minimized");
        this.sound.open();
      }
      return;
    }

    const el = document.createElement("div");
    el.className = "window focused";
    el.dataset.id = def.id;
    el.style.width = `${def.width}px`;
    el.style.height = `${def.height}px`;
    el.style.left = `${def.x}px`;
    el.style.top = `${def.y}px`;
    el.style.zIndex = ++this.zIndex;

    el.innerHTML = `
      <div class="window-titlebar" data-drag-handle>
        <span class="window-title">${def.title}</span>
        <div class="window-controls">
          <button type="button" class="window-btn" data-action="minimize" aria-label="Minimize">_</button>
          <button type="button" class="window-btn" data-action="maximize" aria-label="Maximize">□</button>
          <button type="button" class="window-btn" data-action="close" aria-label="Close">×</button>
        </div>
      </div>
      <div class="window-body">${contentHtml}</div>
    `;

    this.layer.appendChild(el);
    this.bindWindowEvents(el, def);
    this.windows.set(def.id, { el, def, maximized: false, savedRect: null });
    this.focus(def.id);
    this.updateTaskbar();
    this.sound.open();
    this.initWindowContent(def.id, el);
  }

  bindWindowEvents(el, def) {
    el.addEventListener("mousedown", () => this.focus(def.id));

    el.querySelector("[data-drag-handle]").addEventListener("mousedown", (e) => {
      if (e.target.closest(".window-btn")) return;
      const win = this.windows.get(def.id);
      if (win.maximized) return;
      this.focus(def.id);
      const rect = el.getBoundingClientRect();
      const desktopRect = document.getElementById("desktop").getBoundingClientRect();
      this.dragState = {
        id: def.id,
        offsetX: e.clientX - rect.left,
        offsetY: e.clientY - rect.top,
        desktopRect,
      };
      e.preventDefault();
    });

    el.querySelectorAll(".window-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const action = btn.dataset.action;
        if (action === "close") this.close(def.id);
        else if (action === "minimize") this.minimize(def.id);
        else if (action === "maximize") this.toggleMaximize(def.id);
      });
    });
  }

  onMouseMove(e) {
    if (!this.dragState) return;
    const { id, offsetX, offsetY, desktopRect } = this.dragState;
    const win = this.windows.get(id);
    if (!win || win.maximized) return;
    const x = Math.max(0, Math.min(e.clientX - desktopRect.left - offsetX, desktopRect.width - 100));
    const y = Math.max(20, Math.min(e.clientY - desktopRect.top - offsetY, desktopRect.height - 80));
    win.el.style.left = `${x}px`;
    win.el.style.top = `${y}px`;
  }

  onMouseUp() {
    this.dragState = null;
  }

  focus(id) {
    this.activeId = id;
    this.windows.forEach((win, winId) => {
      win.el.classList.toggle("focused", winId === id);
      if (winId === id) win.el.style.zIndex = ++this.zIndex;
    });
    this.updateTaskbar();
    this.sound.click();
  }

  close(id) {
    const win = this.windows.get(id);
    if (!win) return;
    win.el.remove();
    this.windows.delete(id);
    this.updateTaskbar();
    this.sound.close();
  }

  minimize(id) {
    const win = this.windows.get(id);
    if (!win) return;
    win.el.classList.add("minimized");
    this.updateTaskbar();
    this.sound.minimize();
  }

  toggleMaximize(id) {
    const win = this.windows.get(id);
    if (!win) return;
    const el = win.el;

    if (win.maximized) {
      win.maximized = false;
      el.classList.remove("maximized");
      if (win.savedRect) {
        el.style.left = win.savedRect.left;
        el.style.top = win.savedRect.top;
        el.style.width = win.savedRect.width;
        el.style.height = win.savedRect.height;
      }
    } else {
      win.savedRect = {
        left: el.style.left,
        top: el.style.top,
        width: el.style.width,
        height: el.style.height,
      };
      win.maximized = true;
      el.classList.add("maximized");
    }
    this.focus(id);
    this.sound.click();
  }

  restoreFromTaskbar(id) {
    const win = this.windows.get(id);
    if (!win) return;
    win.el.classList.remove("minimized");
    this.focus(id);
    this.sound.open();
  }

  updateTaskbar() {
    this.taskbarWindows.innerHTML = "";
    this.windows.forEach((win, id) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `taskbar-win-btn${id === this.activeId && !win.el.classList.contains("minimized") ? " active" : ""}`;
      btn.textContent = win.def.title.split("—")[0].trim();
      btn.addEventListener("click", () => {
        if (win.el.classList.contains("minimized")) {
          this.restoreFromTaskbar(id);
        } else if (id === this.activeId) {
          this.minimize(id);
        } else {
          this.focus(id);
        }
      });
      this.taskbarWindows.appendChild(btn);
    });
  }

  initWindowContent(id, el) {
    if (id === "my-computer") initMyComputer(el, this.sound);
    if (id === "network") initNetwork(el);
    if (id === "browser") initBrowser(el);
    if (id === "inbox") initInbox(el);
    if (id === "paint") initPaint(el);
    if (id === "my-computer" || id === "system-props") initTabs(el);
  }
}

/* ==========================================================================
   Content Renderers
   ========================================================================== */

function renderSystemProperties() {
  const { profile } = PORTFOLIO_DATA;
  const statsHtml = profile.stats
    .map((s) => `<div class="stat-box"><div class="num">${s.value}</div><div class="lbl">${s.label}</div></div>`)
    .join("");

  return `
    <div class="sys-props-grid">
      <div class="sys-icon-big">SG</div>
      <div>
        <h3 style="font-size:14px;margin-bottom:6px;">${profile.name}</h3>
        <p><strong>Registered Owner:</strong> ${profile.name}</p>
        <p><strong>System Type:</strong> ${profile.role}</p>
        <p><strong>Location:</strong> ${profile.location}</p>
        <p><strong>Email:</strong> <a href="mailto:${profile.email}">${profile.email}</a></p>
        <p><strong>Phone:</strong> ${profile.phone}</p>
      </div>
    </div>
    <div class="stat-grid">${statsHtml}</div>
    <div class="panel-inset">
      <p style="font-family:var(--font-serif);font-size:12px;line-height:1.5;">${profile.summary}</p>
    </div>
    <div class="tag-row">
      <a href="${profile.github}" target="_blank" rel="noopener" class="tag">GitHub.exe</a>
      <a href="${profile.linkedin}" target="_blank" rel="noopener" class="tag">LinkedIn.exe</a>
      <a href="${profile.resume}" target="_blank" rel="noopener" class="tag">Resume.pdf</a>
    </div>
  `;
}

function renderMyComputer() {
  const treeHtml = Object.entries(PORTFOLIO_DATA.skills)
    .map(([folder, items]) => {
      const children = items
        .map((item) => `<div class="tree-exe">${item}.EXE</div>`)
        .join("");
      return `
        <div class="tree-folder closed" data-folder>${folder}</div>
        <div class="tree-children">${children}</div>
      `;
    })
    .join("");

  return `
    <div class="tab-bar">
      <button type="button" class="tab-btn active" data-tab="files">C:\\DOS</button>
      <button type="button" class="tab-btn" data-tab="terminal">MS-DOS Prompt</button>
      <button type="button" class="tab-btn" data-tab="about">README.TXT</button>
    </div>
    <div class="tab-panel active" data-panel="files">
      <p style="margin-bottom:8px;font-weight:bold;">📁 Installed Software & Drivers</p>
      <div class="panel-inset tree-view" id="skill-tree">${treeHtml}</div>
    </div>
    <div class="tab-panel" data-panel="terminal">
      <div class="terminal" id="dos-terminal">
        <div class="terminal-line">Microsoft(R) MS-DOS(R) Version 6.22</div>
        <div class="terminal-line">(C) Copyright Microsoft Corp 1981-1994.</div>
        <div class="terminal-line">&nbsp;</div>
        <div class="terminal-line">C:\\DOS&gt; systeminfo /profile</div>
        <div class="terminal-line">Name: ${PORTFOLIO_DATA.profile.name}</div>
        <div class="terminal-line">Role: ${PORTFOLIO_DATA.profile.role}</div>
        <div class="terminal-line">Throughput Gain: +20%</div>
        <div class="terminal-line">Code Coverage: 95%</div>
        <div class="terminal-line">Kafka Pipelines: ACTIVE</div>
        <div class="terminal-line">TDD Status: ENABLED</div>
        <div class="terminal-line">&nbsp;</div>
        <div class="terminal-input-row">
          <span class="terminal-prompt">C:\\DOS&gt;</span>
          <input type="text" class="terminal-input" id="terminal-input" autocomplete="off" spellcheck="false" aria-label="DOS command input">
        </div>
      </div>
    </div>
    <div class="tab-panel" data-panel="about">
      <div class="panel-inset" style="font-family:var(--font-mono);font-size:11px;">
        <p>========================================</p>
        <p>  SUMIT GUPTA — DEVELOPER README.TXT</p>
        <p>========================================</p>
        <p>&nbsp;</p>
        <p>${PORTFOLIO_DATA.profile.summary}</p>
        <p>&nbsp;</p>
        ${PORTFOLIO_DATA.profile.highlights
          .map((h) => `<p>[${h.title}] ${h.text}</p>`)
          .join("")}
      </div>
    </div>
  `;
}

function renderNetwork() {
  const rows = PORTFOLIO_DATA.experience
    .map(
      (exp, i) => `
      <tr data-exp-index="${i}">
        <td>\\\\CORP\\${exp.company.replace(/\s+/g, "_").toUpperCase()}</td>
        <td>${exp.title}</td>
        <td>${exp.period}</td>
        <td>ONLINE</td>
      </tr>
    `
    )
    .join("");

  return `
    <p style="margin-bottom:8px;">🏢 Enterprise Network Directory — Double-click a server for details</p>
    <table class="intranet-table" id="exp-table">
      <thead>
        <tr><th>Server Name</th><th>Role</th><th>Period</th><th>Status</th></tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
    <div class="exp-detail" id="exp-detail">
      <p style="color:var(--dark);font-style:italic;">Select a network server to view operational logs...</p>
    </div>
  `;
}

function renderBrowser() {
  return `
    <div class="browser-chrome">
      <div class="browser-toolbar">
        <button type="button" class="btn-90s" id="ie-back">◀ Back</button>
        <button type="button" class="btn-90s" id="ie-forward">Forward ▶</button>
        <button type="button" class="btn-90s" id="ie-refresh">⟳ Refresh</button>
        <div class="browser-address">
          <label>Address:</label>
          <input type="text" id="ie-url" value="http://www.sumitgupta.geocities.com/projects.htm" readonly>
        </div>
        <button type="button" class="btn-90s" id="ie-go">Go</button>
      </div>
      <div class="loading-bar-wrap"><div class="loading-bar" id="ie-loading"></div></div>
      <div class="browser-content" id="ie-content"></div>
    </div>
  `;
}

function renderInbox() {
  const { profile } = PORTFOLIO_DATA;
  return `
    <div class="mail-wizard">
      <div class="mail-header">📧 Outlook Express — Internet Connection Wizard</div>
      <div class="panel-outset">
        <p><strong>Your Information:</strong></p>
        <p>Display Name: ${profile.name}</p>
        <p>E-mail: ${profile.email}</p>
        <p>Location: ${profile.location}</p>
      </div>
      <form id="contact-form">
        <div class="field-row"><label>To:</label><input type="text" value="${profile.email}" readonly></div>
        <div class="field-row"><label>From:</label><input type="text" name="name" placeholder="Your Name" required></div>
        <div class="field-row"><label>Reply:</label><input type="email" name="email" placeholder="your@email.com" required></div>
        <div class="field-row"><label>Subject:</label><input type="text" name="subject" value="Message from Geocities Visitor" required></div>
        <div class="field-row" style="align-items:flex-start;"><label>Message:</label><textarea name="message" rows="5" placeholder="Type your message here..." required></textarea></div>
        <div style="display:flex;gap:8px;margin-top:8px;">
          <button type="submit" class="btn-90s">Send</button>
          <button type="reset" class="btn-90s">Clear</button>
        </div>
      </form>
      <div class="mail-status" id="mail-status">Ready to send mail via SMTP (simulated)...</div>
    </div>
  `;
}

function renderEducation() {
  const items = PORTFOLIO_DATA.education
    .map(
      (e) => `
      <div class="panel-outset">
        <strong>${e.degree}</strong> — ${e.school}<br>
        <span style="color:var(--dark);">${e.period} | ${e.location}</span><br>
        Score: <strong>${e.score}</strong>
      </div>
    `
    )
    .join("");

  const certs = PORTFOLIO_DATA.certifications
    .map((c) => `<div class="tree-file">${c.type}: ${c.title} (${c.date}) — ${c.issuer}</div>`)
    .join("");

  return `
    <p style="margin-bottom:8px;font-weight:bold;">🎓 Add/Remove Programs — Education & Certifications</p>
    ${items}
    <div class="panel-inset">
      <strong>Installed Certificates & Awards:</strong>
      <div class="tree-view" style="margin-top:6px;">${certs}</div>
    </div>
  `;
}

function renderPaint() {
  return `
    <div class="paint-toolbar">
      <button type="button" class="btn-90s paint-tool active" data-tool="brush">🖌 Brush</button>
      <button type="button" class="btn-90s paint-tool" data-tool="eraser">⌫ Eraser</button>
      <button type="button" class="btn-90s" id="paint-clear">Clear Canvas</button>
    </div>
    <div class="paint-canvas-wrap">
      <canvas id="paint-canvas" class="paint-canvas" width="460" height="280" aria-label="Paint canvas"></canvas>
    </div>
    <p class="paint-status" id="paint-status">Tool: Brush (black, 2px) — Click and drag to draw</p>
  `;
}

function renderProjectsPage() {
  const projectsHtml = PORTFOLIO_DATA.projects
    .map(
      (p) => `
      <div class="project-frame">
        <h3>${p.title}</h3>
        <div class="project-thumb">${p.thumbLabel}</div>
        <p>${p.description}</p>
        <div class="tag-row">${p.tech.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
        <div class="project-links">
          <a href="${p.demo}" target="_blank" rel="noopener">🌐 Live Demo</a>
          <a href="${p.github}" target="_blank" rel="noopener">📁 GitHub</a>
        </div>
      </div>
    `
    )
    .join("");

  return `
    <center>
      <blink style="color:#ff0000;font-family:var(--font-comic);font-size:18px;">★ WELCOME TO MY PROJECTS PAGE ★</blink>
    </center>
    <p style="text-align:center;font-size:10px;margin:8px 0;">Last updated: June 1996 | Best viewed with Netscape Navigator</p>
    ${projectsHtml}
    <div class="page-counter">
      <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='20'%3E%3Crect fill='%23000' width='80' height='20'/%3E%3Ctext x='4' y='14' fill='%23f00' font-family='monospace' font-size='10'%3EHITS:${String(getHitCount()).padStart(6, "0")}%3C/text%3E%3C/svg%3E" alt="Hit counter" width="80" height="20">
      <br>You are visitor #${String(getHitCount()).padStart(6, "0")} — Thanks for visiting!
    </div>
  `;
}

/* ==========================================================================
   Window Content Initializers
   ========================================================================== */

function initTabs(el) {
  const tabBtns = el.querySelectorAll(".tab-btn");
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tab = btn.dataset.tab;
      tabBtns.forEach((b) => b.classList.toggle("active", b.dataset.tab === tab));
      el.querySelectorAll(".tab-panel").forEach((p) => {
        p.classList.toggle("active", p.dataset.panel === tab);
      });
    });
  });
}

function initMyComputer(el, sound) {
  initTabs(el);

  el.querySelectorAll(".tree-folder").forEach((folder) => {
    folder.addEventListener("click", () => {
      folder.classList.toggle("open");
      folder.classList.toggle("closed");
    });
  });

  const input = el.querySelector("#terminal-input");
  if (input) {
    const terminal = el.querySelector("#dos-terminal");
    const commands = {
      help: "Commands: help, dir, ver, skills, experience, projects, cls, echo, sudo, matrix, format",
      ver: "MS-DOS Version 6.22 — Sumit Gupta Developer Edition",
      dir: "SKILLS.EXE  EXPERIENCE.LOG  PROJECTS.HTM  README.TXT",
      skills: Object.values(PORTFOLIO_DATA.skills).flat().join(", "),
      experience: PORTFOLIO_DATA.experience.map((e) => `${e.title} @ ${e.company}`).join(" | "),
      projects: PORTFOLIO_DATA.projects.map((p) => p.title).join(" | "),
      cls: "__CLS__",
      sudo: "__SUDO__",
      matrix: "__MATRIX__",
    };

    const appendLine = (text, className = "terminal-line") => {
      const inputRow = terminal.querySelector(".terminal-input-row");
      const out = document.createElement("div");
      out.className = className;
      out.textContent = text;
      terminal.insertBefore(out, inputRow);
      terminal.scrollTop = terminal.scrollHeight;
    };

    input.addEventListener("keydown", (e) => {
      if (e.key !== "Enter") return;
      const raw = input.value.trim();
      const cmd = raw.toLowerCase();
      const inputRow = terminal.querySelector(".terminal-input-row");

      const echoLine = document.createElement("div");
      echoLine.className = "terminal-line";
      echoLine.innerHTML = `<span class="terminal-prompt">C:\\DOS&gt;</span> ${input.value}`;
      terminal.insertBefore(echoLine, inputRow);

      if (cmd === "cls") {
        terminal.querySelectorAll(".terminal-line:not(.terminal-input-row)").forEach((l) => l.remove());
      } else if (cmd === "sudo" || cmd.startsWith("sudo ")) {
        appendLine("Access denied. Nice try — this is MS-DOS 6.22, not Linux.");
        appendLine("ERROR: SUDO.EXE not found. Elevated privileges require Windows NT 4.0+");
        sound.error();
      } else if (cmd === "matrix") {
        startMatrixEffect(terminal, sound);
      } else if (cmd === "format c:" || cmd === "format c:/" || cmd.startsWith("format c:")) {
        appendLine("WARNING: All data on non-removable disk drive C: will be lost!");
        appendLine("Proceed with format (Y/N)?");
        setTimeout(() => triggerBSOD(sound), 1200);
      } else if (commands[cmd.split(" ")[0]]) {
        const key = cmd.split(" ")[0];
        if (key !== "cls") appendLine(commands[key]);
      } else if (cmd.startsWith("echo ")) {
        appendLine(raw.slice(5));
      } else if (cmd) {
        appendLine(`'${cmd}' is not recognized as an internal or external command.`);
      }

      input.value = "";
      terminal.scrollTop = terminal.scrollHeight;
    });
  }
}

function initNetwork(el) {
  const detail = el.querySelector("#exp-detail");
  const showExp = (index) => {
    const exp = PORTFOLIO_DATA.experience[index];
    if (!exp) return;
    detail.innerHTML = `
      <h3>${exp.title} — ${exp.company}</h3>
      <p><strong>Period:</strong> ${exp.period}</p>
      <h4>Operational Statistics (Key Achievements)</h4>
      <ul>${exp.achievements.map((a) => `<li>${a}</li>`).join("")}</ul>
      <h4>System Logs (Responsibilities)</h4>
      <ul>${exp.responsibilities.map((r) => `<li>${r}</li>`).join("")}</ul>
      <h4>Installed Drivers (Tech Stack)</h4>
      <div class="tag-row">${exp.tech.map((t) => `<span class="tag">${t}.DRV</span>`).join("")}</div>
      ${exp.certLink ? `<p style="margin-top:8px;"><a href="${exp.certLink}" target="_blank" rel="noopener">📜 View Certificate</a></p>` : ""}
    `;
  };

  el.querySelectorAll("#exp-table tbody tr").forEach((row) => {
    row.addEventListener("click", () => {
      el.querySelectorAll("#exp-table tbody tr").forEach((r) => r.classList.remove("selected"));
      row.classList.add("selected");
      showExp(Number(row.dataset.expIndex));
    });
    row.addEventListener("dblclick", () => showExp(Number(row.dataset.expIndex)));
  });

  showExp(0);
}

function initBrowser(el) {
  const content = el.querySelector("#ie-content");
  const loading = el.querySelector("#ie-loading");
  const urlInput = el.querySelector("#ie-url");

  const loadPage = () => {
    document.body.classList.add("loading-cursor");
    loading.style.width = "0%";
    content.innerHTML = "<p style='text-align:center;font-family:var(--font-comic);'>Connecting to host...</p>";
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 25 + 10;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        loading.style.width = "100%";
        setTimeout(() => {
          content.innerHTML = renderProjectsPage();
          document.body.classList.remove("loading-cursor");
          loading.style.width = "0%";
        }, 300);
      } else {
        loading.style.width = `${progress}%`;
      }
    }, 200);
  };

  loadPage();
  el.querySelector("#ie-refresh").addEventListener("click", loadPage);
  el.querySelector("#ie-go").addEventListener("click", loadPage);
  el.querySelector("#ie-back").addEventListener("click", () => {
    urlInput.value = "http://www.sumitgupta.geocities.com/projects.htm";
    loadPage();
  });
}

function initInbox(el) {
  const form = el.querySelector("#contact-form");
  const status = el.querySelector("#mail-status");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const name = fd.get("name").trim();
    const email = fd.get("email").trim();
    const subject = fd.get("subject").trim();
    const message = fd.get("message").trim();
    status.textContent = "Connecting to mail server...";
    setTimeout(() => {
      status.textContent = "Sending packet via SMTP...";
    }, 600);
    setTimeout(() => {
      const mailto = `mailto:${PORTFOLIO_DATA.profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
      window.location.href = mailto;
      status.textContent = `✓ Message queued for delivery to ${PORTFOLIO_DATA.profile.email}`;
    }, 1200);
  });
}

function initPaint(el) {
  const canvas = el.querySelector("#paint-canvas");
  const status = el.querySelector("#paint-status");
  const clearBtn = el.querySelector("#paint-clear");
  const toolBtns = el.querySelectorAll(".paint-tool");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  let drawing = false;
  let tool = "brush";
  const brushColor = "#000000";
  const brushSize = 2;

  const getPos = (e) => {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY,
    };
  };

  const drawDot = (x, y) => {
    ctx.beginPath();
    if (tool === "eraser") {
      ctx.fillStyle = "#ffffff";
      ctx.arc(x, y, brushSize + 1, 0, Math.PI * 2);
    } else {
      ctx.fillStyle = brushColor;
      ctx.arc(x, y, brushSize / 2, 0, Math.PI * 2);
    }
    ctx.fill();
  };

  const startDraw = (e) => {
    e.preventDefault();
    drawing = true;
    const { x, y } = getPos(e);
    drawDot(x, y);
  };

  const moveDraw = (e) => {
    if (!drawing) return;
    e.preventDefault();
    const { x, y } = getPos(e);
    drawDot(x, y);
  };

  const endDraw = () => { drawing = false; };

  canvas.addEventListener("mousedown", startDraw);
  canvas.addEventListener("mousemove", moveDraw);
  canvas.addEventListener("mouseup", endDraw);
  canvas.addEventListener("mouseleave", endDraw);
  canvas.addEventListener("touchstart", startDraw, { passive: false });
  canvas.addEventListener("touchmove", moveDraw, { passive: false });
  canvas.addEventListener("touchend", endDraw);

  toolBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tool = btn.dataset.tool;
      toolBtns.forEach((b) => b.classList.toggle("active", b === btn));
      status.textContent = tool === "brush"
        ? "Tool: Brush (black, 2px) — Click and drag to draw"
        : "Tool: Eraser — Click and drag to erase";
    });
  });

  clearBtn.addEventListener("click", () => {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    status.textContent = "Canvas cleared.";
  });
}

/* ==========================================================================
   Terminal Easter Eggs
   ========================================================================== */

let matrixInterval = null;

function startMatrixEffect(terminal, sound) {
  if (terminal.classList.contains("matrix-mode")) return;
  sound.beep(440, 0.1, "square", 0.05);

  terminal.classList.add("matrix-mode");
  const rain = document.createElement("div");
  rain.className = "matrix-rain";
  terminal.appendChild(rain);

  const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
  const cols = Math.floor(terminal.clientWidth / 14) || 20;

  for (let i = 0; i < cols; i++) {
    const col = document.createElement("div");
    col.className = "matrix-col";
    col.style.left = `${i * 14}px`;
    col.style.animationDuration = `${2 + Math.random() * 4}s`;
    col.style.animationDelay = `${Math.random() * 2}s`;
    let text = "";
    for (let j = 0; j < 24; j++) {
      text += chars[Math.floor(Math.random() * chars.length)];
    }
    col.textContent = text;
    rain.appendChild(col);
  }

  const stopMatrix = () => {
    clearInterval(matrixInterval);
    matrixInterval = null;
    rain.remove();
    terminal.classList.remove("matrix-mode");
    document.removeEventListener("keydown", stopMatrix);
  };

  matrixInterval = setInterval(() => {
    rain.querySelectorAll(".matrix-col").forEach((col) => {
      let text = "";
      for (let j = 0; j < 24; j++) {
        text += chars[Math.floor(Math.random() * chars.length)];
      }
      col.textContent = text;
    });
  }, 120);

  setTimeout(stopMatrix, 6000);
  document.addEventListener("keydown", stopMatrix);
}

function triggerBSOD(sound) {
  sound.error();
  setTimeout(() => sound.error(), 300);

  const bsod = document.getElementById("bsod");
  bsod.hidden = false;
  document.body.style.overflow = "hidden";

  const dismiss = () => {
    bsod.hidden = true;
    document.body.style.overflow = "";
    document.removeEventListener("keydown", dismiss);
    bsod.removeEventListener("click", dismiss);
    sound.startup();
  };

  setTimeout(() => {
    document.addEventListener("keydown", dismiss);
    bsod.addEventListener("click", dismiss);
  }, 800);
}

/* ==========================================================================
   Recycle Bin
   ========================================================================== */

class RecycleBinManager {
  constructor(sound) {
    this.sound = sound;
    this.trashed = new Set();
    this.bin = document.getElementById("recycle-bin");
    this.icon = document.getElementById("recycle-bin-icon");
    this.iconMap = new Map();
    this.bindEvents();
  }

  registerIcon(windowId, iconEl) {
    this.iconMap.set(windowId, iconEl);
  }

  bindEvents() {
    this.bin.addEventListener("dragover", (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
      this.bin.classList.add("drag-over");
    });

    this.bin.addEventListener("dragleave", () => {
      this.bin.classList.remove("drag-over");
    });

    this.bin.addEventListener("drop", (e) => {
      e.preventDefault();
      this.bin.classList.remove("drag-over");
      const windowId = e.dataTransfer.getData("text/plain");
      if (windowId) this.trash(windowId);
    });

    this.bin.addEventListener("click", () => {
      if (this.trashed.size > 0) this.empty();
    });
  }

  trash(windowId) {
    if (this.trashed.has(windowId)) return;
    const iconEl = this.iconMap.get(windowId);
    if (!iconEl) return;

    this.trashed.add(windowId);
    iconEl.classList.add("trashed");
    this.updateBinState();
    this.sound.minimize();
  }

  empty() {
    if (this.trashed.size === 0) return;
    if (!confirm(`Empty Recycle Bin? (${this.trashed.size} item(s) will be permanently removed from desktop)`)) return;

    this.sound.crunch();
    this.trashed.clear();
    this.updateBinState();
  }

  updateBinState() {
    const isFull = this.trashed.size > 0;
    this.bin.classList.toggle("full", isFull);
    this.icon.classList.toggle("full", isFull);
    this.icon.textContent = isFull ? "🗑️📄" : "🗑️";
    this.bin.title = isFull
      ? `Recycle Bin (${this.trashed.size} item(s)) — Click to Empty`
      : "Drag icons here to delete";
  }
}

/* ==========================================================================
   Hit Counter
   ========================================================================== */

const HIT_COUNTER_KEY = "retro_portfolio_90s_hits";

function getHitCount() {
  return parseInt(localStorage.getItem(HIT_COUNTER_KEY) || "0", 10);
}

function incrementHitCounter() {
  const count = getHitCount() + 1;
  localStorage.setItem(HIT_COUNTER_KEY, String(count));
  return count;
}

function renderHitCounter(count) {
  const padded = String(count).padStart(6, "0");
  const digitsEl = document.getElementById("hit-counter-digits");
  const marqueeEl = document.getElementById("marquee-counter");

  digitsEl.innerHTML = padded
    .split("")
    .map((d) => `<span class="hit-digit">${d}</span>`)
    .join("");

  if (marqueeEl) marqueeEl.textContent = padded;
}

/* ==========================================================================
   Boot Sequence
   ========================================================================== */

function runBootSequence(onComplete) {
  const boot = document.getElementById("boot-screen");
  const fill = document.getElementById("boot-fill");
  const text = document.getElementById("boot-text");
  const messages = [
    "Starting MS-DOS...",
    "Loading HIMEM.SYS...",
    "Initializing network stack...",
    "Installing device drivers...",
    "Loading SUMITGUPTA.SYS...",
    "Starting Windows 95...",
    "Welcome!",
  ];
  let step = 0;

  const tick = () => {
    if (step >= messages.length) {
      boot.classList.add("hidden");
      setTimeout(onComplete, 600);
      return;
    }
    text.textContent = messages[step];
    fill.style.width = `${((step + 1) / messages.length) * 100}%`;
    step++;
    setTimeout(tick, step === messages.length ? 400 : 350);
  };

  tick();
}

/* ==========================================================================
   Desktop & Start Menu
   ========================================================================== */

function buildDesktopIcons(wm, recycleBin) {
  const container = document.getElementById("desktop-icons");
  WINDOWS.forEach((win) => {
    const icon = document.createElement("div");
    icon.className = "desktop-icon";
    icon.draggable = true;
    icon.dataset.windowId = win.id;
    icon.innerHTML = `
      <div class="desktop-icon-img">${win.icon}</div>
      <span class="desktop-icon-label">${win.label}</span>
    `;

    icon.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", win.id);
      e.dataTransfer.effectAllowed = "move";
      icon.classList.add("dragging");
    });

    icon.addEventListener("dragend", () => {
      icon.classList.remove("dragging");
    });

    icon.addEventListener("dblclick", () => openWindow(win.id, wm));
    icon.addEventListener("click", () => {
      container.querySelectorAll(".desktop-icon").forEach((i) => i.classList.remove("selected"));
      icon.classList.add("selected");
    });

    recycleBin.registerIcon(win.id, icon);
    container.appendChild(icon);
  });
}

function buildStartMenu(wm) {
  const list = document.getElementById("start-menu-list");
  WINDOWS.forEach((win) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.innerHTML = `<span>${win.icon}</span> ${win.label}`;
    btn.addEventListener("click", () => {
      openWindow(win.id, wm);
      closeStartMenu();
    });
    li.appendChild(btn);
    list.appendChild(li);
  });
}

function openWindow(id, wm) {
  const def = WINDOWS.find((w) => w.id === id);
  if (!def) return;

  const renderers = {
    "system-props": renderSystemProperties,
    "my-computer": renderMyComputer,
    network: renderNetwork,
    browser: renderBrowser,
    inbox: renderInbox,
    education: renderEducation,
    paint: renderPaint,
  };

  wm.create(def, renderers[id]());
}

function closeStartMenu() {
  document.getElementById("start-menu").hidden = true;
  document.getElementById("start-btn").classList.remove("open");
}

function updateClock() {
  const now = new Date();
  let h = now.getHours();
  const ampm = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  const m = String(now.getMinutes()).padStart(2, "0");
  document.getElementById("tray-clock").textContent = `${h}:${m} ${ampm}`;
}

/* ==========================================================================
   App Init
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const sound = new SoundEngine();
  const wm = new WindowManager(sound);
  const winamp = new WinampPlayer(sound);
  const recycleBin = new RecycleBinManager(sound);

  const hitCount = incrementHitCounter();
  renderHitCounter(hitCount);

  buildDesktopIcons(wm, recycleBin);
  buildStartMenu(wm);

  document.addEventListener("mousemove", (e) => wm.onMouseMove(e));
  document.addEventListener("mouseup", () => wm.onMouseUp());

  const startBtn = document.getElementById("start-btn");
  const startMenu = document.getElementById("start-menu");

  startBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const open = startMenu.hidden;
    startMenu.hidden = !open;
    startBtn.classList.toggle("open", open);
    sound.click();
  });

  document.addEventListener("click", (e) => {
    if (!startMenu.contains(e.target) && e.target !== startBtn) {
      closeStartMenu();
    }
  });

  document.getElementById("shutdown-btn").addEventListener("click", () => {
    if (confirm("Are you sure you want to shut down your computer?")) {
      document.getElementById("boot-screen").classList.remove("hidden");
      document.getElementById("boot-text").textContent = "It is now safe to turn off your computer.";
      document.getElementById("boot-fill").style.width = "100%";
      sound.close();
    }
  });

  const crtToggle = document.getElementById("crt-toggle");
  const crtOverlay = document.getElementById("crt-overlay");
  crtToggle.addEventListener("click", () => {
    crtOverlay.classList.toggle("active");
    crtToggle.classList.toggle("active");
    sound.click();
  });

  const soundToggle = document.getElementById("sound-toggle");
  soundToggle.addEventListener("click", () => {
    sound.enabled = !sound.enabled;
    soundToggle.classList.toggle("active", !sound.enabled);
    if (sound.enabled) sound.click();
  });

  document.querySelector("[data-action='winamp-minimize']").addEventListener("click", () => {
    document.getElementById("winamp").classList.toggle("minimized");
    sound.minimize();
  });

  runBootSequence(() => {
    sound.startup();
    openWindow("system-props", wm);
    setTimeout(() => openWindow("my-computer", wm), 400);
  });

  updateClock();
  setInterval(updateClock, 30000);
});

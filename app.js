/**
 * Retro Portfolio 90s — Application Logic
 * Content extracted from cursor-portfolio repository
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Sumit Gupta",
    role: "Java Full-Stack Engineer",
    tagline: "Java Full-Stack Engineer & Problem Solver",
    email: "sumitgupta19900@gmail.com",
    phone: "+91 7905342319",
    location: "Noida, India",
    github: "https://github.com/Imposter009",
    linkedin: "https://www.linkedin.com/in/sumit-gupta-dev/",
    resume: "assets/resume/My Resume.pdf",
    avatar: "assets/images/profile.png",
    summary:
      "Java Full-Stack Engineer with 2+ years delivering high-throughput enterprise transaction systems within high-velocity environments, specializing in Java 8+, Spring Boot microservices, Apache Kafka, and Angular. Delivered 23% faster order processing via Kafka async pipelines, a 27% reduction in production incidents, and systematically maintained 85% unit test coverage. Three-time corporate award recipient recognized for mitigating high-severity production outages, accelerating cloud-native asset feature delivery, and mentoring junior engineers in test-driven development methodologies.",
    typingPhrases: [
      "Building Spring Boot Microservices",
      "Constructing Apache Kafka Event Pipelines",
      "Optimizing Enterprise Transactions",
      "Engineering Scalable Full-Stack Solutions"
    ],
    stats: [
      { value: "2+", label: "Years Experience" },
      { value: "23%", label: "Faster Processing" },
      { value: "85%", label: "Unit Test Coverage" }
    ],
    highlights: [
      { title: "Backend Development", text: "Expertise in Java, Spring Boot, and Kafka async pipelines" },
      { title: "Frontend Development", text: "Skilled in Angular, NgRx, and RxJS reactive streams" },
      { title: "Architecture & DevOps", text: "Proficient in SQL, MongoDB, Docker, and CI/CD pipelines" }
    ]
  },

  experience: [
    {
      id: "intellect",
      period: "Aug 2024 - Present",
      title: "Associate Consultant — Java Full-Stack Developer",
      company: "Intellect Design Arena Ltd",
      achievements: [
        "Constructed asynchronous Apache Kafka event pipelines, reducing data sync latency from 350ms to 40ms and driving a 3x throughput scale during peak message bursts.",
        "Reduced recurring P1/P2 production incidents by 27% through implementing a centralized JSON schema validation and uniform exception-handling abstraction layer.",
        "Built 5+ reusable Angular components integrating NgRx store management, RxJS HttpClient observables, and OnPush change detection, reducing interface initialization latency by 35%.",
        "Maintained 85% unit test coverage across continuous delivery pipelines utilizing TDD methodologies with JUnit 5 and Mockito, mitigating regression defects."
      ],
      responsibilities: [
        "Architected high-throughput RESTful microservices for core Order and Shipment modules, applying SOLID principles to decouple domain boundaries and establish independent deployments.",
        "Eliminated synchronous processing bottlenecks on multi-party transactions by constructing asynchronous Apache Kafka event pipelines.",
        "Reduced recurring P1/P2 production incidents by 27% through implementing centralized JSON schema validation and exception-handling layers, accelerating log tracking via Kibana.",
        "Built 5+ reusable Angular components integrating NgRx store management, RxJS observables, and OnPush change detection to process procurement data streams.",
        "Maintained 85% unit test coverage across continuous delivery pipelines utilizing TDD methodologies with JUnit 5 and Mockito.",
        "Lowered external integration overhead and developer onboarding timelines by 30% by publishing comprehensive Swagger/OpenAPI 3.0 contracts."
      ],
      tech: ["Java 8+", "Spring Boot", "PostgreSQL", "Angular", "Kafka", "Swagger", "ELK", "CI/CD", "JUnit 5", "Mockito"]
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
    }
  ],

  projects: [
    {
      title: "Retro Windows 95 Portfolio",
      description:
        "An interactive 90s Windows 95 desktop replica portfolio featuring custom draggable/resizable windows, an MS-DOS prompt mockup with retro interactive easter eggs, a synthesizer Winamp-style MIDI player via Web Audio API, and an MS Paint clone.",
      tech: ["HTML5", "CSS3", "JavaScript", "Web Audio API", "HTML5 Canvas"],
      demo: "https://retro-portfolio-ashen.vercel.app/",
      github: "https://github.com/Imposter009/retro-portfolio",
      thumbImage: "assets/images/retro-portfolio.png",
    },
    {
      title: "Developer Portfolio",
      description:
        "Deployed a responsive production-tier web presentation platform utilizing structural HTML5, CSS3, and JavaScript, optimizing static assets via AI-assisted development practices to achieve a sub-2s response window on Vercel.",
      tech: ["HTML5", "CSS3", "JavaScript", "Vercel", "Claude API", "Cursor AI"],
      demo: "https://cursor-portfolio-theta.vercel.app/",
      github: "https://github.com/Imposter009/cursor-portfolio",
      thumbImage: "assets/images/project-portfolio-cursor.png",
    },
    {
      title: "Full-Stack E-Commerce Platform",
      description:
        "Implemented a scalable commercial web application managing 1,000+ cataloged product listings using server-side pagination, secure token-based session verification, authorization middleware, and integrating Stripe processing endpoints.",
      tech: ["React.js", "Node.js", "Express", "MongoDB", "JWT", "Stripe API", "Multer"],
      demo: "https://e-commerce-sooty-mu.vercel.app/",
      github: "https://github.com/Imposter009/e-commerce",
      thumbImage: "assets/images/project-1.jpg",
    },
  ],

  skills: {
    "C:\\Program Files\\Languages & Backend": ["Java 8+", "TypeScript", "JavaScript", "SQL", "Spring Boot", "Spring Security", "Spring MVC", "Hibernate", "JPA", "Node.js", "Express"],
    "C:\\Program Files\\Architecture & Databases": ["Microservices Architecture", "Apache Kafka", "RESTful APIs", "JWT", "PostgreSQL", "MongoDB", "Redis (Caching)", "System Design", "Event-Driven Design"],
    "C:\\Program Files\\Frontend Development": ["Angular 10+", "React.js", "NgRx", "RxJS", "OnPush Change Detection", "Lazy Loading", "HTML5", "CSS3"],
    "C:\\Windows\\System32\\Drivers": ["Docker", "Jenkins (CI/CD)", "AWS (EC2, S3)", "MinIO", "Kubernetes", "JUnit 5", "Mockito", "Git", "ELK Stack", "Swagger/OpenAPI 3.0", "JasperReports", "SonarQube", "Agile/Scrum"],
    "C:\\Windows\\System32\\AI_Agents": ["Prompt Engineering", "LLM Integration Fundamentals", "Responsible AI Deployment (Claude API, Cursor AI)"]
  },

  education: [
    { year: "2024", period: "2020 - 2024", degree: "Bachelor of Technology (Computer Science & Engineering)", school: "Amity University", location: "Lucknow, UP", score: "CGPA 8.35/10" },
    { year: "2019", period: "2018 - 2019", degree: "Class 12th (Science)", school: "City Montessori School", location: "Lucknow, UP", score: "91.25%" },
    { year: "2017", period: "2016 - 2017", degree: "Class 10th", school: "City Montessori School", location: "Lucknow, UP", score: "89.50%" }
  ],

  certifications: [
    { title: "SPOT Award (Q1 2025)", issuer: "Intellect Design Arena Ltd", date: "Q1 2025", type: "Award", text: "For technical ownership in resolving mission-critical P1/P2 deliverables", image: "assets/images/SPOT award.png" },
    { title: '"You Did It" Award (March 2025)', issuer: "Intellect Design Arena Ltd", date: "March 2025", type: "Award", text: "For implementing structural peer review patterns that upskilled team deliverables", image: "assets/images/B435-march2025.jpeg" },
    { title: '"You Did It" Award (Q4 2024)', issuer: "Intellect Design Arena Ltd", date: "Q4 2024", type: "Award", text: "For record technology stack onboarding velocity", image: "assets/images/You did it award November.jpg" },
    { title: "AI Fluency: Framework & Foundations", issuer: "Anthropic", date: "2026", type: "Certification", text: "Training on foundational LLM behaviors, contexts, and deployment guidelines", image: "assets/images/antropic certificate.png" },
    { title: "Website Performance Metrics Publication", issuer: "Asian Journal of Research in Computer Science", date: "Apr 2024", type: "Publication", text: "Research on text compression, CDN caching, and Core Web Vitals", link: "https://journalajrcos.com/index.php/AJRCOS/article/view/461" }
  ],
};

const WINDOWS = [
  { id: "system-props", icon: "🖥️", label: "System Properties", title: "System Properties — Sumit Gupta", tooltip: "System Properties", width: 480, height: 380, x: 120, y: 60 },
  { id: "my-computer", icon: "💻", label: "My Computer", title: "My Computer — C:\\DOS", tooltip: "C:\\ Drive", width: 520, height: 420, x: 80, y: 80 },
  { id: "network", icon: "🌐", label: "Network Neighborhood", title: "Network Neighborhood — Corporate Intranet", tooltip: "Intranet Servers", width: 560, height: 440, x: 160, y: 100 },
  { id: "browser", icon: "📁", label: "Projects", title: "Internet Explorer — Projects Gallery", tooltip: "Proceed at your own curiosity.", width: 580, height: 480, x: 200, y: 60 },
  { id: "resume", icon: "📄", label: "Resume.doc", title: "Resume.doc — Notepad", tooltip: "Contains caffeine-powered code.", width: 450, height: 350, x: 140, y: 120 },
  { id: "terminal", icon: "🖥️", label: "Terminal", title: "MS-DOS Prompt", tooltip: "Definitely not hacking.", width: 500, height: 380, x: 100, y: 100 },
  { id: "inbox", icon: "📧", label: "Inbox (Outlook)", title: "Outlook Express — New Message", tooltip: "Contact Sumit", width: 480, height: 440, x: 240, y: 120 },
  { id: "education", icon: "⚙️", label: "Control Panel", title: "Control Panel — Settings", tooltip: "Settings & Appearance", width: 480, height: 380, x: 300, y: 80 },
  { id: "paint", icon: "🎨", label: "Paint", title: "untitled — Paint", tooltip: "Paintbrush.exe", width: 500, height: 420, x: 140, y: 90 },
];


/* ==========================================================================
   Layout & Responsive Helpers
   ========================================================================== */

const LAYOUT = {
  REF_WIDTH: 1024,
  REF_LAYER_HEIGHT: 716, /* 768 - taskbar - marquee */
  MOBILE_BREAKPOINT: 768,
  MIN_WINDOW_WIDTH: 320,
  MIN_WINDOW_HEIGHT: 240,
};

function isMobileLayout() {
  return window.innerWidth <= LAYOUT.MOBILE_BREAKPOINT;
}

function getWindowLayerMetrics() {
  const layer = document.getElementById("window-layer");
  return {
    width: layer.clientWidth || window.innerWidth,
    height: layer.clientHeight || window.innerHeight - 48,
  };
}

function scaleWindowDef(def) {
  const { width: layerW, height: layerH } = getWindowLayerMetrics();
  const scaleX = layerW / LAYOUT.REF_WIDTH;
  const scaleY = layerH / LAYOUT.REF_LAYER_HEIGHT;

  let width = Math.round(def.width * scaleX);
  let height = Math.round(def.height * scaleY);
  let x = Math.round(def.x * scaleX);
  let y = Math.round(def.y * scaleY);

  width = Math.max(LAYOUT.MIN_WINDOW_WIDTH, Math.min(width, layerW));
  height = Math.max(LAYOUT.MIN_WINDOW_HEIGHT, Math.min(height, layerH));

  return clampWindowRect({ x, y, width, height }, layerW, layerH);
}

function clampWindowRect(rect, layerW, layerH) {
  const width = Math.min(Math.max(rect.width, LAYOUT.MIN_WINDOW_WIDTH), layerW);
  const height = Math.min(Math.max(rect.height, LAYOUT.MIN_WINDOW_HEIGHT), layerH);
  const x = Math.max(0, Math.min(rect.x, layerW - width));
  const y = Math.max(0, Math.min(rect.y, layerH - height));
  return { x, y, width, height };
}

function applyMobileModeClass() {
  document.body.classList.toggle("mobile-mode", isMobileLayout());
}

function debounce(fn, ms) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
}


class SoundEngine {
  constructor() {
    this.enabled = localStorage.getItem("retro_portfolio_sound_enabled") !== "false";
    this.volume = parseFloat(localStorage.getItem("retro_portfolio_sound_volume") ?? "0.5");
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
    const computedVol = volume * this.volume;
    if (computedVol <= 0.0001) return; // Ignore silent clicks

    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    
    // Web Audio: set starting value properly to avoid zero/negatives triggering errors
    gain.gain.setValueAtTime(computedVol, this.ctx.currentTime);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    osc.start();
    try {
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
    } catch (e) {
      gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + duration);
    }
    osc.stop(this.ctx.currentTime + duration);
  }

  click() { this.beep(600, 0.04); }
  open() { this.beep(440, 0.05); this.beep(660, 0.05); }
  close() { this.beep(330, 0.06); }
  minimize() { this.beep(520, 0.04); this.beep(380, 0.04); }
  error() { this.beep(200, 0.12, "sawtooth"); }
  success() {
    [523, 659, 784, 1046].forEach((f, i) => {
      setTimeout(() => this.beep(f, 0.08, "sine", 0.06), i * 80);
    });
  }
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
    gain.gain.value = 0.08 * this.volume;
    noise.connect(gain);
    gain.connect(this.ctx.destination);
    noise.start();
  }

  toggle(state) {
    if (state !== undefined) {
      this.enabled = state;
    } else {
      this.enabled = !this.enabled;
    }
    localStorage.setItem("retro_portfolio_sound_enabled", this.enabled);
  }

  setVolume(vol) {
    this.volume = Math.max(0, Math.min(1, vol));
    localStorage.setItem("retro_portfolio_sound_volume", this.volume);
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
      "01. TUJHE_DEKHA_DDLJ.MID",
      "02. CHURA_KE_DIL_MERA.MID",
      "03. DHEERE_DHEERE_SE.MID",
      "04. MODEM_DIALUP.WAV",
    ];
    this.timeout = null;
    this.oscillators = [];
    this.trackNotes = {
      0: [ // "Tujhe Dekha Toh" (DDLJ)
        { f: 261.63, d: 2 }, { f: 293.66, d: 2 }, { f: 329.63, d: 3 }, { f: 261.63, d: 2 }, { f: 293.66, d: 4 },
        { f: 329.63, d: 2 }, { f: 392.00, d: 2 }, { f: 349.23, d: 2 }, { f: 329.63, d: 2 }, { f: 293.66, d: 6 },
        { f: 0, d: 2 }, // rest
        { f: 261.63, d: 2 }, { f: 293.66, d: 2 }, { f: 329.63, d: 3 }, { f: 392.00, d: 2 }, { f: 349.23, d: 4 },
        { f: 329.63, d: 2 }, { f: 293.66, d: 2 }, { f: 261.63, d: 2 }, { f: 261.63, d: 6 },
        { f: 0, d: 4 }
      ],
      1: [ // "Chura Ke Dil Mera"
        { f: 329.63, d: 2 }, { f: 392.00, d: 2 }, { f: 440.00, d: 2 }, { f: 493.88, d: 3 }, { f: 493.88, d: 2 },
        { f: 493.88, d: 2 }, { f: 523.25, d: 2 }, { f: 493.88, d: 2 }, { f: 440.00, d: 2 }, { f: 392.00, d: 2 }, { f: 440.00, d: 6 },
        { f: 0, d: 2 },
        { f: 329.63, d: 2 }, { f: 392.00, d: 2 }, { f: 440.00, d: 2 }, { f: 493.88, d: 3 }, { f: 493.88, d: 2 },
        { f: 493.88, d: 2 }, { f: 523.25, d: 2 }, { f: 493.88, d: 2 }, { f: 440.00, d: 2 }, { f: 392.00, d: 2 }, { f: 440.00, d: 6 },
        { f: 0, d: 4 }
      ],
      2: [ // "Dheere Dheere Se"
        { f: 440.00, d: 2 }, { f: 493.88, d: 2 }, { f: 523.25, d: 3 }, { f: 523.25, d: 2 }, { f: 523.25, d: 2 },
        { f: 493.88, d: 2 }, { f: 440.00, d: 2 }, { f: 493.88, d: 2 }, { f: 523.25, d: 2 }, { f: 587.33, d: 2 }, { f: 493.88, d: 6 },
        { f: 0, d: 2 },
        { f: 392.00, d: 2 }, { f: 440.00, d: 2 }, { f: 493.88, d: 3 }, { f: 493.88, d: 2 }, { f: 493.88, d: 2 },
        { f: 440.00, d: 2 }, { f: 392.00, d: 2 }, { f: 440.00, d: 2 }, { f: 493.88, d: 2 }, { f: 523.25, d: 2 }, { f: 440.00, d: 6 },
        { f: 0, d: 4 }
      ],
      3: [ // Standard dialup sound
        { f: 220, d: 2 }, { f: 277, d: 2 }, { f: 330, d: 2 }, { f: 392, d: 2 }, { f: 440, d: 2 }, { f: 330, d: 2 }, { f: 277, d: 2 }, { f: 220, d: 2 }
      ]
    };
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
    this.playNextNote();
  }

  playNextNote() {
    if (!this.playing) return;

    const trackNotes = this.trackNotes[this.trackIndex] || this.trackNotes[0];
    const note = trackNotes[this.noteIndex % trackNotes.length];
    
    if (note) {
      const baseTime = 90; // Base duration of 1 beat in ms
      const durationMs = note.d * baseTime;
      
      if (note.f > 0) {
        const vol = (this.volumeEl.value / 100) * 0.35;
        this.sound.beep(note.f, (durationMs * 0.85) / 1000, "triangle", vol);
      }
      
      this.animateVis();
      this.noteIndex++;
      
      this.timeout = setTimeout(() => this.playNextNote(), durationMs);
    } else {
      this.timeout = setTimeout(() => this.playNextNote(), 300);
    }
  }

  pause() {
    this.playing = false;
    this.playBtn.classList.remove("active");
    this.playBtn.textContent = "▶";
    clearTimeout(this.timeout);
  }

  stop() {
    this.pause();
    this.noteIndex = 0;
    this.buildVisualizer();
    this.sound.beep(300, 0.05);
  }

  prevTrack() {
    const wasPlaying = this.playing;
    this.pause();
    this.trackIndex = (this.trackIndex - 1 + this.tracks.length) % this.tracks.length;
    this.noteIndex = 0;
    this.updateTrackDisplay();
    this.sound.click();
    if (wasPlaying) {
      this.play();
    }
  }

  nextTrack() {
    const wasPlaying = this.playing;
    this.pause();
    this.trackIndex = (this.trackIndex + 1) % this.tracks.length;
    this.noteIndex = 0;
    this.updateTrackDisplay();
    this.sound.click();
    if (wasPlaying) {
      this.play();
    }
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
    this.resizeObservers = new Map();

    this.handleResize = debounce(() => this.onViewportResize(), 120);
    window.addEventListener("resize", this.handleResize);
    window.addEventListener("orientationchange", this.handleResize);
  }

  getLayerRect() {
    return this.layer.getBoundingClientRect();
  }

  applyWindowRect(el, rect) {
    el.style.left = `${rect.x}px`;
    el.style.top = `${rect.y}px`;
    el.style.width = `${rect.width}px`;
    el.style.height = `${rect.height}px`;
  }

  clampWindowEl(el) {
    if (this.dragState) return;
    const win = [...this.windows.values()].find((w) => w.el === el);
    if (!win || win.maximized || isMobileLayout()) return;

    const { width: layerW, height: layerH } = getWindowLayerMetrics();
    const rect = clampWindowRect(
      {
        x: parseInt(el.style.left, 10) || 0,
        y: parseInt(el.style.top, 10) || 0,
        width: el.offsetWidth,
        height: el.offsetHeight,
      },
      layerW,
      layerH
    );
    this.applyWindowRect(el, rect);
  }

  onViewportResize() {
    applyMobileModeClass();
    const mobile = isMobileLayout();

    this.windows.forEach((win) => {
      const { el, def } = win;
      if (mobile) {
        if (!win.maximized) {
          win.savedRect = {
            left: el.style.left,
            top: el.style.top,
            width: el.style.width,
            height: el.style.height,
          };
        }
        win.maximized = true;
        el.classList.add("maximized", "mobile-window");
      } else if (el.classList.contains("mobile-window")) {
        el.classList.remove("mobile-window");
        if (win.savedRect && win.savedRect.width) {
          win.maximized = false;
          el.classList.remove("maximized");
          el.style.left = win.savedRect.left;
          el.style.top = win.savedRect.top;
          el.style.width = win.savedRect.width;
          el.style.height = win.savedRect.height;
        } else {
          const rect = scaleWindowDef(def);
          win.maximized = false;
          el.classList.remove("maximized");
          this.applyWindowRect(el, rect);
        }
      } else if (!win.maximized) {
        this.clampWindowEl(el);
      }
    });
  }

  startDrag(id, clientX, clientY) {
    const win = this.windows.get(id);
    if (!win || win.maximized || isMobileLayout()) return;

    const el = win.el;
    this.focus(id);
    const rect = el.getBoundingClientRect();
    const layerRect = this.getLayerRect();
    this.dragState = {
      id,
      offsetX: clientX - rect.left,
      offsetY: clientY - rect.top,
      layerRect,
    };
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
    el.style.zIndex = ++this.zIndex;

    const mobile = isMobileLayout();
    const rect = scaleWindowDef(def);

    if (mobile) {
      el.classList.add("maximized", "mobile-window");
    } else {
      this.applyWindowRect(el, rect);
    }

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

    const winState = { el, def, maximized: mobile, savedRect: null };
    if (mobile) winState.savedRect = { left: `${rect.x}px`, top: `${rect.y}px`, width: `${rect.width}px`, height: `${rect.height}px` };

    this.windows.set(def.id, winState);
    this.observeWindowResize(el);
    this.focus(def.id);
    this.updateTaskbar();
    this.sound.open();
    this.initWindowContent(def.id, el);
  }

  observeWindowResize(el) {
    if (typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(() => this.clampWindowEl(el));
    observer.observe(el);
    this.resizeObservers.set(el, observer);
  }

  bindWindowEvents(el, def) {
    el.addEventListener("mousedown", () => this.focus(def.id));

    const titlebar = el.querySelector("[data-drag-handle]");
    titlebar.addEventListener("mousedown", (e) => {
      if (e.target.closest(".window-btn")) return;
      e.preventDefault();
      this.startDrag(def.id, e.clientX, e.clientY);
    });

    titlebar.addEventListener(
      "touchstart",
      (e) => {
        if (e.target.closest(".window-btn")) return;
        const touch = e.touches[0];
        if (!touch) return;
        e.preventDefault();
        this.startDrag(def.id, touch.clientX, touch.clientY);
      },
      { passive: false }
    );

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

  onPointerMove(clientX, clientY) {
    if (!this.dragState) return;
    this.dragState.clientX = clientX;
    this.dragState.clientY = clientY;

    if (!this.dragState.ticking) {
      this.dragState.ticking = true;
      requestAnimationFrame(() => {
        if (!this.dragState) return;
        const { id, offsetX, offsetY, layerRect, clientX: cx, clientY: cy } = this.dragState;
        const win = this.windows.get(id);
        if (win && !win.maximized) {
          const el = win.el;
          const winW = el.offsetWidth;
          const winH = el.offsetHeight;
          const maxX = layerRect.width - winW;
          const maxY = layerRect.height - winH;

          const x = Math.max(0, Math.min(cx - layerRect.left - offsetX, maxX));
          const y = Math.max(0, Math.min(cy - layerRect.top - offsetY, maxY));
          el.style.left = `${x}px`;
          el.style.top = `${y}px`;
        }
        if (this.dragState) {
          this.dragState.ticking = false;
        }
      });
    }
  }

  onMouseMove(e) {
    this.onPointerMove(e.clientX, e.clientY);
  }

  onTouchMove(e) {
    if (!this.dragState) return;
    const touch = e.touches[0];
    if (!touch) return;
    e.preventDefault();
    this.onPointerMove(touch.clientX, touch.clientY);
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
    const observer = this.resizeObservers.get(win.el);
    if (observer) {
      observer.disconnect();
      this.resizeObservers.delete(win.el);
    }
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
    if (!win || isMobileLayout()) return;
    const el = win.el;

    if (win.maximized) {
      win.maximized = false;
      el.classList.remove("maximized");
      if (win.savedRect) {
        el.style.left = win.savedRect.left;
        el.style.top = win.savedRect.top;
        el.style.width = win.savedRect.width;
        el.style.height = win.savedRect.height;
        this.clampWindowEl(el);
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
    if (id === "inbox") initInbox(el, this.sound);
    if (id === "paint") initPaint(el);
    if (id === "education") initEducation(el);
    if (id === "terminal") initStandaloneTerminal(el, this.sound);
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
      <div class="sys-icon-big">
        ${profile.avatar ? `<img src="${profile.avatar}" alt="${profile.name}" class="sys-avatar-img">` : 'SG'}
      </div>
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
        <div class="terminal-line">Transaction Latency: -40%</div>
        <div class="terminal-line">Code Coverage: 85%</div>
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
        <div class="field-row"><label>Subject:</label><input type="text" name="subject" value="Congratulations! Welcome to the Team 🎉" required></div>
        <div class="field-row" style="align-items:flex-start;"><label>Message:</label><textarea name="message" rows="4" placeholder="Hi Sumit,&#10;We opened your portfolio.&#10;You're hired. Please arrive Monday before we change our minds.&#10;— Recruitment Team" required></textarea></div>
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
    .map((c) => `
      <div class="panel-outset" style="margin-bottom: 8px; cursor: pointer; background: #e8f4f8;" data-cert-title="${c.title}" data-cert-image="${c.image || ''}" data-cert-link="${c.link || ''}">
        <div style="font-weight: bold; color: #00007f; margin-bottom: 4px;">${c.type}: ${c.title}</div>
        <div style="font-size: 10px; color: #555; margin-bottom: 4px;">${c.issuer} — ${c.date}</div>
        ${c.text ? `<div style="font-size: 10px; color: #333; font-style: italic; margin-bottom: 4px;">${c.text}</div>` : ''}
        ${c.image ? `<div style="font-size: 9px; color: #0066cc; margin-top: 4px; cursor: pointer; text-decoration: underline;">[Click to view certificate]</div>` : ''}
        ${c.link ? `<div style="font-size: 9px; color: #0066cc; margin-top: 4px; cursor: pointer; text-decoration: underline;">[Click to view publication]</div>` : ''}
      </div>
    `)
    .join("");

  return `
    <div class="tab-bar">
      <button type="button" class="tab-btn active" data-tab="edu">Add/Remove Programs</button>
      <button type="button" class="tab-btn" data-tab="display">Display Properties</button>
    </div>
    <div class="tab-panel active" data-panel="edu">
      <p style="margin-bottom:8px;font-weight:bold;">🎓 Education & Certifications</p>
      ${items}
      <div class="panel-inset">
        <strong>Installed Certificates, Awards & Publications:</strong>
        <div id="certs-container" style="margin-top:6px;">${certs}</div>
      </div>
    </div>
    <div class="tab-panel" data-panel="display">
      <p style="margin-bottom:8px;font-weight:bold;">🖥️ Desktop Theme Settings</p>
      <div class="panel-inset" style="padding: 12px; display: flex; flex-direction: column; gap: 8px;">
        <p>Choose a color scheme for your 90s desktop:</p>
        <div class="field-row">
          <label style="min-width: 60px;">Theme:</label>
          <select id="theme-selector" aria-label="Desktop Theme Selector">
            <option value="teal">Windows 95 Classic Teal</option>
            <option value="synthwave">Synthwave Neon (Dark Mode)</option>
          </select>
        </div>
        <div style="border-top: 1px dashed var(--dark); margin: 8px 0; padding-top: 8px;">
          <p style="font-size: 9px; color: var(--dark); font-style: italic;">"Synthwave Neon is a gorgeous dark appearance scheme inspired by 80s/90s chiptune, synthwave aesthetic, and dark mode developer layouts."</p>
        </div>
      </div>
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
    <div class="paint-colors-container">
      <div class="paint-selected-color" id="paint-current-color" style="background-color: #000000;" title="Current Color"></div>
      <div class="paint-palette">
        <div class="paint-color-swatch active" style="background-color: #000000;" data-color="#000000"></div>
        <div class="paint-color-swatch" style="background-color: #808080;" data-color="#808080"></div>
        <div class="paint-color-swatch" style="background-color: #800000;" data-color="#800000"></div>
        <div class="paint-color-swatch" style="background-color: #808000;" data-color="#808000"></div>
        <div class="paint-color-swatch" style="background-color: #008000;" data-color="#008000"></div>
        <div class="paint-color-swatch" style="background-color: #008080;" data-color="#008080"></div>
        <div class="paint-color-swatch" style="background-color: #000080;" data-color="#000080"></div>
        <div class="paint-color-swatch" style="background-color: #800080;" data-color="#800080"></div>
        <div class="paint-color-swatch" style="background-color: #ffffff;" data-color="#ffffff"></div>
        <div class="paint-color-swatch" style="background-color: #c0c0c0;" data-color="#c0c0c0"></div>
        <div class="paint-color-swatch" style="background-color: #ff0000;" data-color="#ff0000"></div>
        <div class="paint-color-swatch" style="background-color: #ffff00;" data-color="#ffff00"></div>
        <div class="paint-color-swatch" style="background-color: #00ff00;" data-color="#00ff00"></div>
        <div class="paint-color-swatch" style="background-color: #00ffff;" data-color="#00ffff"></div>
        <div class="paint-color-swatch" style="background-color: #0000ff;" data-color="#0000ff"></div>
        <div class="paint-color-swatch" style="background-color: #ff00ff;" data-color="#ff00ff"></div>
      </div>
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
        <div class="project-thumb" style="background: linear-gradient(135deg, #666, #999); display: flex; align-items: center; justify-content: center;">
          ${p.thumbImage ? `<img src="${p.thumbImage}" alt="${p.title}" style="width: 100%; height: 100%; object-fit: cover; image-rendering: pixelated; image-rendering: crisp-edges;">` : `<span style="color: white; font-size: 11px;">[Project Image]</span>`}
        </div>
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

function renderResumeWindow() {
  const { profile } = PORTFOLIO_DATA;
  return `
    <div style="background: #fff; font-family: var(--font-mono); font-size: 11px; padding: 10px; height: 100%; border: 2px inset var(--grey); overflow: auto; user-select: text; color: #000; line-height: 1.4;">
      <p>File: C:\\RESUME.DOC</p>
      <p>================================================</p>
      <h2 style="font-size: 14px; margin-bottom: 4px;">${profile.name.toUpperCase()}</h2>
      <p>${profile.role} | ${profile.location}</p>
      <p>Email: ${profile.email}</p>
      <p>Phone: ${profile.phone}</p>
      <p>GitHub: ${profile.github}</p>
      <p>LinkedIn: ${profile.linkedin}</p>
      <p>================================================</p>
      <br>
      <p><strong>SUMMARY:</strong></p>
      <p>${profile.summary}</p>
      <br>
      <p><strong>EXPERIENCE SUMMARY:</strong></p>
      ${PORTFOLIO_DATA.experience.map(e => `
        <p><strong>${e.title}</strong> — ${e.company} (${e.period})</p>
        ${e.responsibilities.map(r => `  - ${r}`).join('<br>')}
      `).join('<br>')}
      <br>
      <p>================================================</p>
      <p style="margin-top: 12px; text-align: center;">
        <a href="${profile.resume}" target="_blank" class="btn-90s" style="text-decoration: none; color: #000; display: inline-block;">Download PDF Resume</a>
      </p>
    </div>
  `;
}

function renderStandaloneTerminal() {
  return `
    <div class="terminal" id="standalone-terminal" style="height: 100%; min-height: 280px; display: flex; flex-direction: column;">
      <div class="terminal-line">Microsoft(R) Windows 95 (C) Copyright Microsoft Corp 1995.</div>
      <div class="terminal-line">&nbsp;</div>
      <div class="terminal-line">C:\\WINDOWS&gt; help</div>
      <div class="terminal-line">Commands: help, dir, ver, skills, experience, projects, cls, matrix, format</div>
      <div class="terminal-line">&nbsp;</div>
      <div class="terminal-input-row" style="display: flex; align-items: center;">
        <span class="terminal-prompt" style="color: #ffff00; margin-right: 8px;">C:\\WINDOWS&gt;</span>
        <input type="text" class="terminal-input" id="standalone-terminal-input" autocomplete="off" spellcheck="false" aria-label="Terminal input" style="flex: 1; background: transparent; border: none; color: #00ff00; font-family: var(--font-mono); font-size: 12px; outline: none; caret-color: #00ff00;">
      </div>
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

  // Certificate/Award/Publication click handlers
  const certsContainer = el.querySelector("#certs-container");
  if (certsContainer) {
    certsContainer.querySelectorAll(".panel-outset").forEach((cert) => {
      const imageUrl = cert.dataset.certImage;
      const linkUrl = cert.dataset.certLink;
      if (imageUrl || linkUrl) {
        cert.style.cursor = "pointer";
        cert.addEventListener("click", () => {
          if (linkUrl) {
            window.open(linkUrl, "_blank");
          } else if (imageUrl) {
            window.open(imageUrl, "_blank", "width=600,height=800");
          }
        });
      }
    });
  }

  const input = el.querySelector("#terminal-input");
  if (input) {
    const terminal = el.querySelector("#dos-terminal") || el.querySelector(".terminal");
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

function initInbox(el, sound) {
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
      if (sound) sound.success();
      if (window.mascot) window.mascot.celebrate("Hooray! Message queued for delivery! Sumit will get back to you shortly! 📧🎉");
    }, 1200);
  });
}

function initPaint(el) {
  const canvas = el.querySelector("#paint-canvas");
  const status = el.querySelector("#paint-status");
  const clearBtn = el.querySelector("#paint-clear");
  const toolBtns = el.querySelectorAll(".paint-tool");
  const swatches = el.querySelectorAll(".paint-color-swatch");
  const currentColorEl = el.querySelector("#paint-current-color");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  let drawing = false;
  let tool = "brush";
  let brushColor = "#000000";
  const brushSize = 3;
  let lastPos = null;

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

  const getColorName = (hex) => {
    const names = {
      "#000000": "black",
      "#808080": "grey",
      "#800000": "dark red",
      "#808000": "olive",
      "#008000": "dark green",
      "#008080": "teal",
      "#000080": "navy",
      "#800080": "purple",
      "#ffffff": "white",
      "#c0c0c0": "light grey",
      "#ff0000": "red",
      "#ffff00": "yellow",
      "#00ff00": "green",
      "#00ffff": "cyan",
      "#0000ff": "blue",
      "#ff00ff": "magenta",
    };
    return names[hex] || hex;
  };

  const drawLine = (x1, y1, x2, y2) => {
    ctx.beginPath();
    ctx.strokeStyle = tool === "eraser" ? "#ffffff" : brushColor;
    ctx.lineWidth = tool === "eraser" ? 14 : brushSize;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  };

  const startDraw = (e) => {
    e.preventDefault();
    drawing = true;
    const { x, y } = getPos(e);
    lastPos = { x, y };
    
    // Draw a single dot in case the user just clicks/taps
    ctx.beginPath();
    ctx.fillStyle = tool === "eraser" ? "#ffffff" : brushColor;
    ctx.arc(x, y, tool === "eraser" ? 7 : brushSize / 2, 0, Math.PI * 2);
    ctx.fill();
  };

  const moveDraw = (e) => {
    if (!drawing || !lastPos) return;
    e.preventDefault();
    const { x, y } = getPos(e);
    drawLine(lastPos.x, lastPos.y, x, y);
    lastPos = { x, y };
  };

  const endDraw = () => { drawing = false; lastPos = null; };

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
        ? `Tool: Brush (${getColorName(brushColor)}, ${brushSize}px) — Click and drag to draw`
        : "Tool: Eraser — Click and drag to erase";
    });
  });

  // Color Swatches
  swatches.forEach((swatch) => {
    swatch.addEventListener("click", () => {
      brushColor = swatch.dataset.color;
      if (currentColorEl) {
        currentColorEl.style.backgroundColor = brushColor;
      }
      swatches.forEach((s) => s.classList.toggle("active", s === swatch));
      
      // Auto-switch to Brush if Eraser is active
      if (tool === "eraser") {
        tool = "brush";
        toolBtns.forEach((b) => b.classList.toggle("active", b.dataset.tool === "brush"));
      }
      
      status.textContent = `Tool: Brush (${getColorName(brushColor)}, ${brushSize}px) — Click and drag to draw`;
    });
  });

  clearBtn.addEventListener("click", () => {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    status.textContent = "Canvas cleared.";
    if (window.mascot) window.mascot.celebrate("Fresh start! Paint something nostalgic! 🎨✨");
  });
}

function initEducation(el) {
  initTabs(el);

  // Certificate/Award/Publication click handlers
  const certsContainer = el.querySelector("#certs-container");
  if (certsContainer) {
    certsContainer.querySelectorAll(".panel-outset").forEach((cert) => {
      const imageUrl = cert.dataset.certImage;
      const linkUrl = cert.dataset.certLink;
      if (imageUrl || linkUrl) {
        cert.style.cursor = "pointer";
        cert.addEventListener("click", () => {
          if (linkUrl) {
            window.open(linkUrl, "_blank");
          } else if (imageUrl) {
            window.open(imageUrl, "_blank", "width=600,height=800");
          }
        });
      }
    });
  }

  // Theme Selector handling
  const selector = el.querySelector("#theme-selector");
  if (selector) {
    const activeTheme = localStorage.getItem("retro_portfolio_theme") || "teal";
    selector.value = activeTheme;
    
    selector.addEventListener("change", (e) => {
      const theme = e.target.value;
      localStorage.setItem("retro_portfolio_theme", theme);
      applyTheme(theme);
    });
  }
}

function initStandaloneTerminal(el, sound) {
  const input = el.querySelector("#standalone-terminal-input");
  if (!input) return;
  const terminal = el.querySelector("#standalone-terminal");

  const commands = {
    help: "Commands: help, dir, ver, skills, experience, projects, cls, echo, sudo, matrix, format",
    ver: "Windows 95 MS-DOS Prompt Version 7.0",
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
    echoLine.innerHTML = `<span class="terminal-prompt">C:\\WINDOWS&gt;</span> ${input.value}`;
    terminal.insertBefore(echoLine, inputRow);

    if (cmd === "cls") {
      terminal.querySelectorAll(".terminal-line:not(.terminal-input-row)").forEach((l) => l.remove());
    } else if (cmd === "sudo" || cmd.startsWith("sudo ")) {
      appendLine("Access denied. Elevated privileges require Windows NT.");
      sound.error();
    } else if (cmd === "matrix") {
      startMatrixEffect(terminal, sound);
    } else if (cmd === "format c:" || cmd === "format c:/" || cmd.startsWith("format c:")) {
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
  
  if (window.mascot) window.mascot.dismiss();

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
   Notification Manager
   ========================================================================== */

class NotificationManager {
  constructor(sound) {
    this.sound = sound;
    this.desktop = document.getElementById("desktop");
    this.messages = [
      { text: "Coffee levels critical.", icon: "☕" },
      { text: "Build succeeded.", icon: "✅" },
      { text: "Bug escaped containment.", icon: "🐛" },
      { text: "No bugs detected. Suspicious.", icon: "🧐" }
    ];
    this.scheduleNext();
  }

  show(text, icon = "ℹ️") {
    const toast = document.createElement("div");
    toast.className = "window sys-toast";
    toast.role = "alert";
    toast.style.minWidth = "260px";
    toast.style.minHeight = "auto";
    
    toast.innerHTML = `
      <div class="window-titlebar">
        <span class="window-title">System Message</span>
        <button type="button" class="window-btn" data-action="close" aria-label="Close">×</button>
      </div>
      <div class="window-body" style="padding: 10px;">
        <div style="display: flex; gap: 10px; align-items: center;">
          <span style="font-size: 24px; filter: drop-shadow(1px 1px 0 rgba(0,0,0,0.255));">${icon}</span>
          <p style="margin: 0; font-family: var(--font-ui); font-size: 11px; line-height: 1.4; color: #000;">${text}</p>
        </div>
      </div>
    `;

    this.desktop.appendChild(toast);
    
    if (this.sound) {
      if (text.includes("critical") || text.includes("escaped")) {
        this.sound.error();
      } else {
        this.sound.beep(600, 0.1, "triangle", 0.05);
      }
    }

    const closeBtn = toast.querySelector("[data-action='close']");
    const dismiss = () => {
      toast.classList.add("fade-out");
      setTimeout(() => toast.remove(), 300);
    };

    closeBtn.addEventListener("click", dismiss);

    // Auto-dismiss after 6 seconds
    setTimeout(() => {
      if (toast.parentElement) {
        dismiss();
      }
    }, 6000);
  }

  scheduleNext() {
    const delay = 15000 + Math.random() * 20000;
    setTimeout(() => {
      const msg = this.messages[Math.floor(Math.random() * this.messages.length)];
      this.show(msg.text, msg.icon);
      this.scheduleNext();
    }, delay);
  }
}

/* ==========================================================================
   ByteBoy Mascot
   ========================================================================== */

class ByteBoyMascot {
  constructor(sound) {
    this.sound = sound;
    this.desktop = document.getElementById("desktop");
    this.messages = [
      { text: "Tip: Double-click the Terminal icon to play with MS-DOS commands like 'matrix' or 'format c:'!", type: "tip" },
      { text: "Tip: You can toggle the CRT monitor filter by clicking the tray button at the bottom-right!", type: "tip" },
      { text: "Tip: Try dragging desktop icons to the Recycle Bin. Clicking it will empty it permanently!", type: "tip" },
      { text: "Tip: Open Internet Explorer to view Sumit's web project showcase!", type: "tip" },
      { text: "Why do programmers wear glasses? Because they can't C#! 🤓", type: "joke" },
      { text: "There are 10 types of people: those who understand binary, and those who don't! 🤖", type: "joke" },
      { text: "A SQL query walks into a bar, walks up to two tables and asks, 'Can I join you?' 🍺", type: "joke" },
      { text: "How many programmers does it take to change a lightbulb? None, that's a hardware problem! 💡", type: "joke" },
      { text: "Sumit's core backend systems have boosted enterprise throughput by 23%! Now that's performance! ⚡", type: "fact" },
      { text: "Did you know? Sumit maintains 85% unit test coverage in enterprise Java/Spring Boot code! 🧪", type: "fact" },
      { text: "Spot Award Winner! Sumit was awarded by Intellect Design Arena for outstanding project delivery! 🏆", type: "fact" }
    ];
    
    this.el = null;
    this.activeTimeout = null;

    // Trigger mascot every 40 to 70 seconds
    this.scheduleNext();
  }

  show() {
    if (this.el || document.getElementById("bsod") && !document.getElementById("bsod").hidden) return;

    const msg = this.messages[Math.floor(Math.random() * this.messages.length)];
    
    this.el = document.createElement("div");
    this.el.className = "byteboy-container";
    this.el.innerHTML = `
      <div class="byteboy-bubble">
        <div class="byteboy-bubble-header">
          <span>ByteBoy</span>
          <button type="button" class="byteboy-close" aria-label="Dismiss">×</button>
        </div>
        <p class="byteboy-text">${msg.text}</p>
        <div class="byteboy-actions" style="margin-top: 6px; display: flex; gap: 6px;">
          <button type="button" class="btn-90s btn-mascot-action" data-action="joke" style="padding: 1px 4px; min-width: auto; font-size: 8px; line-height: 1;">Tell Joke</button>
          <button type="button" class="btn-90s btn-mascot-action" data-action="fact" style="padding: 1px 4px; min-width: auto; font-size: 8px; line-height: 1;">Tell Fact</button>
        </div>
      </div>
      <img src="assets/misc/bytebot-mascot.svg" alt="ByteBoy Mascot" class="byteboy-img">
    `;

    this.desktop.appendChild(this.el);
    this.initDraggableMascot(this.el);
    this.bindMascotActions(this.el);
    
    if (this.sound) {
      this.sound.beep(800, 0.1, "sine", 0.05);
      setTimeout(() => this.sound.beep(1000, 0.08, "sine", 0.05), 100);
    }

    const closeBtn = this.el.querySelector(".byteboy-close");
    closeBtn.addEventListener("click", () => this.dismiss());

    this.activeTimeout = setTimeout(() => this.dismiss(), 25000);
  }

  celebrate(text) {
    if (document.getElementById("bsod") && !document.getElementById("bsod").hidden) return;
    
    if (this.el) {
      const container = this.el;
      container.remove();
      this.el = null;
      clearTimeout(this.activeTimeout);
    }

    this.el = document.createElement("div");
    this.el.className = "byteboy-container";
    this.el.innerHTML = `
      <div class="byteboy-bubble celebrate">
        <div class="byteboy-bubble-header">
          <span>ByteBoy Achievement!</span>
          <button type="button" class="byteboy-close" aria-label="Dismiss">×</button>
        </div>
        <p class="byteboy-text">${text}</p>
        <div class="byteboy-actions" style="margin-top: 6px; display: flex; gap: 6px;">
          <button type="button" class="btn-90s btn-mascot-action" data-action="joke" style="padding: 1px 4px; min-width: auto; font-size: 8px; line-height: 1;">Tell Joke</button>
          <button type="button" class="btn-90s btn-mascot-action" data-action="fact" style="padding: 1px 4px; min-width: auto; font-size: 8px; line-height: 1;">Tell Fact</button>
        </div>
      </div>
      <img src="assets/misc/bytebot-mascot.svg" alt="ByteBoy Mascot" class="byteboy-img">
    `;

    this.desktop.appendChild(this.el);
    this.initDraggableMascot(this.el);
    this.bindMascotActions(this.el);
    
    if (this.sound) {
      this.sound.success();
    }

    const closeBtn = this.el.querySelector(".byteboy-close");
    closeBtn.addEventListener("click", () => this.dismiss());

    this.activeTimeout = setTimeout(() => this.dismiss(), 20000);
  }

  initDraggableMascot(container) {
    let isDragging = false;
    let startX = 0, startY = 0;
    let initialX = 0, initialY = 0;

    const img = container.querySelector(".byteboy-img");
    if (!img) return;

    img.style.cursor = "move";

    const onStart = (clientX, clientY) => {
      isDragging = true;
      startX = clientX;
      startY = clientY;
      
      const rect = container.getBoundingClientRect();
      const desktopRect = this.desktop.getBoundingClientRect();
      
      initialX = rect.left - desktopRect.left;
      initialY = rect.top - desktopRect.top;
      
      container.style.bottom = "auto";
      container.style.right = "auto";
      container.style.left = `${initialX}px`;
      container.style.top = `${initialY}px`;
    };

    const onMove = (clientX, clientY) => {
      if (!isDragging) return;
      const dx = clientX - startX;
      const dy = clientY - startY;
      
      const maxW = this.desktop.clientWidth - container.offsetWidth;
      const maxH = this.desktop.clientHeight - container.offsetHeight;
      
      const x = Math.max(0, Math.min(initialX + dx, maxW));
      const y = Math.max(0, Math.min(initialY + dy, maxH));
      
      container.style.left = `${x}px`;
      container.style.top = `${y}px`;
    };

    const onEnd = () => {
      isDragging = false;
    };

    img.addEventListener("mousedown", (e) => {
      e.preventDefault();
      onStart(e.clientX, e.clientY);
      
      const moveHandler = (evt) => onMove(evt.clientX, evt.clientY);
      const upHandler = () => {
        onEnd();
        document.removeEventListener("mousemove", moveHandler);
        document.removeEventListener("mouseup", upHandler);
      };
      
      document.addEventListener("mousemove", moveHandler);
      document.addEventListener("mouseup", upHandler);
    });

    img.addEventListener("touchstart", (e) => {
      const touch = e.touches[0];
      if (!touch) return;
      onStart(touch.clientX, touch.clientY);
      
      const moveHandler = (evt) => {
        const t = evt.touches[0];
        if (t) onMove(t.clientX, t.clientY);
      };
      const endHandler = () => {
        onEnd();
        document.removeEventListener("touchmove", moveHandler);
        document.removeEventListener("touchend", endHandler);
      };
      
      document.addEventListener("touchmove", moveHandler, { passive: false });
      document.addEventListener("touchend", endHandler);
    });
  }

  bindMascotActions(container) {
    const jokeBtn = container.querySelector("[data-action='joke']");
    const factBtn = container.querySelector("[data-action='fact']");
    
    const jokes = [
      "Why do programmers wear glasses? Because they can't C#! 🤓",
      "There are 10 types of people: those who understand binary, and those who don't! 🤖",
      "A SQL query walks into a bar, walks up to two tables and asks, 'Can I join you?' 🍺",
      "How many programmers does it take to change a lightbulb? None, that's a hardware problem! 💡",
      "Why did the database administrator leave his wife? She had one-to-many relationships! 💔",
      "What is a programmer's favorite hangout place? Foo Bar! 🍸",
      "A computer once beat me at chess, but it was no match for me at kickboxing! 🥊"
    ];
    
    const facts = [
      "Sumit's core backend systems have boosted enterprise throughput by 23%! Now that's performance! ⚡",
      "Did you know? Sumit maintains 85% unit test coverage in enterprise Java/Spring Boot code! 🧪",
      "Spot Award Winner! Sumit was awarded by Intellect Design Arena for outstanding project delivery! 🏆",
      "Sumit built asynchronous Apache Kafka event pipelines that cut database latency to 40ms! 🏎️",
      "Clippy was introduced in Office 97. The real name of the character is Clippit! 📎",
      "The first computer bug was an actual real moth trapped inside a relay in an Harvard Mark II computer in 1947! 🐛"
    ];

    if (jokeBtn) {
      jokeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        clearTimeout(this.activeTimeout);
        this.activeTimeout = setTimeout(() => this.dismiss(), 25000);
        
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        container.querySelector(".byteboy-text").textContent = randomJoke;
        this.sound.beep(800, 0.1, "sine", 0.05);
      });
    }
    
    if (factBtn) {
      factBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        clearTimeout(this.activeTimeout);
        this.activeTimeout = setTimeout(() => this.dismiss(), 25000);

        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        container.querySelector(".byteboy-text").textContent = randomFact;
        this.sound.beep(800, 0.1, "sine", 0.05);
      });
    }
  }

  dismiss() {
    if (!this.el) return;
    clearTimeout(this.activeTimeout);
    const container = this.el;
    container.classList.add("fade-out");
    setTimeout(() => {
      if (this.el === container) {
        container.remove();
        this.el = null;
      }
    }, 400);
  }

  scheduleNext() {
    const delay = 40000 + Math.random() * 30000;
    setTimeout(() => {
      this.show();
      this.scheduleNext();
    }, delay);
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
    if (win.tooltip) {
      icon.setAttribute("data-tooltip", win.tooltip);
    }
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
    resume: renderResumeWindow,
    terminal: renderStandaloneTerminal,
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
   Wallpaper Animation Layer
   ========================================================================== */

function initWallpaperAnimation() {
  const container = document.querySelector(".wallpaper-animation-container");
  if (!container) return;

  container.innerHTML = "";

  // Floating Pixels
  for (let i = 0; i < 20; i++) {
    const pixel = document.createElement("div");
    pixel.className = "floating-pixel";
    pixel.style.left = `${Math.random() * 100}%`;
    pixel.style.top = `${Math.random() * 100}%`;
    pixel.style.animationDelay = `${Math.random() * 15}s`;
    pixel.style.animationDuration = `${12 + Math.random() * 10}s`;
    container.appendChild(pixel);
  }

  // Tiny Twinkling Stars (mostly top half)
  for (let i = 0; i < 15; i++) {
    const star = document.createElement("div");
    star.className = "tiny-star";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 45}%`;
    star.style.animationDelay = `${Math.random() * 6}s`;
    star.style.animationDuration = `${2 + Math.random() * 3}s`;
    container.appendChild(star);
  }

  // Horizontal Floating Retro Clouds
  for (let i = 0; i < 3; i++) {
    const cloud = document.createElement("div");
    cloud.className = "moving-cloud";
    cloud.style.top = `${8 + i * 15}%`;
    cloud.style.animationDelay = `${i * 15}s`;
    cloud.style.animationDuration = `${45 + i * 25}s`;
    container.appendChild(cloud);
  }
}


/* ==========================================================================
   App Init
   ========================================================================== */

function applyTheme(theme) {
  if (theme === "synthwave") {
    document.body.classList.add("theme-synthwave");
  } else {
    document.body.classList.remove("theme-synthwave");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  applyMobileModeClass();

  const savedTheme = localStorage.getItem("retro_portfolio_theme") || "teal";
  applyTheme(savedTheme);

  const sound = new SoundEngine();
  const wm = new WindowManager(sound);
  const winamp = new WinampPlayer(sound);
  const recycleBin = new RecycleBinManager(sound);

  const hitCount = incrementHitCounter();
  renderHitCounter(hitCount);

  buildDesktopIcons(wm, recycleBin);
  buildStartMenu(wm);
  initWallpaperAnimation();
  const notifier = new NotificationManager(sound);
  window.mascot = new ByteBoyMascot(sound);
  
  // Show mascot immediately on load so the user can interact right away
  setTimeout(() => {
    if (window.mascot) window.mascot.show();
  }, 1000);

  document.addEventListener("mousemove", (e) => wm.onMouseMove(e));
  document.addEventListener("mouseup", () => wm.onMouseUp());
  document.addEventListener("touchmove", (e) => wm.onTouchMove(e), { passive: false });
  document.addEventListener("touchend", () => wm.onMouseUp());
  document.addEventListener("touchcancel", () => wm.onMouseUp());

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
  const soundVolume = document.getElementById("sound-volume");

  // Sync initial UI state with SoundEngine (which loads from LocalStorage)
  soundToggle.classList.toggle("active", !sound.enabled);
  soundToggle.textContent = sound.enabled ? "🔊" : "🔇";
  soundVolume.value = Math.round(sound.volume * 100);

  soundToggle.addEventListener("click", () => {
    sound.toggle();
    const isMuted = !sound.enabled;
    soundToggle.classList.toggle("active", isMuted);
    soundToggle.textContent = sound.enabled ? "🔊" : "🔇";
    if (sound.enabled) sound.click();
  });

  soundVolume.addEventListener("input", (e) => {
    const val = parseFloat(e.target.value) / 100;
    sound.setVolume(val);
    if (val > 0 && !sound.enabled) {
      sound.toggle(true);
      soundToggle.classList.remove("active");
      soundToggle.textContent = "🔊";
    } else if (val === 0 && sound.enabled) {
      sound.toggle(false);
      soundToggle.classList.add("active");
      soundToggle.textContent = "🔇";
    }
  });

  soundVolume.addEventListener("change", () => {
    if (sound.enabled) sound.click();
  });

  document.querySelector("[data-action='winamp-minimize']").addEventListener("click", () => {
    document.getElementById("winamp").classList.toggle("minimized");
    sound.minimize();
  });

  runBootSequence(() => {
    sound.startup();
  });

  // Today's Mood widget logic
  const moods = [
    "Writing APIs...",
    "Refactoring reality...",
    "Drinking coffee...",
    "Debugging destiny...",
    "Deploying dreams...",
    "Brewing Java...",
    "Routing events...",
    "Chasing bugs..."
  ];
  const moodTextEl = document.getElementById("mood-text");
  const moodWidgetEl = document.getElementById("mood-widget");
  if (moodTextEl && moodWidgetEl) {
    let currentMoodIndex = Math.floor(Math.random() * moods.length);
    moodTextEl.textContent = moods[currentMoodIndex];

    moodWidgetEl.addEventListener("click", () => {
      let nextIndex;
      do {
        nextIndex = Math.floor(Math.random() * moods.length);
      } while (nextIndex === currentMoodIndex && moods.length > 1);
      
      currentMoodIndex = nextIndex;
      moodTextEl.textContent = moods[currentMoodIndex];
      
      // Play retro audio click
      if (sound) sound.click();
      
      // ByteBoy Mascot reaction
      if (window.mascot) {
        const reactions = [
          "Sumit is working hard! Let's cheer him on! ☕☕",
          "That mood is so retro! I love it! 💾✨",
          "Keep coding, Sumit! You've got this! 🧪🚀",
          "A solid developer mood. Time to commit! ⚙️😎"
        ];
        window.mascot.celebrate(reactions[Math.floor(Math.random() * reactions.length)]);
      }
    });
  }

  updateClock();
  setInterval(updateClock, 30000);
});

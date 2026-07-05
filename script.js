const skills = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Tailwind"]
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "MongoDB", "SQL", "APIs"]
  },
  {
    title: "ML / Data",
    items: ["Python", "NumPy", "Pandas", "scikit-learn", "TensorFlow"]
  },
  {
    title: "Cybersecurity",
    items: ["Networking", "Linux", "Security Basics"]
  },
  {
    title: "DevOps & Tools",
    items: ["Git", "GitHub", "Docker"]
  },
  {
    title: "Core Concepts",
    items: ["DSA", "OOP", "DBMS", "OS"]
  }
];

const projects = [
  {
    title: "AI/ML Phishing Detection and Prevention System",
    type: "Cybersecurity",
    status: "Shipped",
    featured: true,
    description: "A working starter system for detecting and preventing phishing attempts in URLs and short messages using ML, feature extraction, and prevention-focused risk decisions.",
    stack: ["HTML", "CSS", "JavaScript", "Python", "http.server", "Naive Bayes", "CSV", "JSON", "Render"],
    features: [
      "Hybrid AI/ML phishing detection with rule-based security checks.",
      "Explainable 0-100 risk scoring with reasons like unsafe HTTP links, shortened URLs, and credential-stealing keywords.",
      "Prevention engine that recommends allow, review, warn, or block actions."
    ],
    github: "https://github.com/ChestaGupta19/ai-ml-phishing-detection-system"
  }
];

const skillCards = document.querySelector("#skillCards");
const projectsGrid = document.querySelector("#projectsGrid");
const themeToggle = document.querySelector("#themeToggle");
const bootScreen = document.querySelector("#bootScreen");

function renderSkills() {
  skillCards.innerHTML = skills.map((group) => `
    <article class="skill-category">
      <h3>${group.title}</h3>
      <div class="chips">
        ${group.items.map((item) => `<span>${item}</span>`).join("")}
      </div>
    </article>
  `).join("");
}

function renderProjects() {
  projectsGrid.innerHTML = projects.map((project) => `
    <article class="project-card ${project.featured ? "featured" : ""}">
      <span class="project-meta">${project.status} / ${project.type}</span>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="chips">
        ${project.stack.map((item) => `<span>${item}</span>`).join("")}
      </div>
      <ul class="feature-list">
        ${project.features.map((feature) => `<li>${feature}</li>`).join("")}
      </ul>
      <div class="project-actions">
        ${project.github ? `<a class="btn primary" href="${project.github}" target="_blank" rel="noreferrer">GitHub</a>` : ""}
      </div>
    </article>
  `).join("");
}

function setupTheme() {
  const savedTheme = localStorage.getItem("portfolio-theme");
  if (savedTheme) {
    document.documentElement.dataset.theme = savedTheme;
    themeToggle.querySelector(".toggle-icon").textContent = savedTheme === "dark" ? "L" : "D";
  }

  themeToggle.addEventListener("click", () => {
    const current = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = current;
    localStorage.setItem("portfolio-theme", current);
    themeToggle.querySelector(".toggle-icon").textContent = current === "dark" ? "L" : "D";
  });
}

function setupBootScreen() {
  window.addEventListener("load", () => {
    setTimeout(() => bootScreen.classList.add("hide"), 900);
  });
}

function setupMatrixCanvas() {
  const canvas = document.querySelector("#matrixCanvas");
  const context = canvas.getContext("2d");
  const characters = "01<>/{}[]AI ML CYBER FRONTEND";
  const fontSize = 16;
  let columns = 0;
  let drops = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = document.querySelector(".hero").offsetHeight;
    columns = Math.floor(canvas.width / fontSize);
    drops = Array.from({ length: columns }, () => Math.random() * canvas.height);
  }

  function draw() {
    context.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--bg").trim() + "18";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--cyan").trim();
    context.font = `${fontSize}px JetBrains Mono`;

    drops.forEach((y, index) => {
      const text = characters[Math.floor(Math.random() * characters.length)];
      const x = index * fontSize;
      context.fillText(text, x, y);
      drops[index] = y > canvas.height + Math.random() * 800 ? 0 : y + fontSize;
    });

    requestAnimationFrame(draw);
  }

  resize();
  draw();
  window.addEventListener("resize", resize);
}

renderSkills();
renderProjects();
setupTheme();
setupBootScreen();
setupMatrixCanvas();

// ── PROJECT DATA ──
const projects = [
  {
    title: "Task Tracker App",
    description: "To-do list app – add, complete, and delete tasks; also tracks completion progress.",
    tags: ["HTML", "CSS", "JavaScript", "DOM"],
    link: "https://github.com/lithikacse24-lab/lithika-tasktracker"
  },
  {
    title: "Quiz App",
    description: "Simple quiz app that tests knowledge with multiple-choice questions, provides instant feedback, and tracks scores.",
    tags: ["HTML", "CSS", "JavaScript", "DOM"],
    link: "https://github.com/lithikacse24-lab/lithika-quizapp"
  }
];

// ── SKILLS ──
const skills = ["C","C++","Java","SQL","HTML","CSS","JavaScript","Python","Git","Figma"];
const softSkills = ["Problem Solving","Teamwork","Communication","Adaptability","Time Management","Creativity"];
const languages = ["English", "Tamil", "Hindi"];

// ── RENDER PROJECTS ──
function renderProjects() {
  const grid = document.querySelector("#projects-grid");
  grid.innerHTML = "";
  for (const project of projects) {
    const tagsHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join("");
    const cardHTML = `
      <div class="project-card">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tags">${tagsHTML}</div>
        <a href="${project.link}" target="_blank" class="card-link">View on GitHub →</a>
      </div>`;
    grid.innerHTML += cardHTML;
  }
}

// ── RENDER SKILLS ──
function renderSkills() {
  const list = document.querySelector("#skills-list");
  skills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    li.classList.add("skill-item");
    list.appendChild(li);
  });

  const softList = document.querySelector("#soft-skills-list");
  softSkills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    li.classList.add("skill-item");
    softList.appendChild(li);
  });

  const langList = document.querySelector("#languages-list");
  languages.forEach(lang => {
    const li = document.createElement("li");
    li.textContent = lang;
    li.classList.add("skill-item");
    langList.appendChild(li);
  });
}

// ── NAVBAR SCROLL EFFECT ──
const navbar = document.querySelector("#navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ── ACTIVE NAV LINK ──
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const top = section.offsetTop - 100;
    const bottom = top + section.offsetHeight;
    if (window.scrollY >= top && window.scrollY < bottom) {
      navLinks.forEach(a => a.classList.remove("active"));
      const active = document.querySelector(`a[href="#${section.id}"]`);
      if (active) active.classList.add("active");
    }
  });
});

// ── RUN ON PAGE LOAD ──
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderSkills();
});
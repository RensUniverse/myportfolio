// ============Menu Bar=============

document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu');
    const navMenu = document.querySelector('header .nav');

    menuIcon.addEventListener('click', function () {
        navMenu.classList.toggle('show');
    });
});


// ========================ABOUT=========================
document.addEventListener('DOMContentLoaded', function () {

    const aboutSection = document.getElementById('about'); 
    let scrollPosition = window.scrollY;

    function revealOnScroll() {
        const revealPosition = aboutSection.offsetTop + (aboutSection.offsetHeight / 7);
        const windowBottom = scrollPosition + window.innerHeight;
        const revealClass = 'animate'; 

        if (windowBottom >= revealPosition) {
            aboutSection.classList.add(revealClass);
        } else {
            aboutSection.classList.remove(revealClass);
        }
    }

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleAnimation() {
        if (isInViewport(aboutSection)) {
            aboutSection.classList.add('animate');
        }
    }

    document.addEventListener('scroll', () => {
        scrollPosition = window.scrollY;
        revealOnScroll();
    });


    handleAnimation();
});


// ========================FEATURES=========================
document.addEventListener('DOMContentLoaded', function () {
    const featureSection = document.getElementById('feature');
    const header = document.querySelector('#feature .feature-header');
    const boxContainer = document.querySelector('#feature .box-container');

    let scrollPosition = window.scrollY;

    function revealOnScroll() {
        const revealPosition = featureSection.offsetTop + (featureSection.offsetHeight / 7);
        const windowBottom = scrollPosition + window.innerHeight;
        const revealClass = 'animate';

        if (windowBottom >= revealPosition) {
            header.classList.add(revealClass);
            boxContainer.classList.add(revealClass);
        } else {
            header.classList.remove(revealClass);
            boxContainer.classList.remove(revealClass);
        }
    }

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleAnimation() {
        if (isInViewport(featureSection)) {
            header.classList.add('animate');
            boxContainer.classList.add('animate');
        }
    }

    document.addEventListener('scroll', () => {
        scrollPosition = window.scrollY;
        revealOnScroll();
    });

    handleAnimation();
});


// ========================FAQS=========================
document.addEventListener('DOMContentLoaded', function () {
    const faqsSection = document.getElementById('faqs');
    const leftFaqs = document.querySelector('#faqs .left-faqs');
    const rightFaqs = document.querySelector('#faqs .right-faqs');

    let scrollPosition = window.scrollY;

    function revealOnScroll() {
        const revealPosition = faqsSection.offsetTop + (faqsSection.offsetHeight / 7);
        const windowBottom = scrollPosition + window.innerHeight;
        const revealClass = 'animate';

        if (windowBottom >= revealPosition) {
            leftFaqs.classList.add(revealClass);
            rightFaqs.classList.add(revealClass);
        } else {
            leftFaqs.classList.remove(revealClass);
            rightFaqs.classList.remove(revealClass);
        }
    }

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleAnimation() {
        if (isInViewport(faqsSection)) {
            leftFaqs.classList.add('animate');
            rightFaqs.classList.add('animate');
        }
    }

    document.addEventListener('scroll', () => {
        scrollPosition = window.scrollY;
        revealOnScroll();
    });

    handleAnimation();
});


// ========================MOBILE FAQS=========================
document.addEventListener('DOMContentLoaded', function () {
    const mobFaqsSection = document.querySelector('.mob-faqs');

    let scrollPosition = window.scrollY;

    function revealOnScroll() {
        const revealPosition = mobFaqsSection.offsetTop + (mobFaqsSection.offsetHeight / 7);
        const windowBottom = scrollPosition + window.innerHeight;
        const revealClass = 'animate';

        if (windowBottom >= revealPosition) {
            mobFaqsSection.classList.add(revealClass);
        } else {
            mobFaqsSection.classList.remove(revealClass);
        }
    }

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleAnimation() {
        if (isInViewport(mobFaqsSection)) {
            mobFaqsSection.classList.add('animate');
        }
    }

    document.addEventListener('scroll', () => {
        scrollPosition = window.scrollY;
        revealOnScroll();
    });

    handleAnimation();
});


// ==================FOOTER=========
document.addEventListener('DOMContentLoaded', function () {
    const footerSection = document.querySelector('.footer');
    const footerBottom = document.querySelector('.footer-bottom');

    let scrollPosition = window.scrollY;

    function revealOnScroll() {
        const revealPosition = footerSection.offsetTop + (footerSection.offsetHeight / 4);
        const windowBottom = scrollPosition + window.innerHeight;
        const revealClass = 'animate';

        if (windowBottom >= revealPosition) {
            footerSection.classList.add(revealClass);
        } else {
            footerSection.classList.remove(revealClass);
        }

        const bottomRevealPosition = footerBottom.offsetTop + (footerBottom.offsetHeight / 2);

        if (windowBottom >= bottomRevealPosition) {
            footerBottom.classList.add(revealClass);
        } else {
            footerBottom.classList.remove(revealClass);
        }
    }

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleAnimation() {
        if (isInViewport(footerSection)) {
            footerSection.classList.add('animate');
        }

        if (isInViewport(footerBottom)) {
            footerBottom.classList.add('animate');
        }
    }

    document.addEventListener('scroll', () => {
        scrollPosition = window.scrollY;
        revealOnScroll();
    });

    handleAnimation();
});


//==========================================================
document.querySelectorAll('.info-card').forEach((card, index) => {
  const title = card.querySelector('h3').textContent;
  const desc = card.querySelector('p').textContent;
  const link = card.querySelector('.card-btn');

  const projectId = index + 1;
  link.href = `work.html?project=${projectId}&title=${encodeURIComponent(title)}&desc=${encodeURIComponent(desc)}`;
});

function getQueryParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

const projectId = getQueryParam("project");
const titleFromUrl = getQueryParam("title");
const descFromUrl = getQueryParam("desc");

const projects = {
  1: {
    title: "Intelligent Faculty Evaluation System (Solo Thesis)",
    desc: "A system that collects student comments and uses NLP to analyze sentiments for teacher evaluations.",
    images: ["images/1.png", "images/2.png", "images/3.png", "images/4.png", "images/5.png"],
    technologies: [
      { name: "Python", class: "text-bg-primary" },
      { name: "JavaScript", class: "text-bg-warning text-dark" },
      { name: "Node.js", class: "text-bg-success" },
      { name: "Express.js", class: "text-bg-warning" },
      { name: "HTML", class: "text-bg-info text-dark" },
      { name: "CSS", class: "text-bg-danger" }
    ]
  },
  2: {
    title: "University Clinic Appointing System (School Project)",
    desc: "Designed to provide efficient platform for scheduling appointments in the school clinic",
    images: ["images/1.1.png", "images/1.2.png", "images/1.3.png", "images/1.4.png", "images/1.5.png"],
    technologies: [
      { name: "Java", class: "text-bg-primary" },
      { name: "MySQL", class: "text-bg-success" },
      { name: "OOP", class: "text-bg-secondary" }
    ]
  },
  3: {
    title: "Social Note-Sharing Web Application (Group Thesis)",
    desc: "CoNotes enables users to share notes, thoughts, and perspectives, similar to Twitter.",
    images: ["images/3.1.png", "images/3.2.png", "images/3.3.png", "images/3.4.png", "images/3.5.png"],
    technologies: [
      { name: "Python", class: "text-bg-primary" },
      { name: "JavaScript", class: "text-bg-warning text-dark" },
      { name: "PHP", class: "text-bg-info text-dark " },
      { name: "HTML", class: "text-bg-info text-dark" },
      { name: "MySQL", class: "text-bg-success" },
      { name: "CSS", class: "text-bg-danger" }
    ]
  },
  4: {
    title: "Coffee Shop Point of Sale System (School Project)",
    desc: "POS that automate the order and payment process with a user-friendly interface and inventory tracking",
    images: ["images/2.1.png", "images/2.2.png", "images/2.3.png", "images/2.4.png", "images/2.5.png"],
    technologies: [
      { name: "C#", class: "text-bg-danger" },
      { name: "MySQL", class: "text-bg-success" }
    ]
  }
};

const imgContainer = document.getElementById("img-container");

if (projectId && projects[projectId]) {
  const project = projects[projectId];
  document.querySelector(".feature-header h3").textContent = project.title;
  document.querySelector(".feature-body h2").textContent = project.desc;

  // Image slider
  imgContainer.innerHTML = `
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        ${project.images.map((_, i) => `
          <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="${i}"
            class="${i === 0 ? 'active' : ''}" aria-current="${i === 0 ? 'true' : 'false'}"
            aria-label="Slide ${i + 1}"></button>`).join('')}
      </div>
      <div class="carousel-inner">
        ${project.images.map((src, i) => `
          <div class="carousel-item ${i === 0 ? 'active' : ''}" data-bs-interval="${(i + 1) * 2000}">
            <img src="${src}" class="d-block w-100" alt="${project.title}">
          </div>`).join('')}
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  `;

  const plContainer = document.querySelector('.pl');
  plContainer.innerHTML = '<h4 class="mt-4">Technologies Used</h4>';
  project.technologies.forEach(tech => {
    const span = document.createElement('span');
    span.className = `badge ${tech.class} fs-6 me-2 mb-2`;
    span.textContent = tech.name;
    plContainer.appendChild(span);
  });

  const carouselElement = document.querySelector('#carouselExampleInterval');
  new bootstrap.Carousel(carouselElement, {
    interval: 2000,
    pause: 'hover',
    ride: 'carousel'
  });

} else if (titleFromUrl && descFromUrl) {
  document.querySelector(".feature-header h3").textContent = decodeURIComponent(titleFromUrl);
  document.querySelector(".feature-header h2").textContent = decodeURIComponent(descFromUrl);
  imgContainer.innerHTML = "";
}

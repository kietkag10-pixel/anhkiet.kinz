// Portfolio JavaScript

// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500);
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero Animation
gsap.from("#hero h1", {
    duration: 1.5,
    y: 100,
    opacity: 0,
    ease: "power3.out"
});

gsap.from("#hero p", {
    duration: 1.5,
    y: 50,
    opacity: 0,
    delay: 0.5,
    ease: "power3.out"
});

gsap.from("#hero a", {
    duration: 1,
    y: 30,
    opacity: 0,
    delay: 1,
    ease: "power3.out"
});

// Scroll Reveal Animations
gsap.utils.toArray('.skill-card').forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });
});

gsap.utils.toArray('.project-card').forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });
});

gsap.utils.toArray('.timeline-item').forEach(item => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });
});

// Skill Bars Animation
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.setProperty('--width', width);
    });
}

// Trigger skill bars animation when skills section is in view
ScrollTrigger.create({
    trigger: "#skills",
    start: "top 80%",
    onEnter: animateSkillBars
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('bg-black', 'bg-opacity-80');
    } else {
        navbar.classList.remove('bg-black', 'bg-opacity-80');
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Custom Cursor
const cursor = document.createElement('div');
const cursorFollow = document.createElement('div');
cursor.className = 'cursor';
cursorFollow.className = 'cursor-follow';
document.body.appendChild(cursor);
document.body.appendChild(cursorFollow);

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;
let followX = 0, followY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function updateCursor() {
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;
    followX += (mouseX - followX) * 0.05;
    followY += (mouseY - followY) * 0.05;

    cursor.style.transform = `translate(${cursorX - 10}px, ${cursorY - 10}px)`;
    cursorFollow.style.transform = `translate(${followX - 20}px, ${followY - 20}px)`;

    requestAnimationFrame(updateCursor);
}
updateCursor();

// Hover effects for interactive elements
document.querySelectorAll('a, button, .skill-card, .project-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = `translate(${mouseX - 10}px, ${mouseY - 10}px) scale(1.5)`;
        cursorFollow.style.transform = `translate(${mouseX - 20}px, ${mouseY - 20}px) scale(1.5)`;
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = `translate(${mouseX - 10}px, ${mouseY - 10}px) scale(1)`;
        cursorFollow.style.transform = `translate(${mouseX - 20}px, ${mouseY - 20}px) scale(1)`;
    });
});

// Parallax Effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.getElementById('hero');
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
});

// Form Submission (Placeholder)
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Cảm ơn bạn đã liên hệ! Tôi sẽ phản hồi sớm nhất có thể.');
});

// Initialize Particles.js (if available)
if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
            move: { enable: true, speed: 2, direction: 'none', random: true, straight: false, out_mode: 'out' }
        },
        interactivity: {
            detect_on: 'canvas',
            events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
            modes: { repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 } }
        },
        retina_detect: true
    });
}
// 1. Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const closeNav = document.getElementById('closeNav');

// 2. Scroll reveal animation for sections
const revealElements = document.querySelectorAll('section, .project-card');
const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
    revealElements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            el.classList.add('show');
        }
    });
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// 3. Dynamic year in footer
const footer = document.querySelector('.portfolio-footer');
if (footer) {
    footer.innerHTML = `&copy; ${new Date().getFullYear()} Daramola Femi. All rights reserved.`;
}

// 4. Animate skill bars when in view
function animateSkillBars() {
    document.querySelectorAll('.skill-level').forEach(bar => {
        const card = bar.closest('.skill-card');
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
            bar.style.width = bar.style.getPropertyValue('--level');
        }
    });
}
window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);



// 5. Add 'loaded' class to body on window load
window.addEventListener('load', () => document.body.classList.add('loaded'));

// Responsive nav toggle that showed me pepper
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.add('open');
    });
    
    // just so you know this motherfucker works
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => navLinks.classList.remove('open'));
    });

     closeNav.addEventListener('click', ()=>{
            navLinks.classList.remove('open');
            console.log('dara');
            
        })

}



// --- Testimonial Slider (Autoplay Only) ---

const testimonialCards = document.querySelectorAll('.testimonial-card');
let testimonialIndex = 0;

function showTestimonial(idx) {
    testimonialCards.forEach((card, i) => {
        card.classList.toggle('active', i === idx);
    });
}

function nextTestimonial() {
    testimonialIndex = (testimonialIndex + 1) % testimonialCards.length;
    showTestimonial(testimonialIndex);
}

if (testimonialCards.length) {
    showTestimonial(testimonialIndex);
    setInterval(nextTestimonial, 5000); // Change every 5 seconds
}
// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        navMenu.classList.remove('active');
    }
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.98)';
    } else {
        navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
    }
});

// Contact form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        
        // Show success message (you can integrate with a backend service like Formspree, Nodemailer, etc.)
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Message Sent!';
        submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        
        // Reset form
        contactForm.reset();
        
        // Restore button after 2 seconds
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = '';
        }, 2000);
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.project-card, .blog-card, .testimonial-card, .timeline-item, .highlight-box').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Typed effect for hero title (optional)
function typeEffect(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Animate counter numbers
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Animate stats on scroll
const statsSection = document.querySelector('.stats');
let hasAnimated = false;

if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                document.querySelectorAll('.stat h3').forEach(stat => {
                    const value = parseInt(stat.textContent);
                    if (!isNaN(value)) {
                        animateCounter(stat, value);
                    }
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statsObserver.observe(statsSection);
}

// Dark/Light mode toggle (optional - you can add a toggle button in navbar)
function initThemeToggle() {
    const isDark = localStorage.getItem('theme') === 'dark';
    if (isDark) {
        document.documentElement.style.colorScheme = 'dark';
    }
}

initThemeToggle();

// Scroll to top button
function createScrollToTopBtn() {
    const btn = document.createElement('button');
    btn.id = 'scrollToTop';
    btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    btn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #6366f1, #8b5cf6);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        transition: all 0.3s ease;
        font-size: 1.2rem;
        z-index: 999;
        display: none;
    `;
    
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.style.display = 'flex';
            btn.style.alignItems = 'center';
            btn.style.justifyContent = 'center';
            setTimeout(() => {
                btn.style.opacity = '1';
            }, 10);
        } else {
            btn.style.opacity = '0';
            setTimeout(() => {
                btn.style.display = 'none';
            }, 300);
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

createScrollToTopBtn();

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Active nav link highlighting
function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 300) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = 'var(--primary-color)';
        } else {
            link.style.color = 'var(--text-secondary)';
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrollY = window.scrollY;
        const boxes = document.querySelectorAll('.floating-box');
        boxes.forEach((box, index) => {
            box.style.transform = `translateY(${scrollY * (0.3 + index * 0.1)}px)`;
        });
    }
});

console.log('Portfolio loaded successfully!');

document.addEventListener('DOMContentLoaded', function() {

    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const track = document.querySelector('.testimonials-track');
    const cards = document.querySelectorAll('.testimonial-card');
    let currentIndex = 0;

    const totalCards = cards.length;

    const moveCarousel = (direction) => {
        if (direction === 'next') {
            if (currentIndex < totalCards - 1) {
                currentIndex++;
            } else {
                currentIndex = 0; // Vuelve al primer testimonio
            }
        } else if (direction === 'prev') {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = totalCards - 1; // Vuelve al último testimonio
            }
        }

        const offset = -currentIndex * 100; // Mueve el carrusel al siguiente testimonio
        track.style.transform = `translateX(${offset}%)`;
    };

    prevButton.addEventListener('click', () => moveCarousel('prev'));
    nextButton.addEventListener('click', () => moveCarousel('next'));


    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });


    // Configurar el botón de enviar
    document.getElementById('submitBtn').addEventListener('click', function(e) {
        e.preventDefault();

        if(!document.getElementById('terms').checked) {
            alert('Please accept the Terms & Conditions');
            return;
        }

        document.getElementById('thankYouMessage').style.display = 'flex';
        document.querySelector('.contact-us').reset();
    });

    // Configurar el botón de cerrar
    document.querySelector('.thank-you-close-btn').addEventListener('click', function() {
        document.getElementById('thankYouMessage').style.display = 'none';
    });


    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            authButtons.classList.remove('active');
        });
    });
});

const translations = {
    english: {
        "features": "WHY EDUHIVE",
        "testimonials": "TESTIMONIES",
        "news": "NEWS",
        "contact": "CONTACT",
        "login-btn": "LOGIN",
        "register-btn": "REGISTER",
        "dark-mode-dark": "Dark mode",
        "dark-mode-light": "Light mode",
        "hero-title": "Explore, Learn, Grow",
        "hero-description": "&quot;Access high-quality courses designed to boost your academic<br>and professional growth, from anywhere,<br>at any time.&quot;",
        "search-placeholder": "Search course ...",
        "features-title": "Why choose EduHive?",
        "features-subtitle": "Explore a platform designed to help you learn faster, easier, and at your own pace.",
        "feature1-text": "HD Videos",
        "feature2-text": "Professional Mentors",
        "feature3-text": "Saves per Month",
        "feature4-text": "Life Time Access",
        "feature-number": "Free",

        "about-product-title": "About the Product",
        "about-product-desc": "EduHive is an innovative educational platform designed to boost your learning with interactive resources, high-quality courses, and a personalized experience.",
        "about-team-title": "Meet the Team",
        "about-team-desc": "We are a team passionate about education and technology.",

        "section-title": "Explore Courses",
        "section-subtitle": "Discover a wide variety of courses designed to help you grow your skills and achieve your goals. Start your learning journey today!",
        "course1-title": "Photography",
        "course2-title": "Artificial Intelligence",
        "course3-title": "Architecture",
        "course4-title": "Geography",
        "course5-title": "Art",
        "course6-title": "ALL COURSE",
        "dream-title": "Take Your Knowledge<br>to the Next Level",
        "dream-description": "Discover everything you can achieve with our educational platform.",
        "dream-btn": "START LEARNING",

        "contact-us": "Say Hello to Us",
        "contact-description": "&quot;Your ideas are important to us.<br> Tell us about your project by completing this form and together we will find the best solution.&quot;",
        "label-name": "What is your name?",
        "label-email": "What is your email?",
        "label-phone": "What is your phone number?",
        "label-company": "What is your company?",
        "label-message": "Write your message here",
        "terms": "I have read and accept the Terms of<br>Service & Privacy Policy",
        "submit-btn": "Send Message",
        "thank-you1": "Thank you for contacting us!",
        "thank-you2": "We have received your message and we will contact you soon.",
        "thank-you-btn": "Close",

        "testimonials-title": "Testimonials",
        "testimonial-text1": "I learned from the most used tools to the most applied design theory in real projects.",
        "testimonial-profession1": "Graphic Designer and UX/UI",
        "testimonial-text2": "The modules were clear and practical, and the activities helped me apply what I learned.",
        "testimonial-profession2": "Digital Marketing for Beginners",
        "testimonial-text3": "This Data Science course is comprehensive, well-designed, and well-structured.",
        "testimonial-profession3": "Data Science Advanced",
        "testimonial-text4": "The concepts were explained in a clear and structured way, and I was able to learn at my own pace.",
        "testimonial-profession4": "Introduction to Programming",

        "lastest-updates": "Latest Updates",
        "course-title1": "Advanced cybersecurity",
        "course-desc1": "Ethical hacking and system protection<br>OWASP, Kali Linux, Metasploit",
        "course-title2": "Data Science with Python",
        "course-desc2": "Data analysis and machine learning<br>Technologies: Pandas, NumPy, Matplotlib, Scikit-learn",
        "course-title3": "Full Stack development",
        "course-desc3": "Full web application development<br>Technologies: React, Node.js, Express, MongoDB",

        "subscribe-title": "Subscribe to our newsletter",
        "subscribe-desc": "Leave your email and we will send you details about our educational courses and programs.",
        "newsletter-placeholder": "Enter your email address",
        "subscribe-btn": "Subscribe",

        "footer-copyright": "<i class=\"fas fa-copyright\"></i> 2025 <strong>Eduhive</strong>. Designed with <i class=\"fas fa-heart\" style=\"color: #ff0000;\"></i> for education.",
        "footer-company": "COMPANY",
        "footer-about-us": "About us",
        "footer-mission": "Mission",
        "footer-vision": "Vision",
        "footer-contact": "Contact",
        "footer-services": "SERVICES",
        "footer-online-courses": "Online Courses",
        "footer-challenges": "Challenges",
        "footer-tutoring": "Tutoring Services",
        "footer-consulting": "Educational Consulting",
        "footer-resources": "RESOURCES",
        "footer-blog": "Blog",
        "footer-help-center": "Help Center",
        "footer-ebooks": "E-books & Guides",

    },
    spanish: {
        "features": "POR QUÉ EDUHIVE",
        "testimonials": "TESTIMONIOS",
        "news": "NOTICIAS",
        "contact": "CONTACTO",
        "login-btn": "INICIAR SESIÓN",
        "register-btn": "REGISTRARSE",
        "dark-mode-dark": "Modo: oscuro",
        "dark-mode-light": "Modo: claro",
        "hero-title": "Explora, Aprende, Crece",
        "hero-description": "Accede a cursos de alta calidad diseñados para impulsar tu crecimiento<br>académico y profesional, desde cualquier lugar,<br>en cualquier momento.",
        "search-placeholder": "Buscar curso ...",
        "features-title": "¿Por qué elegir EduHive?",
        "features-subtitle": "Explora una plataforma diseñada para ayudarte a aprender más rápido, más fácil y a tu propio ritmo.",
        "feature1-text": "Videos HD",
        "feature2-text": "Mentores Profesionales",
        "feature3-text": "Ahorros por Mes",
        "feature4-text": "Acceso de por Vida",
        "feature-number": "Gratis",

        "about-product-title": "Sobre el producto",
        "about-product-desc": "EduHive es una plataforma educativa innovadora diseñada para potenciar tu aprendizaje con recursos interactivos, cursos de alta calidad y una experiencia personalizada.",
        "about-team-title": "Conócenos",
        "about-team-desc": "Somos un equipo apasionado por la educación y la tecnología.",

        "section-title": "Explora Cursos",
        "section-subtitle": "Descubre una amplia variedad de cursos diseñados para ayudarte a desarrollar tus habilidades y alcanzar tus metas. ¡Comienza tu viaje de aprendizaje hoy!",
        "course1-title": "Fotografía",
        "course2-title": "Inteligencia Artificial",
        "course3-title": "Arquitectura",
        "course4-title": "Geografía",
        "course5-title": "Arte",
        "course6-title": "TODOS LOS CURSOS",
        "dream-title": "Lleva Tu Conocimiento<br>al Siguiente Nivel",
        "dream-description": "Descubre todo lo que puedes lograr con nuestra plataforma educativa.",
        "dream-btn": "EMPEZAR A APRENDER",

        "contact-us": "Dile Hola a Nosotros",
        "contact-description": "&quot;Tus ideas son importantes para nosotros.<br> Cuéntanos sobre tu proyecto completando este formulario y juntos encontraremos la mejor solución.&quot;",
        "label-name": "¿Cuál es tu nombre?",
        "label-email": "¿Cuál es tu correo electrónico?",
        "label-phone": "¿Cuál es tu número de teléfono?",
        "label-company": "¿Cuál es tu empresa?",
        "label-message": "Escribe tu mensaje aquí",
        "terms": "He leído y acepto los Términos de<br>Servicio y la Política de Privacidad",
        "submit-btn": "Enviar Mensaje",
        "thank-you1": "¡Gracias por contactarnos!",
        "thank-you2": "Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.",
        "thank-you-btn": "Cerrar",

        "testimonials-title": "Testimonios",
        "testimonial-text1": "Aprendí desde las herramientas más utilizadas hasta la teoría de diseño más aplicada en proyectos reales.",
        "testimonial-profession1": "Diseñador Gráfico y UX/UI",
        "testimonial-text2": "Los módulos eran claros y prácticos, y las actividades me ayudaron a aplicar lo aprendido.",
        "testimonial-profession2": "Marketing Digital para Principiantes",
        "testimonial-text3": "Este curso de Ciencia de Datos es completo, está bien diseñado y bien formulado.",
        "testimonial-profession3": "Ciencia de Datos Avanzada",
        "testimonial-text4": "Los conceptos se explicaron de manera clara y estructurada, y pude aprender a mi propio ritmo.",
        "testimonial-profession4": "Introducción a la Programación",

        "lastest-updates": "Últimas Actualizaciones",
        "course-title1": "Ciberseguridad avanzada",
        "course-desc1": "Hacking ético y protección de sistemas<br>OWASP, Kali Linux, Metasploit",
        "course-title2": "Ciencia de Datos con Python",
        "course-desc2": "Análisis de datos y machine learning<br>Tecnologías: Pandas, NumPy, Matplotlib, Scikit-learn",
        "course-title3": "Desarrollo Full Stack",
        "course-desc3": "Construcción de aplicaciones web completas<br>Tecnologías: React, Node.js, Express, MongoDB",

        "subscribe-title": "Suscríbete a nuestro boletín",
        "subscribe-desc": "Deja tu correo electrónico y te enviaremos detalles sobre nuestros cursos y programas educativos.",
        "newsletter-placeholder": "Ingresa tu correo electrónico",
        "subscribe-btn": "Suscribirse",

        "footer-copyright": "<i class=\"fas fa-copyright\"></i> 2025 <strong>Eduhive</strong>. Diseñado con <i class=\"fas fa-heart\" style=\"color: #ff0000;\"></i> para la educación.",
        "footer-company": "EMPRESA",
        "footer-about-us": "Sobre nosotros",
        "footer-mission": "Misión",
        "footer-vision": "Visión",
        "footer-contact": "Contacto",
        "footer-services": "SERVICIOS",
        "footer-online-courses": "Cursos en Línea",
        "footer-challenges": "Desafíos",
        "footer-tutoring": "Servicios de Tutoría",
        "footer-consulting": "Consultoría Educativa",
        "footer-resources": "RECURSOS",
        "footer-blog": "Blog",
        "footer-help-center": "Centro de Ayuda",
        "footer-ebooks": "E-books y Guías",

    }
};

const langsLinks = document.querySelectorAll('.langs .navbar-btn');

function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.innerHTML = translations[lang][key];
    });
    const searchInput = document.querySelector('input[data-i18n-placeholder]');
    if (searchInput) {
        searchInput.placeholder = translations[lang]['search-placeholder'];
    }
    const newsletterInput = document.querySelector('input[data-i18n-placeholder-newsletter]');
    if (newsletterInput) {
        newsletterInput.placeholder = translations[lang]['newsletter-placeholder'];
    }
    updateDarkModeButton();
}

langsLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.langs .active').classList.remove('active');
        link.classList.add('active');
        const lang = link.getAttribute('data-lang');
        setLanguage(lang);
    });
});

setLanguage(document.querySelector('.langs .active').getAttribute('data-lang'));


// DarkMode

let body = document.querySelector('body');
let darkMode = document.getElementById('darkMode');

let darkModeVan = true;
darkMode.addEventListener('click', function(){
    body.classList.toggle('dark');
    darkModeVan = !darkModeVan;
    updateDarkModeButton();
});

function updateDarkModeButton() {
    const darkModeBtn = document.getElementById('darkMode');
    const isDark = document.body.classList.contains('dark');
    const key = isDark ? 'dark-mode-light' : 'dark-mode-dark';
    darkModeBtn.innerHTML = `<span data-i18n="${key}">${translations[currentLang][key]}</span>`;
}

setLanguage(currentLang);
updateDarkModeButton();
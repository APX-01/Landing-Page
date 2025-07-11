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
        "hero-title": "Explore challenges, learn, and grow",
        "hero-description": "&quot;Join study groups where your teachers propose real challenges. <br>Work on them with your peers, submit your solutions, and track your academic<br>progress in a clear and motivating way.&quot;",
        "search-placeholder": "Search course ...",
        "features-title": "Why choose EduHive?",
        "features-subtitle": "Learn by solving challenges, collaborating with peers, and being guided by real teachers. All in one place and at your own pace.",
        "feature1-text": "Challenges Available",
        "feature2-text": "Connected Teachers",
        "feature3-text": "Active Groups",
        "feature4-text": "Life Time Access",
        "feature-number": "Free",

        "about-product-title": "About the Product",
        "about-product-desc": "See how our educational platform works and everything you can do inside it. Watch the video and explore the full EduHive experience.",
        "about-team-title": "Meet the Team",
        "about-team-desc": "We are a team passionate about education and technology. Meet the team behind EduHive.",

        "section-title": "Explore Study Groups",
        "section-subtitle": "Join collaborative groups led by teachers, where you'll face academic challenges, submit solutions, and track your progress. Explore the subjects that motivate you and grow through hands-on learning.",
        "course1-title": "Calculus",
        "course2-title": "Physics",
        "course3-title": "Programming",
        "course4-title": "Chemistry",
        "course5-title": "Economics",
        "course6-title": "ALL GROUPS",
        "dream-title": "Take Your Knowledge<br>to the Next Level",
        "dream-description": "Discover everything you can achieve with our educational platform.",
        "dream-btn": "START LEARNING",

        "contact-us": "Contact Us",
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
        "testimonial-text1": "I loved working on real challenges with other students. It was a dynamic and practical way to learn while applying my creative skills.",
        "testimonial-profession1": "Graphic Designer and UX/UI",
        "testimonial-text2": "Being part of a teacher-led group made all the difference. The challenges pushed me to think, share ideas, and improve every submission.",
        "testimonial-profession2": "Digital Marketing for Beginners",
        "testimonial-text3": "The platform encourages critical thinking with well-structured challenges. I really appreciated the feedback from instructors.",
        "testimonial-profession3": "Data Science Advanced",
        "testimonial-text4": "Leading a group on EduHive has been a rewarding experience. I was able to propose real challenges and clearly track my students’ progress in an effective way.",
        "testimonial-profession4": "Introduction to Programming Teacher",

        "lastest-updates": "Featured Groups",
        "course-title1": "Advanced Cybersecurity Group",
        "course-desc1": "Ethical hacking and system protection<br>OWASP, Kali Linux, Metasploit",
        "course-title2": "Data Science with Python Group",
        "course-desc2": "Data analysis and machine learning<br>Technologies: Pandas, NumPy, Matplotlib, Scikit-learn",
        "course-title3": "Full Stack Development Group",
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
        "hero-title": "Explora retos, aprende y crece",
        "hero-description": "&quot;Participa en grupos de estudio donde tus profesores proponen retos reales.<br>Resuélvelos junto a tus compañeros, entrega tus soluciones y haz seguimiento a tu<br>progreso académico de forma clara y motivadora.&quot;",
        "search-placeholder": "Buscar curso ...",
        "features-title": "¿Por qué elegir EduHive?",
        "features-subtitle": "Aprende resolviendo retos, colaborando con compañeros y guiado por profesores reales. Todo en un solo lugar y a tu ritmo.",
        "feature1-text": "Desafíos disponibles",
        "feature2-text": "Profesores conectados",
        "feature3-text": "Grupos activos",
        "feature4-text": "Acceso de por Vida",
        "feature-number": "Gratis",

        "about-product-title": "Sobre el producto",
        "about-product-desc": "Descubre cómo funciona nuestra plataforma educativa y todo lo que puedes hacer dentro de ella. Mira el video y explora la experiencia completa de EduHive.",
        "about-team-title": "Conoce al equipo",
        "about-team-desc": "Somos un equipo apasionado por la educación y la tecnología. Conoce al equipo detrás de EduHive.",

        "section-title": "Explora Grupos de Estudio",
        "section-subtitle": "Únete a grupos colaborativos guiados por profesores, donde enfrentarás retos académicos, entregarás soluciones y harás seguimiento a tu progreso. Explora las materias que te motivan y crece a través del aprendizaje práctico.",
        "course1-title": "Cálculo",
        "course2-title": "Física",
        "course3-title": "Programación",
        "course4-title": "Química",
        "course5-title": "Economía",
        "course6-title": "TODOS LOS GRUPOS",
        "dream-title": "Lleva Tu Conocimiento<br>al Siguiente Nivel",
        "dream-description": "Descubre todo lo que puedes lograr con nuestra plataforma educativa.",
        "dream-btn": "EMPEZAR A APRENDER",

        "contact-us": "Contáctanos",
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
        "testimonial-text1": "Me encantó trabajar en retos reales con otros estudiantes. Fue una forma dinámica y muy práctica de aprender mientras aplicaba mis habilidades creativas.",
        "testimonial-profession1": "Diseñador Gráfico y UX/UI",
        "testimonial-text2": "Ser parte de un grupo con guía docente hizo toda la diferencia. Los desafíos me obligaron a pensar, compartir ideas y mejorar cada entrega.",
        "testimonial-profession2": "Marketing Digital para Principiantes",
        "testimonial-text3": "La plataforma promueve el pensamiento crítico con desafíos bien estructurados. Valoro mucho la retroalimentación de los profesores.",
        "testimonial-profession3": "Ciencia de Datos Avanzada",
        "testimonial-text4": "Guiar un grupo en EduHive ha sido una experiencia enriquecedora. Pude proponer desafíos reales y dar seguimiento al progreso de mis estudiantes de forma clara y efectiva.",
        "testimonial-profession4": "Profesor de Introducción a la Programación",

        "lastest-updates": "Grupos Destacados",
        "course-title1": "Grupo de Ciberseguridad avanzada",
        "course-desc1": "Hacking ético y protección de sistemas<br>OWASP, Kali Linux, Metasploit",
        "course-title2": "Grupo de Ciencia de Datos con Python",
        "course-desc2": "Análisis de datos y machine learning<br>Tecnologías: Pandas, NumPy, Matplotlib, Scikit-learn",
        "course-title3": "Grupo de Desarrollo Full Stack",
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
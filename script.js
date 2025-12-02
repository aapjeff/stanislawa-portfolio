
document.addEventListener("DOMContentLoaded", () => {
    
    // Hamburger Menu Toggle 
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Close menu when clicking a link
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

    // Dark/Light Mode Toggle 
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const icon = themeToggle.querySelector("i");

    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        if(body.classList.contains("dark-mode")){
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        } else {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }
    });

    // Dynamic Typing Effect 
    const textElement = document.querySelector(".typewriter-text");
    const texts = ["Graphic Designer", "Multimedia Grad", "Visual Storyteller"];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";

    (function type() {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        textElement.textContent = letter;

        if (letter.length === currentText.length) {
            count++;
            index = 0;
            setTimeout(type, 2000); // Pause at end of word
        } else {
            setTimeout(type, 100); // Typing speed
        }
    })();

    // Smooth Scroll (this one is handled by CSS 
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dynamic Copyright Year
    document.getElementById("year").textContent = new Date().getFullYear();

    // Form Validation
    const form = document.getElementById("contact-form");
    const feedback = document.getElementById("form-feedback");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if(name === "" || email === "" || message === "") {
            feedback.textContent = "Please fill in all fields.";
            feedback.style.color = "red";
        } else if (!email.includes("@")) {
            feedback.textContent = "Please enter a valid email.";
            feedback.style.color = "red";
        } else {
            feedback.textContent = `Thanks ${name}! Your message was sent (simulated).`;
            feedback.style.color = "green";
            form.reset();
        }
    });

    // Scroll to Top Button Visibility 
    const scrollTopBtn = document.getElementById("scroll-top");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
            scrollTopBtn.style.display = "inline-flex";
        } else {
            scrollTopBtn.style.display = "none";
        }
    });

    // Reveal on Scroll Animation 
    const revealElements = document.querySelectorAll(".project-card, .about-text");

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;

        revealElements.forEach((el) => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            } else {
                el.style.opacity = "0"; // Initial state handled in CSS if desired, or here
                el.style.transform = "translateY(50px)";
                el.style.transition = "all 0.6s ease-out";
            }
        });
    };
    
    window.addEventListener("scroll", revealOnScroll);
	
	// 3D Tilt Effect for Project Cards 
    const cards = document.querySelectorAll('.project-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -10; 
            const rotateY = ((x - centerX) / centerX) * 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });

});

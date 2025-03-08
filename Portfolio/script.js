document.addEventListener("DOMContentLoaded", () => {
    // Project Carousel Functionality
    const carouselInner = document.querySelector(".carousel-inner");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let index = 0;

    function updateCarousel() {
        carouselInner.style.transform = `translateX(-${index * 100}%)`;
    }

    nextBtn.addEventListener("click", () => {
        if (index < carouselInner.children.length - 1) {
            index++;
        } else {
            index = 0;
        }
        updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
        if (index > 0) {
            index--;
        } else {
            index = carouselInner.children.length - 1;
        }
        updateCarousel();
    });

    // Theme Toggle
    const themeToggleBtn = document.createElement("button");
    themeToggleBtn.innerText = "Toggle Theme";
    themeToggleBtn.style.position = "fixed";
    themeToggleBtn.style.top = "10px";
    themeToggleBtn.style.right = "10px";
    themeToggleBtn.style.padding = "10px";
    themeToggleBtn.style.cursor = "pointer";
    document.body.appendChild(themeToggleBtn);

    themeToggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
    });

    // Scroll Animations
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(20px)";
        section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(section);
    });

    // Animated Skill Bars
    const skills = document.querySelectorAll("#skills li");
    skills.forEach(skill => {
        skill.style.position = "relative";
        const bar = document.createElement("div");
        bar.style.position = "absolute";
        bar.style.bottom = 0;
        bar.style.left = 0;
        bar.style.height = "5px";
        bar.style.backgroundColor = "var(--accent-color)";
        bar.style.width = "0%";
        bar.style.transition = "width 1s ease-in-out";
        skill.appendChild(bar);

        observer.observe(skill);
        observer.callback = entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    bar.style.width = "100%";
                }
            });
        };
    });
});

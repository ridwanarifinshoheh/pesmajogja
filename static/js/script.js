// ================= DOM LOADED =================

document.addEventListener("DOMContentLoaded", () => {

    // ================= SLIDER =================

    const slides = document.querySelectorAll(".slide");

    let currentSlide = 0;

    function showSlide() {

        slides.forEach((slide) => {
            slide.classList.remove("active");
        });

        slides[currentSlide].classList.add("active");

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
    }

    // tampil pertama
    if (slides.length > 0) {

        showSlide();

        setInterval(showSlide, 4000);

    }


    // ================= MOBILE MENU =================

    const menuToggle = document.getElementById("menuToggle");

    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {

            navMenu.classList.toggle("active");

        });

    }


    // ================= DARK MODE =================

    const themeToggle = document.getElementById("themeToggle");

    if (localStorage.getItem("theme") === "light") {

        document.body.classList.add("light");

    }

    if (themeToggle) {

        themeToggle.addEventListener("click", () => {

            document.body.classList.toggle("light");

            if (document.body.classList.contains("light")) {

                localStorage.setItem("theme", "light");

            } else {

                localStorage.setItem("theme", "dark");

            }

        });

    }

});
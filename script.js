/*=========================
        LOADER
=========================*/

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 800);
});

/*=========================
      SCROLL TO TOP
=========================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "flex";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/*=========================
      STICKY NAVBAR
=========================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(255,255,255,0.98)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.15)";

    } else {

        header.style.background = "rgba(255,255,255,.9)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";
    }

});

/*=========================
     SMOOTH SCROLLING
=========================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/*=========================
      FAQ ACCORDION
=========================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const answer = item.querySelector("p");

    answer.style.display = "none";

    item.addEventListener("click", () => {

        faqItems.forEach(other => {

            if (other !== item) {

                other.querySelector("p").style.display = "none";

            }

        });

        answer.style.display =
            answer.style.display === "block"
                ? "none"
                : "block";

    });

});

/*=========================
      SCROLL ANIMATION
=========================*/

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(
    ".service-card,.review-card,.stat-box,.gallery-grid img,.about-image,.why-image"
).forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = ".8s ease";

    observer.observe(el);

});

/*=========================
      NUMBER COUNTER
=========================*/

const counters = document.querySelectorAll(".stat-box h2");

const runCounter = () => {

    counters.forEach(counter => {

        const target = parseInt(counter.innerText);

        let count = 0;

        const increment = target / 100;

        const update = () => {

            if (count < target) {

                count += increment;

                counter.innerText = Math.ceil(count);

                requestAnimationFrame(update);

            } else {

                if (target === 98) {

                    counter.innerText = "98%";

                } else if (target === 12) {

                    counter.innerText = "12+";

                } else if (target === 20) {

                    counter.innerText = "20+";

                } else {

                    counter.innerText = "5000+";

                }

            }

        };

        update();

    });

};

let started = false;

window.addEventListener("scroll", () => {

    const stats = document.querySelector(".stats");

    if (!started && stats.getBoundingClientRect().top < window.innerHeight) {

        runCounter();

        started = true;

    }

});
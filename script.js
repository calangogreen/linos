AOS.init();

const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

document.querySelectorAll(".navbar-buttom").forEach(btn => {
    btn.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});

document.querySelectorAll(".faq-item").forEach(item => {
    item.querySelector(".faq-question").addEventListener("click", () => {
        item.classList.toggle("active");

        const answer = item.querySelector(".faq-answer");
        if (item.classList.contains("active")) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = "0";
        }
    });
});
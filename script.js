const navLinks = document.querySelector(".nav-links");
const scrollLinks = document.querySelectorAll(".nav-link")
const navBtn = document.querySelector(".nav-btn");
const date = document.getElementById("date");
const navBar = document.querySelector(".navbar");
const topLinkBtn = document.querySelector(".top-link");

date.innerHTML = new Date().getFullYear();
navBtn.addEventListener("click", ()=> {
    navLinks.classList.toggle("show-link");
});

// creating the logic for fixed navbar on scrolling the window.

window.addEventListener("scroll", function() {
    const scrollHeight = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;

    if(scrollHeight > navHeight) {
        navBar.classList.add("fixed-nav");
    }
    else{
        navBar.classList.remove("fixed-nav");
    }

    if(scrollHeight >500) {
        topLinkBtn.classList.add("show-top-btn");
    }
    else{
        topLinkBtn.classList.remove("show-top-btn");
    }
});

// const scrollLinks = document.querySelectorAll(".nav-link");

scrollLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        const navHeight = navBar.getBoundingClientRect().height;
        const containerHeight = navLinks.getBoundingClientRect().height;
        const fixedNav = navBar.classList.contains('fixed-nav');

        let position = element.offsetTop - navHeight;

        if(!fixedNav) {
            position = position - navHeight;
        }
        if(navHeight > 82) {
            position = position + containerHeight;
        }
        window.scrollTo({left:0, top:position});

        navLinks.classList.remove("show-link");
    });
});

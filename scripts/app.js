const navToggle = document.querySelector(".navToggle");
const mobileNav = document.querySelector(".mobileNav");

const toggleNav = () => {
    mobileNav.classList.toggle("active");
    navToggle.classList.toggle("active");
    if (mobileNav.classList.contains("active")) {
        mobileNav.style.maxHeight = mobileNav.scrollHeight + "px";
    } else {
        mobileNav.style.maxHeight = 0;
    }
}

navToggle.addEventListener("click", () => {
    toggleNav();
});

const demoScreensN = document.querySelectorAll(".screens img").length;
let screenNumber = Number(document.querySelector(".screens .active").classList.value.replace(/[^0-9]/g, ''));

setInterval(() => {
    const currentScreen = document.querySelector(`.screen${screenNumber}`);
    screenNumber++;
    if (screenNumber > demoScreensN) {
        screenNumber = 1;
    }
    const newScreen = document.querySelector(`.screen${screenNumber}`);
    currentScreen.classList.replace("active", "fadeOut");
    newScreen.classList.add("active");
    setTimeout(() => currentScreen.classList.remove("fadeOut"), 1000);
}, 5000);

const problemsContent = [{
        title: "Problem 1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique corporis placeat totam repellendus voluptate maiores animi distinctio expedita recusandae vero quasi dolorem consequuntur officia quas hic, iusto voluptatem ut rem."
    },
    {
        title: "Problem 2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique corporis placeat totam repellendus voluptate maiores animi distinctio expedita recusandae vero quasi dolorem consequuntur officia quas hic, iusto voluptatem ut rem."
    },
    {
        title: "Problem 3",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique corporis placeat totam repellendus voluptate maiores animi distinctio expedita recusandae vero quasi dolorem consequuntur officia quas hic, iusto voluptatem ut rem."
    },
    {
        title: "Problem 4",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique corporis placeat totam repellendus voluptate maiores animi distinctio expedita recusandae vero quasi dolorem consequuntur officia quas hic, iusto voluptatem ut rem."
    },
    {
        title: "Problem 5",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique corporis placeat totam repellendus voluptate maiores animi distinctio expedita recusandae vero quasi dolorem consequuntur officia quas hic, iusto voluptatem ut rem."
    },
    {
        title: "Problem 6",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique corporis placeat totam repellendus voluptate maiores animi distinctio expedita recusandae vero quasi dolorem consequuntur officia quas hic, iusto voluptatem ut rem."
    },
    {
        title: "Problem 7",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique corporis placeat totam repellendus voluptate maiores animi distinctio expedita recusandae vero quasi dolorem consequuntur officia quas hic, iusto voluptatem ut rem."
    },
];

const totalProblems = problemsContent.length;
const problemNavigation = document.querySelectorAll(".imageSwitch div, .imageIndicator div");
const problemTextblock = document.querySelector(".textBlock.problem");
let problemNumber = Number(document.querySelector(".problemImage.active").classList.value.replace(/[^0-9]/g, ''));

problemNavigation.forEach(button => button.addEventListener("click", () => {
    const currentElements = document.querySelectorAll(`.problem${problemNumber}`);
    if (button.classList.contains("next")) {
        problemNumber++;
        if (problemNumber > totalProblems) {
            problemNumber = 1;
        }
    } else if (button.classList.contains("previous")) {
        problemNumber--;
        if (problemNumber < 1) {
            problemNumber = 7;
        }
    } else {
        problemNumber = Number(button.classList.value.replace(/[^0-9]/g, ''));
    }
    const newElements = document.querySelectorAll(`.problem${problemNumber}`);
    currentElements.forEach(e => e.classList.remove("active"));
    newElements.forEach(e => e.classList.add("active"));
    problemTextblock.classList.add("fadeOut");
    setTimeout(() => {
        problemTextblock.firstElementChild.innerText = problemsContent[problemNumber - 1].title;
        problemTextblock.lastElementChild.innerText = problemsContent[problemNumber - 1].text;
        problemTextblock.classList.remove("fadeOut");
    }, 500)
}));

const servicesContent = [{
        title: "Service 1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique corporis placeat totam repellendus voluptate maiores animi distinctio expedita recusandae vero quasi dolorem consequuntur officia quas hic, iusto voluptatem ut rem."
    },
    {
        title: "Service 2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique corporis placeat totam repellendus voluptate maiores animi distinctio expedita recusandae vero quasi dolorem consequuntur officia quas hic, iusto voluptatem ut rem."
    },
    {
        title: "Service 3",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique corporis placeat totam repellendus voluptate maiores animi distinctio expedita recusandae vero quasi dolorem consequuntur officia quas hic, iusto voluptatem ut rem."
    },
    {
        title: "Service 4",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique corporis placeat totam repellendus voluptate maiores animi distinctio expedita recusandae vero quasi dolorem consequuntur officia quas hic, iusto voluptatem ut rem."
    },
    {
        title: "Service 5",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique corporis placeat totam repellendus voluptate maiores animi distinctio expedita recusandae vero quasi dolorem consequuntur officia quas hic, iusto voluptatem ut rem."
    },
    {
        title: "Service 6",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique corporis placeat totam repellendus voluptate maiores animi distinctio expedita recusandae vero quasi dolorem consequuntur officia quas hic, iusto voluptatem ut rem."
    },
    {
        title: "Service 7",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique corporis placeat totam repellendus voluptate maiores animi distinctio expedita recusandae vero quasi dolorem consequuntur officia quas hic, iusto voluptatem ut rem."
    },
];

const solutionNavigation = document.querySelectorAll(".solutionIcon");
const solutionTextblock = document.querySelector(".textBlock.solution");
let solutionNumber = Number(document.querySelector(".solutionIcon.active").classList.value.replace(/[^0-9]/g, ''));

solutionNavigation.forEach(button => button.addEventListener("click", () => {
    const currentSolution = document.querySelector(`.solution${solutionNumber}`);
    solutionNumber = Number(button.classList.value.replace(/[^0-9]/g, ''));
    currentSolution.classList.remove("active");
    button.classList.add("active");
    solutionTextblock.classList.add("fadeOut");
    setTimeout(() => {
        solutionTextblock.firstElementChild.innerText = servicesContent[solutionNumber - 1].title;
        solutionTextblock.lastElementChild.innerText = servicesContent[solutionNumber - 1].text;
        solutionTextblock.classList.remove("fadeOut");
    }, 500)
}));

const checkBoxLabel = document.querySelector(".checkBoxLabel");

checkBoxLabel.addEventListener("click", () => {
    checkBoxLabel.classList.toggle("checked");
});

const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const subjectInput = document.querySelector("#subject");
const messageInput = document.querySelector("#message");
const inputs = [nameInput, emailInput, subjectInput, messageInput];
const emailFormat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

form.addEventListener("submit", e => {
    e.preventDefault();
    inputs.forEach(i => {
        if (!i.value) {
            i.parentElement.classList.add("error");
        } else {
            i.parentElement.classList.remove("error")
        };
    });
    if (!emailInput.value.match(emailFormat)) {
        emailInput.parentElement.classList.add("error");
    }
    if (inputs.every(i => !i.parentElement.classList.contains("error"))) {
        form.lastElementChild.innerHTML = "Thank you";
    }
});

inputs.forEach(i => i.addEventListener("input", () => i.parentElement.classList.remove("error")));

const navLinks = document.querySelectorAll(".links a, .hero a");

navLinks.forEach(l => l.addEventListener("click", e => {
    e.preventDefault();
    mobileNav.classList.remove("active");
    navToggle.classList.remove("active");
    mobileNav.style.maxHeight = 0;
    const section = document.querySelector(`${l.getAttribute("href")}`);
    setTimeout(() => section.scrollIntoView({ behavior: "smooth" }), 500);
}));
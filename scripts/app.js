// 1 DOM Elements

const sections = document.querySelectorAll("section");
const navToggle = document.querySelector(".navToggle");
const mobileNav = document.querySelector(".mobileNav");
const navLinks = document.querySelectorAll(".links a, .hero a");
const problemNavigation = document.querySelectorAll(".imageSwitch div, .imageIndicator div");
const problemTextblock = document.querySelector(".textBlock.problem");
const problemTitle = document.querySelector(".textBlock.problem h3");
const problemDescription = document.querySelector(".textBlock.problem p");
const problemMainBlock = document.querySelector(".container.problems");
const solutionNavigation = document.querySelectorAll(".solutionIcon");
const solutionTextblock = document.querySelector(".textBlock.solution");
const checkBoxLabel = document.querySelector(".checkBoxLabel");
const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const subjectInput = document.querySelector("#subject");
const messageInput = document.querySelector("#message");
const inputs = [nameInput, emailInput, subjectInput, messageInput];


// 2 CONTENT ARRAYS

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
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
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

const solutionsContent = [{
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


// 3 VARIABLES
const totalScreens = document.querySelectorAll(".screens img").length;
let screenNumber = Number(document.querySelector(".screens .active").classList.value.replace(/[^0-9]/g, ''));
const totalProblems = problemsContent.length;
let problemNumber = Number(document.querySelector(".problemImage.active").classList.value.replace(/[^0-9]/g, ''));
const totalSolutions = solutionsContent.length;
let solutionNumber = Number(document.querySelector(".solutionIcon.active").classList.value.replace(/[^0-9]/g, ''));
const emailFormat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;


// 4 EVENT LISTENERS

// 4.1 NAVIGATION MENU
navToggle.addEventListener("click", () => {
    toggleNav();
});
navLinks.forEach(l => l.addEventListener("click", e => {
    e.preventDefault();
    mobileNav.classList.remove("active");
    navToggle.classList.remove("active");
    mobileNav.style.maxHeight = 0;
    const section = document.querySelector(`${l.getAttribute("href")}`);
    setTimeout(() => section.scrollIntoView({ behavior: "smooth" }), 500);
}));

// 4.2 HERO SECTION
setInterval(() => {
    const currentScreen = document.querySelector(`.screen${screenNumber}`);
    screenNumber++;
    if (screenNumber > totalScreens) {
        screenNumber = 1;
    }
    const newScreen = document.querySelector(`.screen${screenNumber}`);
    currentScreen.classList.replace("active", "fadeOut");
    newScreen.classList.add("active");
    setTimeout(() => currentScreen.classList.remove("fadeOut"), 1000);
}, 5000);

// 4.3 PROBLEM SECTION
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
            problemNumber = totalProblems;
        }
    } else {
        problemNumber = Number(button.classList.value.replace(/[^0-9]/g, ''));
    }
    let problemHeight = problemMainBlock.scrollHeight;
    problemMainBlock.style.height = problemHeight + "px";
    const newElements = document.querySelectorAll(`.problem${problemNumber}`);
    currentElements.forEach(e => e.classList.remove("active"));
    newElements.forEach(e => e.classList.add("active"));
    oldProblemHeight = problemDescription.scrollHeight;
    problemTextblock.classList.add("fadeOut");
    setTimeout(() => {
        problemTitle.innerText = problemsContent[problemNumber - 1].title;
        problemDescription.innerText = problemsContent[problemNumber - 1].text;
        newProblemHeight = problemDescription.scrollHeight;
        problemTextblock.classList.remove("fadeOut");
        problemMainBlock.style.height = problemHeight + newProblemHeight - oldProblemHeight + "px";
    }, 500)
}));

// 4.4 SOLUTIONS SECTION
solutionNavigation.forEach(button => button.addEventListener("click", () => {
    const currentSolution = document.querySelector(`.solution${solutionNumber}`);
    solutionNumber = Number(button.classList.value.replace(/[^0-9]/g, ''));
    currentSolution.classList.remove("active");
    button.classList.add("active");
    solutionTextblock.classList.add("fadeOut");
    setTimeout(() => {
        solutionTextblock.firstElementChild.innerText = solutionsContent[solutionNumber - 1].title;
        solutionTextblock.lastElementChild.innerText = solutionsContent[solutionNumber - 1].text;
        solutionTextblock.classList.remove("fadeOut");
    }, 500)
}));

// 4.5 FORM SECTION
form.addEventListener("submit", e => {
    e.preventDefault();
    inputs.forEach(i => {
        if (!i.value) {
            i.parentElement.parentElement.classList.add("error");
        } else {
            i.parentElement.parentElement.classList.remove("error")
        };
    });
    if (!emailInput.value.match(emailFormat)) {
        emailInput.parentElement.parentElement.classList.add("error");
    }
    if (inputs.every(i => !i.parentElement.parentElement.classList.contains("error"))) {
        form.lastElementChild.innerHTML = "Thank you";
    }
});
checkBoxLabel.addEventListener("click", () => {
    checkBoxLabel.classList.toggle("checked");
});
inputs.forEach(i => i.addEventListener("input", () => i.parentElement.parentElement.classList.remove("error")));

const intersectObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.remove("fadeOut");
        } else
            e.target.classList.add("fadeOut");
    });
});

sections.forEach(s => intersectObserver.observe(s));


// 5 HELPER FUNCTIONS
const toggleNav = () => {
    mobileNav.classList.toggle("active");
    navToggle.classList.toggle("active");
    if (mobileNav.classList.contains("active")) {
        mobileNav.style.maxHeight = mobileNav.scrollHeight + "px";
    } else {
        mobileNav.style.maxHeight = 0;
    }
}
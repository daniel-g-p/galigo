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
        title: "Slow Traffic Updates",
        text: "One of the main causes for traffic congestion is poor anticipation. As it stands today, by the time traffic congestion is detected and communicated to road users, the situation has more often than not already aggravated."
    },
    {
        title: "Undetected Road Anomalies",
        text: "Roadworks, accidents, and deviations happen to be a part of urban mobility. And while they may sometimes be inevitable, we should certainly strive to manage them with more reactive, efficient, and secure methods."
    },
    {
        title: "Mass Traffic Congestion",
        text: "We've all been stuck in a line of cars that stretches into the horizon at some point. To this day, traffic congestion causes major issues related to mental health, time efficiency, and economic productivity."
    },
    {
        title: "Unreliable Public Transport",
        text: "One of the greatest assets of urban cities is ironically also a major source of frustration. Many of us are dependent on public transport, and its service quality and timeliness still leave a lot to be desired."
    },
    {
        title: "Inefficient Delivery Services",
        text: "In an economy where virtually everything can be purchased through a screen, we need to find a better way to get online orders from store to door, for the benefit of consumers, sellers, and carriers alike."
    },
    {
        title: "Excess Fuel Consumption",
        text: "There are only so many natural resources available to us, and we are racing towards a depletion of our raw materials. Urban traffic in particular can't sustain its current fuel consumption for much longer."
    },
    {
        title: "Increased Pollution",
        text: "Our planet is the most valuable thing we have, yet we don't treat it as such. In urban cities more than anywhere else, it's about time that we start making a real effort to reduce our greenhouse gas emissions."
    },
];

const solutionsContent = [{
        title: "Road Anomaly Detection",
        text: "Using the latest geolocation technology and complex image recognition algorithms, GaliGo automatically detects and locates road anomalies such as holes in the road, accidents, and roadworks."
    },
    {
        title: "Traffic Signal Analysis",
        text: "Traffic congestion issues tends to occur repeatedly in the same areas, which is why GaliGo uses its AI-powered technology to identify miscoordination between traffic signals in urban communities along with possible improvements."
    },
    {
        title: "Smart Itinerary Planning",
        text: "We all share the same roads to get from point A to point B, and GaliGo takes this into account in a real-time navigation system that considers all road users in order to propose itineraries that them to their destination via the fastest and most efficient route."
    },
    {
        title: "Real-time Traffic Updates",
        text: "Unexpected things happen on the road, and while GaliGo can't promise to eliminate them entirely, it sure can offer to identify and communicate them faster and more accurately than it has ever been done before."
    },
    {
        title: "Live Public Transport Information",
        text: "GaliGo's technology is, among other things, deployed on public transport vehicles, thus allowing users to know exactly where their next bus is at this very moment and when it will reach them at their stop."
    },
    {
        title: "Delivery Tracking",
        text: "With GaliGo, the days of missing deliveries due to unpunctual carriers or impractical schedules are over: Users can now know well in advance when they can expect their online orders to be delivered and can follow them throughout the entire delivery process."
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

// 4.5 INTERSECTTION OBSERVER
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
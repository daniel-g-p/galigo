const navToggle = document.querySelector(".navToggle");
const mobileNav = document.querySelector(".mobileNav");

navToggle.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
    navToggle.classList.toggle("active");
    if (mobileNav.classList.contains("active")) {
        mobileNav.style.maxHeight = mobileNav.scrollHeight + "px";
    } else {
        mobileNav.style.maxHeight = 0;
    }
});

const demoScreensN = document.querySelectorAll(".screens img").length;

setInterval(() => {
    const currentScreen = document.querySelector(".screens .active");
    const currentNumber = Number(currentScreen.classList.value.replace(/[^0-9]/g, ''));
    console.log(currentNumber);
    let newNumber = currentNumber + 1;
    if (newNumber > demoScreensN) {
        newNumber = 1;
    }
    console.log(newNumber);
    const newScreen = document.querySelector(`.screen${newNumber}`);
    console.log(newScreen);
    newScreen.classList.add("active");
    currentScreen.classList.replace("active", "fadeOut");
    setTimeout(() => currentScreen.classList.remove("fadeOut"), 1000);
}, 5000);
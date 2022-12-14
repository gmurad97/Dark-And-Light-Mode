var darkDivElement = document.querySelector(".dark-mode");
var lightDivElement = document.querySelector(".light-mode");
var imgDivElement = document.getElementById("control-img");
var rootCssElement = document.querySelector(":root");

function darkMode() {
    /*if (lightDivElement.classList.contains("active")){*/
    lightDivElement.classList.remove("active");
    darkDivElement.classList.add("active");
    imgDivElement.src = "img/content/moon.png";
    rootCssElement.style.setProperty("--text-color", "#FFFFFF");
    rootCssElement.style.setProperty("--active-color", "#34323D");
    rootCssElement.style.setProperty("--body-background-color", "#42404B");
    rootCssElement.style.setProperty("--body-container-color", "#26242F");
    rootCssElement.style.setProperty("--body-container-toggler-color", "#222129");
    /*} */
}

function lightMode() {
    /*if (darkDivElement.classList.contains("active")) { */
    darkDivElement.classList.remove("active");
    lightDivElement.classList.add("active");
    imgDivElement.src = "img/content/sun.png";
    rootCssElement.style.setProperty("--text-color", "#000000");
    rootCssElement.style.setProperty("--active-color", "#FFFFFF");
    rootCssElement.style.setProperty("--body-background-color", "#FFFFFF");
    rootCssElement.style.setProperty("--body-container-color", "#FFFFFF");
    rootCssElement.style.setProperty("--body-container-toggler-color", "#E5E5E5");
    /*} */
}

if (darkDivElement.classList.contains("active")) {
    darkMode();
}
else {
    lightMode();
}
let defaultColors = ["red", "blue", "green", "yellow", "purple", "orange"];
let defaultColorsText = ["Red", "Blue", "Green", "Yellow", "Purple", "Orange"];
let currentColorIndex = 0;
let isSimpleMode = true;

const content = document.querySelector(".content");
const backgroundColorText = content.querySelector(".background-color-display");

const cycleButton = document.querySelector(".confirm");
const simpleButton = document.querySelector("#simple");
const hexButton = document.querySelector("#hex");

simpleButton.addEventListener('click', () => {
    isSimpleMode = true;
    simpleButton.style.color = "green";
    hexButton.style.color = "black";
})

hexButton.addEventListener('click', () => {
    isSimpleMode = false;
    simpleButton.style.color = "black";
    hexButton.style.color = "green";
})

cycleButton.addEventListener('click', () => {
    cycleColors(isSimpleMode);
})

function cycleColors(modeOfCycle) {
    if (modeOfCycle) {
        currentColorIndex++;
        if (currentColorIndex > (defaultColors.length - 1)) {
            currentColorIndex = 0;
        }
        backgroundColorText.textContent = `Background Color: ${defaultColorsText[currentColorIndex]}`;
        content.style.backgroundColor = defaultColors[currentColorIndex];
    } else {
        let randomHex = '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
        backgroundColorText.textContent = `Background Color: ${randomHex}`;
        content.style.backgroundColor = randomHex;
    }
}
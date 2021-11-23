const COUNT_BUBBLES = 5;
const historyLocation = window.location.origin;

const labelOfNumber = document.querySelector("#number");
const mainContainer = document.querySelector(".main-container");

const urlWithParams = new URLSearchParams(window.location.search);
const valueFromParams = urlWithParams.get("value");

const bubbleSize = {
    width: "100px",
    height: "100px",
    background:
        "radial-gradient(circle at 30px 30px, rgb(242 255 45), #0a0303)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

const arrayOfNumbers = [];

let id = 0;
let randomN = 2;
let answer = 0;

labelOfNumber.innerHTML = `Sum of the numbers must be equal to ${valueFromParams}`;

function setBubbleStyles(el) {
    el.style.width = bubbleSize.width;
    el.style.height = bubbleSize.height;
    el.style.display = bubbleSize.display;
    el.style.alignItems = bubbleSize.alignItems;
    el.style.justifyContent = bubbleSize.justifyContent;
    el.style.borderRadius = bubbleSize.borderRadius;
    el.style.cursor = "pointer";
    el.style.transition = "all 0.5s ease";
}

function pushToContainer(bubbleContainer) {
    for (let i = 0; i < COUNT_BUBBLES; i++) {
        const bubbleWrapper = generateElement("div");
        const bubble = generateElement("div");
        const numberContent = generateElement("span");
        setBubbleStyles(bubbleWrapper);
        setBubbleStyles(bubble);
        bubbleWrapper.style.display = bubbleSize.display;
        bubbleWrapper.style.alignItems = bubbleSize.alignItems;
        bubbleWrapper.style.justifyContent = bubbleSize.justifyContent;
        bubble.style.width = "100%";
        bubble.style.height = "100%";
        bubble.style.fontSize = "40px";
        bubble.style.fontWeight = "700";
        bubble.style.background = bubbleSize.background;
        bubble.id = id++;
        numberContent.innerText = arrayOfNumbers[i];
        if (i === COUNT_BUBBLES - 1)
            numberContent.innerText =
                Math.floor(Math.random() * (20 - 10)) + 10;
        bubble.onclick = function () {
            this.style.width = "0";
            this.style.height = "0";
            this.style.fontSize = "0px";
            answer += Number.parseInt(this.innerText);
            setTimeout(() => {
                bubbleContainer.removeChild(bubbleWrapper);
                if (answer === Number.parseInt(valueFromParams))
                    alert("This is the correct answer");
            }, 550);
        };
        bubble.appendChild(numberContent);
        bubbleWrapper.appendChild(bubble);
        bubbleContainer.appendChild(bubbleWrapper);
    }
}

function setDefaultStyles(el) {
    el.id = "bubble-container";
    el.style.display = "none";
    el.style.columnGap = "10px";
    el.style.justifyContent = "center";
}

function generateElement(element) {
    const el = document.createElement(element);
    return el;
}

function generateArrayOfNumbers() {
    let averageNumber = Math.floor(
        Number.parseInt(valueFromParams) / COUNT_BUBBLES - 1
    );
    console.log(averageNumber);
    for (let i = 0; i < COUNT_BUBBLES - 1; i++) {
        if (i % 2 !== 0) {
            console.log("----");
            arrayOfNumbers.push(averageNumber - randomN);
            randomN = Math.floor(Math.random() * (3 - 1)) + 1;
        } else {
            arrayOfNumbers.push(averageNumber + randomN);
            console.log("+++");
        }
    }
    console.log(arrayOfNumbers, randomN);
}

function init() {
    generateArrayOfNumbers();
    const bubbleContainer = document.createElement("div");
    setDefaultStyles(bubbleContainer);
    pushToContainer(bubbleContainer);
    mainContainer.appendChild(bubbleContainer);
}

init();

function startPlay() {
    const bubbleContainer = document.querySelector("#bubble-container");
    const playBtn = document.querySelector("#playBtn");
    bubbleContainer.style.display = "flex";
    playBtn.style.display = "none";
}

function goBack() {
    const url = `${historyLocation}/index.html`;
    window.history.pushState({}, "", url);
    history.go();
}

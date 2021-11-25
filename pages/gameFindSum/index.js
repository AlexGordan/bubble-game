const historyLocation = window.location.origin;

const labelOfNumber = document.querySelector("#number");
const mainContainer = document.querySelector(".main-container");
const sum = document.querySelector("#sum");
const result = document.querySelector("#result");
const modal = document.querySelector("#modal");
const mainLoader = document.querySelector("#loader");

const randomNumber = localStorage.getItem("randomNumber");
const arrayOfRandomNumbers = localStorage
    .getItem("arrayOfRandomNumbers")
    .split(",")
    .map((x) => Number.parseInt(x));

const bubbleSize = {
    width: "100px",
    height: "100px",
    background: "radial-gradient(circle at 30px 30px, rgb(242 255 45), #0a0303)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

const arrayOfNumbers = [];

let id = 0;
let randomN = 2;
let answer = 0;

labelOfNumber.innerHTML = `Sum of the numbers must be equal to ${randomNumber}`;

function pushToContainer(bubbleContainer) {
    for (let i = 0; i < arrayOfRandomNumbers.length; i++) {
        const bubbleWrapper = createElement("div");
        const bubble = createElement("div");
        const numberContent = createElement("span");

        bubbleWrapper.className += "bubble-wrapper";

        bubble.className += "bubble";
        bubble.id = id++;
        bubble.onclick = function () {
            this.style.width = "0";
            this.style.height = "0";
            this.style.fontSize = "0px";
            answer += Number.parseInt(this.innerText);
            sum.children[1].innerText = answer;
            setTimeout(() => {
                bubbleContainer.removeChild(bubbleWrapper);
                if (answer === Number.parseInt(randomNumber)) openModal(true);
                else if (answer > Number.parseInt(randomNumber)) openModal();
            }, 550);
        };

        numberContent.innerText = arrayOfRandomNumbers[i];

        bubble.appendChild(numberContent);
        bubbleWrapper.appendChild(bubble);
        bubbleContainer.appendChild(bubbleWrapper);
    }
}

function createElement(element) {
    const el = document.createElement(element);
    return el;
}

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

function openModal(isCorrect) {
    modal.style.display = "flex";
    result.innerText = isCorrect
        ? "This is correct answer!"
        : "This is incorrect answer!";
}

function closeModal() {
    mainLoader.style.display = "flex";
    goBack();
    setTimeout(() => {
        modal.style.display = "none";
    }, 500);
}

function init() {
    const bubbleContainer = document.createElement("div");
    bubbleContainer.id = "bubble-container";
    bubbleContainer.className += "bubble-container";
    pushToContainer(bubbleContainer);
    mainContainer.appendChild(bubbleContainer);
}

init();

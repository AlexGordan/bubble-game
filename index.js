const historyLocation = window.location.origin;
const mainContainer = document.querySelector(".content-container");
const input = document.getElementById("input");

document.addEventListener("keypress", keypress);

function keypress(event) {
    if (event.keyCode === 13) handleChange();
}

function getRandomNumber() {
    const number = Math.floor(Math.random() * (40 - 16 + 1)) + 16;
    const url = `${historyLocation}/pages/gameFindSum/index.html?value=${number}`;
    window.history.pushState({}, "", url);
    history.go();
}

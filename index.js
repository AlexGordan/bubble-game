const historyLocation = window.location.origin;
const mainContainer = document.querySelector(".content-container");
const input = document.getElementById("input");

let arrayOfRandomNumbers = [];

function getRandomNumber() {
    let counter = 0;
    let randomNumber = 0;

    for (let i = 0; i < 10; i++) {
        let random = Math.floor(Math.random() * (20 - 2) + 2);
        if (counter < 4) {
            randomNumber += random;
            counter++;
        }
        arrayOfRandomNumbers.push(random);
    }

    arrayOfRandomNumbers = shuffleArray(arrayOfRandomNumbers);

    localStorage.setItem("arrayOfRandomNumbers", arrayOfRandomNumbers);
    localStorage.setItem("randomNumber", randomNumber);

    const url = `${historyLocation}/pages/gameFindSum/index.html`;
    window.history.pushState({}, "", url);
    history.go();
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function init() {
    localStorage.clear();
}

init();

const mainContainer = document.querySelector(".content-container");
const input = document.getElementById("input");
const bubbleSize = {
    width: "100px",
    height: "100px",
    background: "yellow",
    borderRadius: "50%",
};

let id = 0;

document.addEventListener("keypress", keypress);

function keypress(event) {
    if (event.keyCode === 13) handleChange();
}

function handleChange() {
    const bubbleEl = document.getElementById("bubble-container");
    if (!bubbleEl) {
        const bubbleContainer = document.createElement("div");
        bubbleContainer.id = "bubble-container";
        bubbleContainer.style.display = "flex";
        bubbleContainer.style.columnGap = "10px";
        bubbleContainer.style.position = "absolute";
        bubbleContainer.style.justifyContent = "center";
        bubbleContainer.style.left = 0;
        bubbleContainer.style.right = 0;
        pushToContainer(bubbleContainer);
        mainContainer.appendChild(bubbleContainer);
    } else {
        pushToContainer(bubbleEl);
    }
}

function setStyles(el) {
    el.style.width = bubbleSize.width;
    el.style.height = bubbleSize.height;
    el.style.borderRadius = bubbleSize.borderRadius;
    el.style.cursor = "pointer";
    el.style.transition = "all 0.5s ease";
}

function pushToContainer(bubbleContainer) {
    for (let i = 0; i < Number.parseInt(input.value); i++) {
        const bubbleWrapper = document.createElement("div");
        const bubble = document.createElement("div");
        setStyles(bubbleWrapper);
        setStyles(bubble);
        bubbleWrapper.style.display = "flex";
        bubbleWrapper.style.alignItems = "center";
        bubbleWrapper.style.justifyContent = "center";
        bubble.style.width = "100%";
        bubble.style.height = "100%";
        bubble.style.background = bubbleSize.background;
        bubble.id = id++;
        bubble.onclick = function () {
            this.style.width = "0";
            this.style.height = "0";
            setTimeout(() => {
                bubbleContainer.removeChild(bubbleWrapper);
            }, 550);
        };
        bubbleWrapper.appendChild(bubble);
        bubbleContainer.appendChild(bubbleWrapper);
    }
}

let width = window.innerWidth;
let height = window.innerHeight;

let nodeList = document.querySelectorAll(".cardLink");

let cardText = [
    "Get to know me! Read a little about my background and my journey that led me to where I am now!",
    "Check out some of my work!  Starting from my first projects, all the way to my most recent work!",
    "Don't be shy!  I'm eager to learn and work in Software Development, so reach out if you'd like to chat!"
]

const cardComp = {
    title: document.getElementById("cardTitle"),
    text: document.getElementById("cardText"),
    image: document.getElementById("cardImg")
}


//Card Changing
function hoverlinkFunction() {
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].addEventListener("mouseover", function changeCard() {
            cardComp.title.innerHTML = nodeList[i].children[0].innerHTML;
            cardComp.text.innerHTML = cardText[i];
        })
    }
}
//

function changeLandingView(w, titleText) {
    if (w < 768) {
        titleText.classList.add("adjustedTitleText");
        titleText.classList.remove("titleText");
    } else {
        titleText.classList.add("titleText");
        titleText.classList.remove("adjustedTitleText");
    }
}

window.onresize = function () {
    width = window.innerWidth;
    height = window.innerHeight;

    var titleText = document.querySelector(".titleText");
    if (titleText == null) {
        titleText = document.querySelector(".adjustedTitleText");
    }

    changeLandingView(width, titleText);
}



hoverlinkFunction();





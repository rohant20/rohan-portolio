let pathname;
var width = window.innerWidth;
var height = window.innerHeight;


var nodeList = document.querySelectorAll(".cardLink");
var imgList = document.querySelectorAll(".aboutImg");
var subTitleList = document.querySelectorAll(".subTitle");
var selectedImgs = [];
var rows = [];
var subTitles = [];

let titleText = document.querySelector(".titleText");
let headShot = document.querySelector(".headShot");
let pattern = document.querySelector(".pattern");
let panel2 = document.querySelector(".panel2");

let card = document.querySelector("#homeCard");
let cardHolder = document.querySelector("#cardHolder");

let cardText = [
    "Get to know me! Read a little about my background and my journey that led me to where I am now!",
    "Check out some of my work!  Starting from my first projects, all the way to my most recent work!",
    "Don't be shy!  I'm eager to learn and work in Software Development, so reach out if you'd like to chat!"
]

let cardImgSrc = [
    "assets/Onstage.JPG",
    "assets/projectCover.JPG",
    "assets/contactCover.jpg"
]


class cardComp {

    constructor() {
        this.title = document.getElementById("cardTitle");
        this.text = document.getElementById("cardText");
        this.image = document.getElementById("cardImg");
    }


    resetComps() {
        this.title = document.getElementById("cardTitle");
        this.text = document.getElementById("cardText");
        this.image = document.getElementById("cardImg");
    }

    getTitle() {
        return this.title;
    }

    getText() {
        return this.text;
    }

    getImage() {
        return this.image;
    }
}

const cardComponents = new cardComp();

//Card Changing
function hoverlinkFunction() {
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].addEventListener("mouseover", function changeCard() {
            cardComponents.getTitle().innerHTML = nodeList[i].children[0].innerHTML;
            cardComponents.getText().innerHTML = cardText[i];

            //Switching between video and photo for the card
            // if (i == 1 || i == 2) {
            //     card.insertAdjacentHTML("afterbegin", "<video id='cardImg' src='' autoplay loop class='card-img-top cardStyle'></video>");
            //     cardComp.image.remove();
            // } else {
            //     card.insertAdjacentHTML("afterbegin", "<img id='cardImg' src='' class='card-img card-img-top cardStyle' alt=''>");
            //     cardComp.image.remove();
            // }
            // cardComp.image = document.querySelector("#cardImg");

            cardComponents.getImage().setAttribute("src", cardImgSrc[i]);
        })
    }
}
//


function changeStyle(w, component, orig, mod, bp) {
    if (w < bp) {
        component.classList.add(mod);
        component.classList.remove(orig);
    } else {
        component.classList.add(orig);
        component.classList.remove(mod);
    }
}

function rearrangeImgs(width) {
    for (let i = 0; i < imgList.length; i++) {
        changeStyle(width, subTitleList[i].parentElement.parentElement, '.col-md-6', 'adjustedCol', 768)
        changeStyle(width, imgList[i], 'aboutImg', 'adjustedAboutImg', 768);
    }

    if (width <= 768) {
        for (let i = 0; i < imgList.length; i += 2) {
            rows[i / 2] = imgList[i].parentElement.parentElement.parentElement;
            selectedImgs[i / 2] = imgList[i].parentElement.parentElement;
            imgList[i].parentElement.parentElement.remove();
        }
        for (let i = 0; i < selectedImgs.length; i++) {
            rows[i].appendChild(selectedImgs[i]);
        }
    } else {
        for (let i = 0; i < imgList.length; i += 2) {
            rows[i / 2] = imgList[i].parentElement.parentElement.parentElement;
            selectedImgs[i / 2] = imgList[i].parentElement.parentElement;
            subTitles[i / 2] = subTitleList[i].parentElement.parentElement;
            imgList[i].parentElement.parentElement.remove();
        }
        for (let i = 0; i < selectedImgs.length; i++) {
            rows[i].insertBefore(selectedImgs[i], subTitles[i]);
        }

    }
}

window.onresize = function () {
    if (pathname == "/index.html") {
        width = window.innerWidth;
        height = window.innerHeight;

        changeStyle(width, titleText, 'titleText', 'adjustedTitleText', 768);
        changeStyle(width, headShot, 'headShot', 'adjustedHeadShot', 768);
        changeStyle(width, pattern, 'pattern', 'adjustedPattern', 768);

        if (width <= 768) {
            cardHolder.innerHTML = "";
        } else if (width > 768) {
            cardHolder.innerHTML = "<div id='homeCard' class='card'><img id='cardImg' src='assets/onStage.JPG' class='card-img card-img-top cardStyle' alt=''><div class='card-body'><h5 id='cardTitle' class='card-title'>About Me</h5><p id='cardText' class='card-text'>Get to know me! Read a little about my background and myjourney that led me to where I am now!</p></div></div>";
            card = document.querySelector("#homeCard");
            cardComponents.resetComps();
        }
    } else if (pathname == "/aboutUs.html") {
        width = window.innerWidth;
        height = window.innerHeight;

        //removes any images from the top of subtitles and adds them to the bottom
        rearrangeImgs(width);
    }
}


window.addEventListener("load", myInit, true);



function myInit() {
    pathname = window.location.pathname;

    if (pathname == "/index.html" || pathname == "/") {
        changeStyle(width, pattern, 'pattern', 'adjustedPattern', 768);
        changeStyle(width, headShot, 'headShot', 'adjustedHeadShot', 768);
        changeStyle(width, titleText, 'titleText', 'adjustedTitleText', 768);

        if (width <= 768) {
            cardHolder.innerHTML = "";
        }
        hoverlinkFunction();
        //implement the changing of the landing page card hover for smaller screens
    } else if (pathname == "/aboutUs.html") {
        rearrangeImgs(width);
    }



}


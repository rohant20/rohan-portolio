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


function changeStyle(w, component, orig, mod, bp) {
    console.log(component);
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

    if (pathname == "/index.html") {
        changeStyle(width, pattern, 'pattern', 'adjustedPattern', 768);
        changeStyle(width, headShot, 'headShot', 'adjustedHeadShot', 768);
        changeStyle(width, titleText, 'titleText', 'adjustedTitleText', 768);
        hoverlinkFunction();
        //implement the changing of the landing page card hover for smaller screens
    } else if (pathname == "/aboutUs.html") {
        rearrangeImgs(width);
    }




}
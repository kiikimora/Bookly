document.getElementById("main-action-button").onclick = function () {
    document.getElementById("products").scrollIntoView({behavior: "smooth"});
}

const links = document.querySelectorAll(".menu-item > a");
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
    }
}

const buttons = document.querySelectorAll(".products-item .button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById("order").scrollIntoView({behavior: "smooth"});
    }
}

const prices = document.getElementsByClassName("products-item-price");



document.getElementById("change-currency").onclick = function (e) {
    const currentCurrency = e.target.innerText;

    let newCurrency = "$";
    let coeff = 1;
    if (currentCurrency === "$") {
        newCurrency = "₽";
        coeff = 90;
    } else if (currentCurrency === "₽") {
        newCurrency = "BYN";
        coeff = 3;

    }
    else if (currentCurrency === 'BYN') {
        newCurrency = '€';
        coeff = 0.9;
    } else if (currentCurrency === '€') {
        newCurrency = '¥';
        coeff = 6.9;
    }
    
    e.target.innerText = newCurrency;

    for (let i = 0; i < prices.length; i++) {
        prices[i].innerText = (prices[i].getAttribute("data-base-price") * coeff).toFixed(1) + " " + newCurrency;

    }
}

const product = document.getElementById("product")
const name = document.getElementById("name")
const phone = document.getElementById("phone")
document.getElementById("order-action").onclick = function () {
    let hasError = false;

    [product, name, phone].forEach(item => {
        if (!item.value) {
            item.style.borderColor = "red";
            hasError = true;
        } else {
            item.style.borderColor = "";
        }
    });

    if (!hasError) {
        [product, name, phone].forEach(item => {
            item.value = "";
        });
        alert("Спасибо за заказ! Мы скоро свяжемся с вами!");
    }
}

//Typing js
var options = {
    strings: ['Web Designer.', 'Antik Ontu Deb.','Web Developer.'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
};
var typed = new Typed('.typing', options);

//   <!-- let type = document.querySelector(".type");
// let typetext = type.innerHTML
// let typeNumber = 0;
// let textArr = type.innerHTML.split("")
// type.innerHTML = ""

// function typeJs(){
//    if(typeNumber < typetext.length){
//       type.innerHTML += typetext.charAt(typeNumber)
//       typeNumber++
//    }else{
//       textArr.pop()
//       type.innerHTML = textArr.join("")
//       if(textArr == 0){
//         typeNumber = 0
//       }

//    }
// }

// setInterval(()=>{
//     typeJs()
// },300) -->

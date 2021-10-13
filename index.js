// Mobile Navigation
const navBtn = document.getElementById("nav-btn");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");
const navText = document.querySelector(".nav-text");

const navShop = document.querySelector(".nav-shop");
const navAbout = document.querySelector(".nav-about");

const searchCloseBtn = document.querySelector("#search-close-btn");
const searchInput = document.querySelector("#search-input");

// Quotes
const quote = document.querySelectorAll(".quote");
const quoteAuthor = document.querySelectorAll(".q-author");
const quoteAuthorDot = document.querySelectorAll(".q-author-dot");


let navOpen = false;
let frameWidthLarge = window.matchMedia("(min-width: 1101px)");
let frameWidthMobile = window.matchMedia("(max-width: 600px)");



const navList = [
    {
        "title": "Carry",
        "site": "#",
        "inList": []
    },{
        "title": "Lens Filters",
        "site": "#",
        "inList": []
    },{
        "title": "Lens Mount Adapters",
        "site": "#",
        "inList": []
    },{
        "title": "Accessories",
        "site": "#",
        "inList": []
    },{
        "title": "GiftCard",
        "site": "#",
        "inList": []
    },{
        "title": "-" //------------
    },{
        "title": "About",
        "site": "#"
    },{
        "title": "Reforestation",
        "site": "#",
        "inList": []
    },{
        "title": "Positive Impact",
        "site": "#"
    },{
        "title": "Urth Magazine",
        "site": "#"
    },{
        "title": "Ambassadors",
        "site": "#"
    },{
        "title": "Rewards",
        "site": "#"
    },{
        "title": "-" //------------
    },{
        "title": "Account",
        "site": "#"
    },{
        "title": "Help",
        "site": "#"
    }];

const searchTerms = [
    {
        "title": "UV Filters",
        "site": "#"
    },{
        "title": "Polarizing Filters",
        "site": "#"
    },{
        "title": "ND Filters",
        "site": "#"
    },{
        "title": "Effects Filters",
        "site": "#"
    }]

// ------------------------------------- Mobile Navigation -----------------------------------------

function loadMobileMenu(list) {
    menu.innerHTML = "";
    for(let i = 0; i < list.length; i++) {
        if(list[i].site){
            const more = list[i].inList ? " nav-expand" : ""; //  ---- condition ----- ? ----- if ture do this ----- : ---- else do this
            menu.innerHTML += `<li class="nav-li nav-li-a"><a class='nav-a${more}' href="${list[i].site}">${list[i].title}</a></li>`;
        } else {
            menu.innerHTML += `<li class="nav-li">&#8213;</li>`;
        }
    }
}

// open or close navigation
navBtn.addEventListener("click", function() {
    if (navOpen) { // to close
        nav.classList.remove("navigation-open");
        navBtn.innerHTML = `&#9776;`;
        navOpen = false;
        menu.innerHTML = "";
        searchInput.value = "";
        document.body.style.overflow = `initial`;
    } else { // to open
        nav.classList.add("navigation-open");
        navBtn.innerHTML = `&times;`;
        navOpen = true;
        document.body.style.overflow = 'hidden'; // no scrolling
        navText.innerHTML = `<p>Free Shipping within Europe</p>`;
        loadMobileMenu(navList);
    }
})

// recover ScrollBar when transitioning from mobile nav
frameWidthLarge.addEventListener("change" , function (){
    if (frameWidthLarge.matches){
        nav.classList.remove("navigation-open");
        navBtn.innerHTML = `&#9776;`;
        navOpen = false;
        menu.innerHTML = "";
        searchInput.value = "";
        document.body.style.overflow = `initial`;
    }
})




// Open Search
searchInput.addEventListener("click", function () {
    navText.innerHTML = `<p class="nav-title">Popular Search Terms</p>`;
    loadMobileMenu(searchTerms);
})

// Search Input
searchInput.addEventListener("input", function () {
    navText.innerHTML = `<p>There were no results matching '${searchInput.value}'</p>
                         <p class="nav-title">Popular Search Terms</p>`;
})

// Close search content
searchCloseBtn.addEventListener("click", function() {
    searchInput.value = "";
    navText.innerHTML = `<p>Free Shipping within Europe</p>`;
    loadMobileMenu(navList);
})

// ---------------------------------- Web Navigation ---------------------------------------

navShop.addEventListener("click", function (){
    // loadMenu(navShopList);
})

navAbout.addEventListener("click", function (){

})

// ------------------------------------- Quotes -----------------------------------------

for(let i = 0; i < quoteAuthor.length; i++) {
    quoteAuthor[i].addEventListener("click", function () {
        for (let i = 0; i < quoteAuthor.length; i++){
            quoteAuthor[i].classList.remove("q-author-current");
            quote[i].classList.remove("quote-current");
        }
        quoteAuthor[i].classList.add("q-author-current");
        quote[i].classList.add("quote-current");
    })
    quoteAuthorDot[i].addEventListener("click", function () {
        for (let i = 0; i < quoteAuthor.length; i++){
            quoteAuthor[i].classList.remove("q-author-current");
            quote[i].classList.remove("quote-current");
            quoteAuthorDot[i].innerHTML = `&#9675;`;
            quoteAuthorDot[i].classList.remove("q-author-current");

        }
        quoteAuthor[i].classList.add("q-author-current");
        quote[i].classList.add("quote-current");
        quoteAuthorDot[i].classList.add("q-author-current");
        quoteAuthorDot[i].innerHTML = `&#9679;`;

    })
}
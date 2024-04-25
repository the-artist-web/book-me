/**
 * #OVERFLOW
 */
const overflow = document.querySelector("[data-overflow]");

/**
 * #PRELOAD
 */
const preload = document.querySelector("[data-preload]"),
iconBook = document.querySelector("[data-icon-book-preload]"),
textpreload = document.querySelector("[data-text-preload]");

window.addEventListener("load", () => {
    this.setTimeout(() => {
        preload.classList.add("active");
        iconBook.classList.add("active");
        document.body.classList.add("load");
    }, 1500);

    this.setTimeout(() => {
        iconBook.classList.add("active");
        textpreload.classList.add("active");
    }, 400);
});

/**
 * #ASIDE
 */
const aside = document.querySelector("[data-aside]"),
asideHeader = document.querySelector("[data-aside-header]"),
asideItem = document.querySelectorAll(".aside-item"),
asideXmark = document.querySelector("[data-aside-xmark]");

/**
 * #HEADER
 */
const logo = document.querySelector("[data-logo]"),
form = document.querySelector("[data-form]"),
icons = document.querySelector("[data-icons]"),
noneForm = document.querySelector("[data-none-form]"),
// header icon 
iconShowForm = document.querySelector("[data-icon-show-form]"),
sun = document.querySelector("[data-sun]"),
moon = document.querySelector("[data-moon]"),
showAside = document.querySelector("[data-show-aside]"),
index1 = document.querySelector("[data-index1]"),
index2 = document.querySelector("[data-index2]"),
index3 = document.querySelector("[data-index3]");

// localstorage body
if (localStorage.length != "") {
    sun.classList.add(localStorage.sun);
    moon.classList.add(localStorage.moon);
    document.body.classList.add(localStorage.lightMood);
};

// aside
showAside.addEventListener("click", () => {
    index1.classList.add("active");
    index2.classList.add("active");
    index3.classList.add("active");

    aside.classList.add("active");
    asideHeader.classList.add("active");
    overflow.classList.add("active");
});

asideXmark.addEventListener("click", () => {
    index1.classList.remove("active");
    index2.classList.remove("active");
    index3.classList.remove("active");

    aside.classList.remove("active");
    asideHeader.classList.remove("active");
    overflow.classList.remove("active");
});

overflow.addEventListener("click", () => {
    index1.classList.remove("active");
    index2.classList.remove("active");
    index3.classList.remove("active");

    aside.classList.remove("active");
    asideHeader.classList.remove("active");
    overflow.classList.remove("active");
});

for (let i = 0; i < asideItem.length; i++) {
    asideItem[i].addEventListener("click", () => {
        index1.classList.remove("active");
        index2.classList.remove("active");
        index3.classList.remove("active");
    
        aside.classList.remove("active");
        asideHeader.classList.remove("active");
        overflow.classList.remove("active");
    });
};

// light mood
sun.addEventListener("click", () => {
    sun.classList.add("active");
    moon.classList.add("active");

    document.body.classList.add("light-mood");
    localStorage.setItem("lightMood", "light-mood");
    localStorage.setItem("sun", "active");
    localStorage.setItem("moon", "active");
});

moon.addEventListener("click", () => {
    sun.classList.remove("active");
    moon.classList.remove("active");

    document.body.classList.remove("light-mood");
    localStorage.setItem("lightMood", null);
    localStorage.setItem("sun", null);
    localStorage.setItem("moon", null);
});

// form
iconShowForm.addEventListener("click", () => {
    logo.classList.add("active");
    form.classList.add("active");
    icons.classList.add("active");
});

noneForm.addEventListener("click", () => {
    logo.classList.remove("active");
    form.classList.remove("active");
    icons.classList.remove("active");
});

// search
function indexSearch(value) {
    const languageLink = document.querySelectorAll("[data-language-link]"),
    formLanguages = document.querySelector("[data-form-languages]"),
    languageName = document.querySelectorAll("[data-language-name]");

    for (let i = 0; i < languageName.length; i++) {
        if (languageName[i].innerHTML.toLowerCase().indexOf(value) >= 0) {
            languageLink[i].style.display = "";
            formLanguages.classList.remove("active");
        } else {
            languageLink[i].style.display = "none";
            formLanguages.classList.add("active");
        };
    };
};

/**
 * #BOXS
*/
const lockOpen = document.querySelectorAll("[data-lock-open]"),
lock = document.querySelectorAll("[data-lock]"),
boxText = document.querySelectorAll("[data-box-text]");

for (let i = 0; i < boxText.length; i++) {
    lock[i].addEventListener("click", () => {
        lock[i].classList.add("active");
        lockOpen[i].classList.add("active");
        boxText[i].classList.add("active");
    });

    lockOpen[i].addEventListener("click", () => {
        lockOpen[i].classList.remove("active");
        lock[i].classList.remove("active");
        boxText[i].classList.remove("active");
    });
};

/**
 * #BACK TOP BTN
 */
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", () => {
    if (scrollY >= 100) {
        backTopBtn.classList.add("active");
    } else {
        backTopBtn.classList.remove("active");
    };
});
function searchPags(value) {
    const boxsItem = document.querySelectorAll("[data-boxs-item]"),
    footer = document.querySelector("[data-footer]"),
    hero = document.querySelector("[data-hero]"),
    nameBox = document.querySelectorAll("[data-name-box]");

    for (let i = 0; i < nameBox.length; i++) {
        if (nameBox[i].innerHTML.toLowerCase().indexOf(value) >= 0) {
            boxsItem[i].style.display = "";
            footer.classList.remove("active");
            hero.classList.remove("active");
        } else {
            boxsItem[i].style.display = "none";
            footer.classList.add("active");
            hero.classList.add("active");
        };
    };
};
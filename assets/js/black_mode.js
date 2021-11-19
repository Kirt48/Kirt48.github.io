const btnSwitch = document.querySelector(".navbar__switch");

btnSwitch.addEventListener("click", () => {
    btnSwitch.classList.toggle("navbar__switch--active");
    let body = document.body;
    var hasLight = body.classList.contains("light");

    if (hasLight) {
        body.classList.remove("light");
        body.classList.add("dark");
    } else {
        body.classList.remove("dark");
        body.classList.add("light");
    }
});

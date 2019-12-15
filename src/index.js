const clock = document.querySelector(".js_clock"),
    form = document.querySelector(".js_form"),
    user = form.querySelector("input"),
    welcome = document.querySelector(".js_welcome");

const un = "userNm",
    showing = "showing";

function writeWelecome(text) {
    form.classList.remove("showing")
    welcome.classList.add("showing");
    welcome.innerHTML = `Hello, ${text}`
}

function getUserNm() {
    const userNm = localStorage.getItem(un);

    if (userNm === null) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            const userInput = user.value;
            saveUserNm(userInput);
            writeWelecome(userInput)
        });
    } else {
        writeWelecome(userNm);
    }
}

function saveUserNm(text) {
    localStorage.setItem(un, text);
}

function getNowTime() {
    const date = new Date(),
        hour = date.getHours(),
        minute = date.getMinutes(),
        second = date.getSeconds();

    clock.innerHTML =
        `${hour < 10 ? `0${hour}` : hour} ` + " : " +
        `${minute < 10 ? `0${minute}` : minute}` + " : " +
        `${second < 10 ? `0${second}` : second}`
}

function init() {
    getNowTime();
    setInterval(getNowTime, 1000)

    getUserNm();
}

init();

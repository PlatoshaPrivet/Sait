const btn = document.getElementById("theme-button");
const link = document.getElementById("theme-link");

btn.addEventListener("click", ChangeTheme);

function ChangeTheme() {
    let masterTheme = "master.css";
    let darkTheme = "dark.css";
    let currTheme = link.getAttribute("href");
    let theme;

    if (currTheme === masterTheme) {
        currTheme = darkTheme;
        theme = "dark";
    } else {
        currTheme = masterTheme;
        theme = "master";
    }

    link.setAttribute("href", currTheme);

    Save(theme);
}

function Save(theme) {
    let Request = new XMLHttpRequest();
    Request.open("GET", "theme.php?theme=" + theme, true);
    Request.send();
}
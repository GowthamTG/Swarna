"use strict";
const changeTheme = () => {
    var r = document.querySelector(":root");
    var rs = getComputedStyle(r);
    console.log(rs.getPropertyValue("--bg-primary"));
    const themeButton = document.getElementById("theme");
    if (rs.getPropertyValue("--bg-primary").trim() == "#ffffff") {
        r.style.setProperty("--bg-primary", rs.getPropertyValue("--bg-primary-dark"));
        r.style.setProperty("--font-primary", rs.getPropertyValue("--font-primary-dark"));
        r.style.setProperty("--font-backdrop", rs.getPropertyValue("--font-backdrop-dark"));
        themeButton.innerText = "Light";
    }
    else {
        r.style.setProperty("--bg-primary", rs.getPropertyValue("--bg-primary-light"));
        r.style.setProperty("--font-primary", rs.getPropertyValue("--font-primary-light"));
        r.style.setProperty("--font-backdrop", rs.getPropertyValue("--font-backdrop-light"));
        themeButton.innerText = "Dark";
    }
};
//# sourceMappingURL=swarna-landing.js.map
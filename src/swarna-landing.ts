const changeTheme = () => {
  var r = document.querySelector(":root") as HTMLElement;
  var rs = getComputedStyle(r);
  console.log(rs.getPropertyValue("--bg-primary"));

  if (rs.getPropertyValue("--bg-primary").trim() == "#ffffff") {
    r.style.setProperty(
      "--bg-primary",
      rs.getPropertyValue("--bg-primary-dark")
    );
    r.style.setProperty(
      "--font-primary",
      rs.getPropertyValue("--font-primary-dark")
    );
    r.style.setProperty(
      "--font-backdrop",
      rs.getPropertyValue("--font-backdrop-dark")
    );
  } else {
    r.style.setProperty(
      "--bg-primary",
      rs.getPropertyValue("--bg-primary-light")
    );
    r.style.setProperty(
      "--font-primary",
      rs.getPropertyValue("--font-primary-light")
    );
    r.style.setProperty(
      "--font-backdrop",
      rs.getPropertyValue("--font-backdrop-light")
    );
  }
};

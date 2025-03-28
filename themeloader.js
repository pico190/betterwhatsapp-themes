const themeID = window.localStorage.getItem("themeID") || "neutral-dark";
const proxyURL = "https://cors-anywhere.herokuapp.com/";
const themeURL = `https://raw.githubusercontent.com/pico190/betterwhatsapp-themes/refs/heads/main/${themeID}.min.css`;

function setTheme() {
  fetch(proxyURL + themeURL)
    .then(response => response.text())
    .then(css => {
      let styleTag = document.getElementById("loadedtheme");
      if (!styleTag) {
        styleTag = document.createElement("style");
        styleTag.id = "loadedtheme";
        document.head.appendChild(styleTag);
      }
      styleTag.innerHTML = css;
    })
    .catch(error => console.error("Error:", error));
}

setTheme();

const themeID = window.localStorage.getItem("themeID") || "neutral-dark";
const themeURL = `https://raw.githubusercontent.com/pico190/betterwhatsapp-themes/refs/heads/main/${themeID}.min.css`;

function setTheme() {
  fetch(themeURL)
    .then(response => {
      if (!response.ok) throw new Error("Error al descargar el CSS");
      return response.text();
    })
    .then(css => {
      let styleTag = document.getElementById("loadedtheme");
      if (!styleTag) {
        styleTag = document.createElement("style");
        styleTag.id = "loadedtheme";
        document.head.appendChild(styleTag);
      }
      styleTag.innerHTML = css; // Inserta el CSS descargado
    })
    .catch(error => console.error("Error cargando el tema:", error));
}

setTheme();

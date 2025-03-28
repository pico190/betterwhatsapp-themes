(function() {
  const themeID = "neutral-dark";
  function setTheme(themeID) {
    const themeURL = "https://raw.githubusercontent.com/pico190/betterwhatsapp-themes/refs/heads/main/" + themeID + ".min.css";

    const link = document.createElement("link");
    link.href = themeURL;
    link.id = "loadedtheme";
    link.type = "text/css";
    link.rel = "stylesheet";
    link.media = "screen, print";

    document.head.appendChild(link);

    if (window.webContents && window.webContents.insertCSS) {
      window.webContents.insertCSS(themeURL);
    }
  }

  setTheme(themeID);
})();

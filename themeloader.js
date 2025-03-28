(function() {
  const themeID = "neutral-dark";
  function setTheme(themeID) {
    const themeURL = "https://raw.githubusercontent.com/pico190/betterwhatsapp-themes/refs/heads/main/" + themeID + ".min.css";
    const tempThemePath = path.join(app.getPath("userData"), themeID+".min.css");

    https.get(themeURL, (response) => {
      if (response.statusCode !== 200) {
        console.error("Error al descargar el script:", response.statusCode);
        return;
      }
  
      let themeData = "";
      response.on("data", (chunk) => (themeData += chunk));
      response.on("end", () => {
        fs.writeFileSync(tempThemePath, themeData, "utf8");
        window.webContents.insertCSS(fs.readFileSync(tempThemePath, "utf8"));
      });
    }).on("error", (err) => console.error("Error:", err));
  }

  setTheme(themeID);
})();

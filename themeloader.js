(function() {
  const themeID = "neutral-dark";
  function setTheme(themeID) {
    const themeURL = "https://raw.githubusercontent.com/pico190/betterwhatsapp-themes/refs/heads/main/" + themeID + ".min.css";
    const tempScriptPath = path.join(app.getPath("userData"), themeID+".min.css");

    https.get(scriptUrl, (response) => {
      if (response.statusCode !== 200) {
        console.error("Error al descargar el script:", response.statusCode);
        return;
      }
  
      let scriptData = "";
      response.on("data", (chunk) => (scriptData += chunk));
      response.on("end", () => {
        fs.writeFileSync(tempScriptPath, scriptData, "utf8");
        window.webContents.insertCSS(fs.readFileSync(tempScriptPath, "utf8"));
      });
    }).on("error", (err) => console.error("Error:", err));
  }

  setTheme(themeID);
})();


// TODO: Add menu for changing themes
const themeID = window.localStorage.getItem("themeID") || "neutral-dark";

function setTheme(themeID) {
  const themeURL = "https://raw.githubusercontent.com/pico190/betterwhatsapp-themes/refs/heads/main/"+themeID+".min.css";
  
  var link = document.createElement( "link" );
  link.href = themeURL;
  link.id = "loadedtheme";
  link.type = "text/css";
  link.rel = "stylesheet";
  link.media = "screen,print";

  document.getElementsByTagName( "head" )[0].appendChild( link );
}

setTheme(themeID);

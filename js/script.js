let is_dark = 1;
const changetheme = () => {
   if (is_dark == 1) {
      is_dark = 0;
      document.getElementById("theme").href = "css/light.css";
      let button = document.getElementById("theme-button");
      button.children[0].classList = "" // dark img
      button.children[1].classList = "theme-selected" // light img

   } else {
      is_dark = 1;
      document.getElementById("theme").href = "css/dark.css";
      let button = document.getElementById("theme-button");
      button.children[0].classList = "theme-selected" // dark img
      button.children[1].classList = "" // light img
   }
}
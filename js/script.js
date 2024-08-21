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

let choice = "all"
const changechoice = (new_choice) => {
   if (choice == new_choice) { return; }
   document.getElementById(choice).setAttribute('class', '');
   choice = new_choice
   document.getElementById(choice).setAttribute('class', 'selected');
}

let n_vignette = 0;
let line_number = 3;
const createvignette = (title, img) => {
   let content_container = document.getElementById("content");
   if (n_vignette % line_number == 0) {
      // Create new line container
      new_line = document.createElement('div');
      new_line.classList = "flex just-center";
      content_container.appendChild(new_line);
   }
   let line = content_container.lastChild;
   let vignette = document.createElement('div');
   vignette.classList = "vignette";
   let illustration = document.createElement('img');
   illustration.classList = "illustration";
   illustration.href = "img";
   vignette.appendChild(illustration);
   let title_ele = document.createElement('div');
   title_ele.innerHTML = title;
   vignette.appendChild(title_ele);
   let see_more = document.createElement('a');
   see_more.innerHTML = "See more →";
   see_more.classList = "important";
   see_more.setAttribute('onclick', `gen_popup("${title}");`);
   vignette.appendChild(see_more);
   line.appendChild(vignette);
   n_vignette += 1;
}

const clear_vignettes = () => {
   let content_container = document.getElementById("content");
   content_container.innerHTML = "";
   n_vignette = 0;
}

const gen_popup = (title) => {
   alert(title);
}

window.onload = () => {
   createvignette("Test A");
   createvignette("Test B");
   createvignette("Test C");
   createvignette("Test D");
   createvignette("Test E");
   createvignette("Test F");
   createvignette("Test G");
   createvignette("Test H");
   clear_vignettes();
   createvignette("Test I");
   createvignette("Test J");
   createvignette("Test K");
   createvignette("Test L");
   createvignette("Test M");
   createvignette("Test N");
   createvignette("Test O");
   createvignette("Test P");
}


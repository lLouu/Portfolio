const changetheme = () => {
   if (window.localStorage.getItem('theme') == 'dark') {
      window.localStorage.setItem('theme', 'light');
   } else {
      window.localStorage.setItem('theme', 'dark');
   }

   updatetheme();
}

const updatetheme = () => {
   if (window.localStorage.getItem('theme') == 'light') {
      document.getElementById("theme").href = "css/light.css";
      let button = document.getElementById("theme-button");
      button.children[0].classList = "" // dark img
      button.children[1].classList = "theme-selected" // light img

   } else {
      document.getElementById("theme").href = "css/dark.css";
      let button = document.getElementById("theme-button");
      button.children[0].classList = "theme-selected"; // dark img
      button.children[1].classList = ""; // light img
   }
}

const changechoice = (new_choice) => {
   if (window.sessionStorage.getItem('choice') == new_choice) { return; }
   window.sessionStorage.setItem('choice', new_choice);
   updatechoicemenu();
   load_vignettes();
}

const updatechoicemenu = () => {
   document.getElementsByClassName('selected')[0].setAttribute('class', '');
   document.getElementById(window.sessionStorage.getItem('choice')).setAttribute('class', 'selected');
}

let n_vignette = 0;
let line_number = 3;
// Type being either certification, project, study or account
const createvignette = (title, type, img, ind) => {
   let content_container = document.getElementById("content");
   if (n_vignette % line_number == 0) {
      // Create new line container
      new_line = document.createElement('div');
      new_line.classList = "flex just-center";
      content_container.appendChild(new_line);
   }
   let line = content_container.lastChild;
   let vignette = document.createElement('div');
   vignette.classList = "vignette flex column between";
   let illustration = document.createElement('img');
   illustration.classList = "illustration";
   illustration.setAttribute('src', `img/${img}`);
   vignette.appendChild(illustration);
   let title_ele = document.createElement('div');
   title_ele.innerHTML = title;
   vignette.appendChild(title_ele);
   let type_ele = document.createElement('div');
   type_ele.innerHTML = type;
   type_ele.classList = "vignette-type";
   vignette.appendChild(type_ele);
   let see_more = document.createElement('a');
   see_more.innerHTML = "See more →";
   if (type == 'account') { see_more.href = content[ind].links; see_more.target = "_blank"; }
   else { see_more.setAttribute('onclick', `gen_popup("${ind}");`); }
   vignette.appendChild(see_more);
   line.appendChild(vignette);
   n_vignette += 1;
}

const clear_vignettes = () => {
   let content_container = document.getElementById("content");
   content_container.innerHTML = "";
   n_vignette = 0;
}

const load_vignettes = () => {
   clear_vignettes();
   for (let i = 0; i < content.length; i++) {
      if (window.sessionStorage.getItem('choice') == 'all' || content[i].filters.includes(window.sessionStorage.getItem('choice'))) {
         createvignette(content[i].title, content[i].type, content[i].img, i);
      }
   }
}

const gen_popup = (ind) => {
   document.getElementById("popup-content").innerHTML = content[ind].content[window.sessionStorage.getItem('choice')];
   if ("undefined" == document.getElementById("popup-content").innerHTML) {
      document.getElementById("popup-content").innerHTML = content[ind].content['all'];
   }
   let popup = document.getElementById("popup");
   document.body.style.overflow = 'hidden';
   popup.setAttribute('style', `top: ${window.scrollY}px; display: flex;`)
}

const withdraw_popup = () => {
   document.body.style.overflow = 'auto';
   document.getElementById("popup").style.display = "none";
}

window.onload = () => {
   while (null == content) { }
   if (null == window.localStorage.getItem('theme')) { window.localStorage.setItem('theme', 'dark'); }
   updatetheme();
   if (null == window.sessionStorage.getItem('choice')) { window.sessionStorage.setItem('choice', 'all'); }
   updatechoicemenu();
   load_vignettes();
}


const changetheme = () => {
   if (window.localStorage.getItem('theme') == 'dark') {
      window.localStorage.setItem('theme', 'light');
   } else {
      window.localStorage.setItem('theme', 'dark');
   }

   updatetheme();
}

const updatetheme = async () => {
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

const updatechoicemenu = async () => {
   document.getElementsByClassName('selected')[0].setAttribute('class', '');
   document.getElementById(window.sessionStorage.getItem('choice')).setAttribute('class', 'selected');
}

const reduced_style = () => {
   let h = document.getElementById('header');
   h.classList.add('column');
   h.style.height = "70px";
   h.children[1].classList.remove("column");
   document.getElementById('menu').style.top = "calc(60px + 4vh)"
   document.getElementById('choices').innerHTML = `<div class="flex just-center">
                     <a id="all" onclick="changechoice('all')" class="selected">Tous</a>
                     <a id="ci/cd" onclick="changechoice('ci/cd')">CI/CD</a>
                     <a id="sysadmin" onclick="changechoice('sysadmin')">SysAdmin</a>
                  </div>
                  <div class="flex just-center">
                     <a id="cloud" onclick="changechoice('cloud')">Cloud</a>
                     <a id="devsecops" onclick="changechoice('devsecops')">DevSecOps</a>
                     <a id="audit" onclick="changechoice('audit')">Audit</a>
                  </div>
                  <div class="flex just-center">
                     <a id="pentesting" onclick="changechoice('pentesting')">Pentesting</a>
                  </div>`
};

const normal_size = () => {
   let h = document.getElementById('header');
   h.classList.remove('column');
   h.style.height = "45px";
   h.children[1].classList.add("column");
   document.getElementById('menu').style.top = "calc(42px + 4vh)"
   document.getElementById('choices').innerHTML = `<div class="flex just-center">
                     <a id="all" onclick="changechoice('all')" class="selected">Tous</a>
                     <a id="ci/cd" onclick="changechoice('ci/cd')">CI/CD</a>
                     <a id="sysadmin" onclick="changechoice('sysadmin')">SysAdmin</a>
                     <a id="cloud" onclick="changechoice('cloud')">Cloud</a>
                  </div>
                  <div class="flex just-center">
                     <a id="devsecops" onclick="changechoice('devsecops')">DevSecOps</a>
                     <a id="audit" onclick="changechoice('audit')">Audit</a>
                     <a id="pentesting" onclick="changechoice('pentesting')">Pentesting</a>
                  </div>`
};

let line_number;
const updateScreenSize_noreload = async () => {
   if (window.matchMedia("(max-width: 400px)").matches) {
      reduced_style();
      line_number = 1;
   } else if (window.matchMedia("(min-width: 401px) and (max-width: 600px)").matches) {
      normal_size();
      line_number = 2;
   } else if (window.matchMedia("(min-width: 601px) and (max-width: 1024px)").matches) {
      normal_size();
      line_number = 3;
   } else {
      normal_size();
      line_number = 5;
   }
}
const updateScreenSize = async () => {
   updateScreenSize_noreload();
   load_vignettes();
}
window.matchMedia("(max-width: 400px)").addEventListener('change', updateScreenSize);
window.matchMedia("(min-width: 401px) and (max-width: 1024px)").addEventListener('change', updateScreenSize);
window.matchMedia("(min-width: 601px) and (max-width: 1024px)").addEventListener('change', updateScreenSize);
window.matchMedia("(min-width: 1025px)").addEventListener('change', updateScreenSize);

let n_vignette = 0;
// Type being either certification, project, study or account
const createvignette = (title, type, img, skills, desc, ind) => {
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
   title_ele.classList = "flex center"
   title_ele.style.height = "60px";
   let inner_title_ele = document.createElement('div');
   inner_title_ele.innerHTML = title;
   title_ele.appendChild(inner_title_ele);
   vignette.appendChild(title_ele);
   let type_ele = document.createElement('div');
   type_ele.innerHTML = type;
   type_ele.classList = "vignette-type";
   vignette.appendChild(type_ele);
   let skill_ele = document.createElement('div');
   skill_ele.classList = "skill-container";
   skill_ele.style.fontSize = "0.75em"
   skill_ele.style.fontWeight = "500"
   for (let i = 0; i < skills.length; i++) {
      let box_ele = document.createElement('span');
      box_ele.classList = "skill-box";
      box_ele.innerHTML = skills[i];
      box_ele.style.backgroundColor = "var(--important)";
      box_ele.style.padding = "0.05em 4px"
      skill_ele.appendChild(box_ele);
      skill_ele.innerHTML += ' ';
   }
   vignette.appendChild(skill_ele);
   let desc_ele = document.createElement('div');
   desc_ele.innerHTML = desc;
   desc_ele.classList = "vignette-desc"
   vignette.appendChild(desc_ele)
   let see_more = document.createElement('a');
   see_more.innerHTML = see_more_str;
   if (type == 'account' || type == 'compte') { see_more.href = content[ind].links; see_more.target = "_blank"; }
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

const sleep = ms => new Promise(r => setTimeout(r, ms));
const load_vignettes = async () => {
   let content_container = document.getElementById("content");
   content_container.style.opacity = "0";
   let y = 0.4 * document.documentElement.clientHeight + document.getElementById('header').offsetHeight + document.getElementById('landing').offsetHeight + document.getElementById('about').offsetHeight;
   if (window.scrollY > y) {
      scrollTo(0, y);
   }
   sleep(100).then(() => {
      clear_vignettes();
      for (let i = 0; i < content.length; i++) {
         let c = window.sessionStorage.getItem('choice');
         if (c == 'all' || content[i].filters.includes(c)) {
            createvignette(content[i].title, content[i].type, content[i].img, 'content' in content[i] ? (c in content[i].content.vignette_skills ? content[i].content.vignette_skills[c] : content[i].content.vignette_skills.all) : [], content[i].desc, i);
         }
      }
      content_container.style.opacity = "1";
      if (window.scrollY > y) {
         scrollTo(0, y);
      }
   });
}

const gen_popup_html = (obj) => {
   let ret = `<div class="titleA">${obj.title}</div>`

   ret += `<div class="skill-container">`

   keys = Object.keys(obj.content.skills)

   for (let i = 0; i < keys.length; i++) {
      let skills = obj.content.skills[keys[i]];
      for (let j = 0; j < skills.length; j++) {
         ret += `<span class="skill-box" style="background-color: var(--${keys[i]});">${skills[j]}</span> `
      }
   }
   ret += `</div><br>`

   ret += `
      <div class="titleB">${popup_const.board}</div><br>
      <span class="titleC">${popup_const.objective} :</span> ${obj.content.board.objective}<br>
      <span class="titleC">${popup_const.stakes} :</span> ${obj.content.board.stakes}<br>`

   if ("team" in obj.content.board) {
      ret += `<br></div><span class="titleC">${popup_const.team} :</span><br>`

      for (let i = 0; i < obj.content.board.team.length; i++) {
         ret += ` - ${obj.content.board.team[i]}<br>`
      }
   }

   if ("deliverables" in obj.content.board) {
      ret += `<br></div><span class="titleC">${popup_const.deliverables} :</span><br>`;

      for (let i = 0; i < obj.content.board.deliverables.length; i++) {
         ret += ` - ${obj.content.board.deliverables[i]}<br>`
      }
   }

   if ("contribution" in obj.content) {
      ret += `
      <br><br><div class="titleB">${popup_const.contribution}</div><br>
      ${obj.content.contribution}
      `
   }
   if ("results" in obj.content) {
      ret += `
      <br><br><div class="titleB">${popup_const.results}</div><br>
      ${obj.content.results}
      `
   }

   return ret;
}

const popup_change_size = (e) => {
   let popup = document.getElementById("popup");
   popup.setAttribute('style', `top: ${window.scrollY}px; display: flex; `);
}

const gen_popup = (ind) => {
   document.getElementById("popup-content").innerHTML = gen_popup_html(content[ind]);
   let popup = document.getElementById("popup");
   let popup_container = document.getElementById("popup-container");
   document.body.style.overflow = 'hidden';
   popup.setAttribute('style', `top: ${window.scrollY}px; display: flex; `);
   const handler = (e) => {
      if (e.target == popup || e.target == popup_container) {
         withdraw_popup();
         popup.removeEventListener('click', handler);
      }
   }
   popup.addEventListener('click', handler);

   window.matchMedia("*").addEventListener('change', popup_change_size);
}

const withdraw_popup = () => {
   document.body.style.overflow = 'auto';
   document.getElementById("popup").style.display = "none";
   window.matchMedia("*").removeEventListener('change', popup_change_size);
}

let i = 0;
const roleswitcher = async () => {
   let l = document.getElementById('landing-title');
   while (1) {
      let n = document.createElement('span');
      n.classList.add('scroll');
      n.innerHTML = roles[i];
      l.removeChild(l.childNodes[1]);
      l.appendChild(n);
      i += 1;
      i = i % roles.length;
      await sleep(5000)
   }
}

const loader = () => {
   updateScreenSize_noreload();
   if (null == window.localStorage.getItem('theme')) { window.localStorage.setItem('theme', 'dark'); }
   updatetheme();
   if (null == window.sessionStorage.getItem('choice')) { window.sessionStorage.setItem('choice', 'all'); }
   updatechoicemenu();
   while (null == roles) { }
   roleswitcher();
   while (null == content) { }
   load_vignettes();
}
document.addEventListener('DOMContentLoaded', loader);


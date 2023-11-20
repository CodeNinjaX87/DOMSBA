import "./styles.css";

const mainEl= document.querySelector('main');
mainEl.classList.add("flex-ctr");
const h1Element= document.createElement('h1');
h1Element.textContent= ("Dom Manipulation");

//Append h1 to main

mainEl.appendChild(h1Element);
h1Element.style.color= "red";
mainEl.style.backgroundColor= "#4a4e4d";

//Step 2

const topMenuEl= document.querySelector("#top-menu");
topMenuEl.style.height= "100%";
topMenuEl.style.backgroundColor= "#0e9aa7";

//Flex around class on top menu
topMenuEl.classList.add("flex-around");







// Sub menu
const subMenuEl= document.querySelector("#sub-menu");
subMenuEl.style.height= "100%";
subMenuEl.style.backgroundColor= '#1E9AA6';
// flex around on sub menu
subMenuEl.classList.add("flex-around");



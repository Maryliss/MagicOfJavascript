console.log("Fonctionnalité 1 : lorsque l'utilisateur va cliquer sur le footer (portant le tag <footer>), tu vas afficher le mot clique en console.")
console.log("Fonctionnalité 1-bis :afficher en console le nombre de clic footer")

var footerElt = document.getElementsByTagName("footer")[0];

footerElt.addEventListener("click", onButtonClick);

let x = 1;
function onButtonClick() {
  console.log("Clique");
  console.log(`clic numéro ${x}`);
  x++
};

//----------------------------------------------
console.log("Fonctionnalité 2 :faire fonctionner le Hamburger Menu")

var menuBtn = document.getElementsByClassName("navbar-toggler")[0];
console.log(menuBtn)
var menu = document.getElementsByTagName("div")[0];
console.log(menu)

function menuToggle(){ 
    menu.classList.toggle("collapse");
};

menuBtn.addEventListener("click", menuToggle);

//----------------------------------------------
console.log("Fonctionnalité 3 : si on clique sur le bouton Edit de la première card, le texte de la card va se mettre en rouge de façon irréversibl")

var cardonetext = document.getElementsByClassName("card-text")[0];
console.log(cardonetext)

var cardonebtn = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];
console.log(cardonebtn)

cardonebtn.addEventListener("click",colorText);

function colorText(){
  cardonetext.style.color = "red";
}

//--------------------------------------------------
console.log("Fonctionnalité 4 : si on clique sur le bouton Edit de la deuxième card, le texte de la card va se mettre en vert. Si on re-clique dessus, il redevient comme avant !")

var cardtwotext = document.getElementsByClassName("card-text")[1];
console.log(cardtwotext)

var cardtwobtn = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];
console.log(cardtwobtn)

cardtwobtn.addEventListener("click",cardToggle);

// function colorText2(){
//   cardtwotext.style.color = "green";
// }


function cardToggle() {
if (cardtwotext.style.color === ""){ 
  cardtwotext.style.color = "green" ;
  }else 
 {
    cardtwotext.style.color = "" ;
  }};

//--------------------------------------------------
console.log("Fonctionnalité 5 : si un utilisateur double clique sur la navbar en haut, tout Bootstrap disparaît et la page s'affiche comme si on avait oublié de mettre le CDN qui la relie au fichier CSS. Si possible, rends cette fonctionnalité réversible (un nouveau double-clic fait tout revenir à la normale).")

var navbarEl = document.getElementsByTagName("header")[0];;
console.log(navbarEl);

var cdnEl = document.getElementsByTagName("link")[0];
console.log(cdnEl);

var headTag = document.getElementsByTagName("head")[0];
console.log(headTag);

var cdnStatus = false;

  var ciaoCdn = function () {
 if (cdnStatus == false){
cdnEl.parentNode.removeChild(cdnEl);
cdnStatus = true;
 }
else if (cdnStatus == true) {
 headTag.appendChild(cdnEl);
  cdnStatus = false;
 } 
  }

  navbarEl.addEventListener("dblclick",ciaoCdn);

console.log("Fonctionnalité 6 :si un utilisateur passe sa souris sur le bouton View d'une card (n'importe laquelle), celle-ci va se réduire. le texte disparaît, l'image n'apparaîtra qu'à 20 % de sa taille d'origine et les boutons Edit / View restent visibles. Cette fonction sera réversible : s'il repasse sa souris, la card redevient normale")

var viewbtn = document.getElementsByClassName("btn btn-sm btn-success")[2];
console.log(viewbtn)

var viewcardd = document.getElementsByClassName("col-md-4")[2];
console.log(viewcardd)

viewbtn.addEventListener("mousemove", shrinkView);

var viewcarddStatus = false;

var shrinkView = function() {
  if (viewcarddStatus == false){ 
    viewcardd.style.color = "white" ;
    viewcardd.image.style.height = "20%" ;
    viewcardd.image.style.width = "20%" ;
    viewcarddStatus == true;
    }else 
   {
    viewcardd.style.color = "" ;
    viewcardd.image.style.height = "100%" ;
    viewcardd.image.style.width = "100%" ;
    viewcarddStatus == false;
    }
}


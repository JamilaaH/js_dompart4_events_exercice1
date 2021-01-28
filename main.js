//1 
let titre = document.querySelector('h1');


let changement = () => {
    titre.style.color = "blue";
}


titre.addEventListener('click', changement)
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times'); // adiciona X ao clicar
    navbar.classList.toggle('active'); // adicionar navbar conteudo
}




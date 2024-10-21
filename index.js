let menu = document.querySelector('#menu-icon');
let navist= document.querySelector('.navlist');

menu.onclick = () => {
    menu.classlist.toggle('bx-x');
    navist.classList.toggle('open');
}
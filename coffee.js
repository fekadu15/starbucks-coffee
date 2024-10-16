let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = ()=>{
    console.log(menu)
    menu.classList.toggle('bx-bx');
    navbar.classList.toggle('active');
}
window.onscroll =()=>{
    console.log(menu.classList)
    menu.classList.remove('bx-x');
    console.log(menu.classList)
    navbar.classList.remove('active');
}

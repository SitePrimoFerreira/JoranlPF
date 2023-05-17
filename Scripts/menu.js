const btnMenu = document.getElementById('BtnMenujs');

function ToggleMenu(event) {

    if (event.type == 'touchstart') event.preventDefault();

    const nav = document.getElementById('nav');

    nav.classList.toggle('active');

}

btnMenu.addEventListener('click', ToggleMenu, {passive: false});
btnMenu.addEventListener('touchstart', ToggleMenu, {passive: false});
import { btnMenu } from "../inicializador.js";

const navBar = document.querySelector('#navbar-default');

export function mostrarMenu(){
    if(navBar.classList.contains('hidden')){
        navBar.classList.add('absolute','-top-9','nav-activa');
        navBar.classList.toggle('hidden');
        return;
    }

    navBar.classList.remove('absolute','-top-9','nav-activa');
    navBar.classList.toggle('hidden');
}
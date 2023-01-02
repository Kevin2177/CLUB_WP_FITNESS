import { cambiarTarget, comprobarPaginaAbierta} from './adaptaciones/target.js';
import { mostrarMenu } from './adaptaciones/mostrar-menu.js';

export const links = document.querySelectorAll('.ul-nav li a');
export const btnMenu = document.querySelector('.btn-menu');

eventos();  
function eventos(){
    comprobarPaginaAbierta();

    console.log(links);

    links[0].addEventListener('click', cambiarTarget);
    links[1].addEventListener('click', cambiarTarget);
    links[2].addEventListener('click', cambiarTarget);
    links[4].addEventListener('click', cambiarTarget);

    btnMenu.addEventListener('click', mostrarMenu);
}




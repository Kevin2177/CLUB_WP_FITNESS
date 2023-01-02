import { cambiarTarget, comprobarPaginaAbierta} from './target.js';
import { entrenamientoDetalles } from './servicios.js';

export const links = document.querySelectorAll('.menu a');


console.log(btnEntrenamientos);

eventos();  
function eventos(){
    comprobarPaginaAbierta();

    links[0].addEventListener('click', cambiarTarget);
    links[1].addEventListener('click', cambiarTarget);
    links[2].addEventListener('click', cambiarTarget);

}

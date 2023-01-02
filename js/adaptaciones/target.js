import { links } from '../inicializador.js';

const paginaInicio = document.querySelector('#section-inicio');
const paginaInstalaciones = document.querySelector('#section-instalaciones');
const paginaServicios = document.querySelector('#section-servicios');
const paginaInfo = document.querySelector('#section-info');
const body = document.querySelector('#body');

export function cambiarTarget(e){
    e.preventDefault();

    if(e.target.textContent === 'Inicio'){
        paginaInicio.classList.add('page-activa');
        paginaInstalaciones.classList.remove('page-activa');
        paginaServicios.classList.remove('page-activa');
        paginaInfo.classList.remove('page-activa');

    }else if(e.target.textContent === 'Instalaciones'){
        paginaInicio.classList.remove('page-activa');
        paginaInstalaciones.classList.add('page-activa');
        paginaServicios.classList.remove('page-activa');
        paginaInfo.classList.remove('page-activa');

    }else if(e.target.textContent === 'Servicios'){
        paginaInicio.classList.remove('page-activa');
        paginaInstalaciones.classList.remove('page-activa');
        paginaServicios.classList.add('page-activa');
        paginaInfo.classList.remove('page-activa');

    }else if(e.target.textContent === 'Más info'){
        paginaInicio.classList.remove('page-activa');
        paginaInstalaciones.classList.remove('page-activa');
        paginaServicios.classList.remove('page-activa');
        paginaInfo.classList.add('page-activa');
    }

    comprobarPaginaAbierta();
}

export function comprobarPaginaAbierta(){
    if(paginaInicio.classList.contains('page-activa')){
        links[0].classList.add('link-activo');
        links[1].classList.remove('link-activo');
        links[2].classList.remove('link-activo');
        links[4].classList.remove('link-activo');

        document.title = 'CLUB WP FITNESS | INICIO';
        body.style.backgroundImage = "url('../img/Fondo-principal.jpg')";
    }else if(paginaInstalaciones.classList.contains('page-activa')){
        links[0].classList.remove('link-activo');
        links[1].classList.add('link-activo');
        links[2].classList.remove('link-activo');
        links[4].classList.remove('link-activo');

        document.title = 'CLUB WP FITNESS | INSTALACIONES';
        body.style.backgroundImage = "url('../img/Fondo-Instalaciones.jpg')";
    }else if(paginaServicios.classList.contains('page-activa')){
        links[0].classList.remove('link-activo');
        links[1].classList.remove('link-activo');
        links[2].classList.add('link-activo');
        links[4].classList.remove('link-activo');

        document.title = 'CLUB WP FITNESS | SERVICIOS';
        body.style.backgroundImage = "url('../img/Fondo-servicios.jpg')";
    }else if(paginaInfo.classList.contains('page-activa')){
        links[0].classList.remove('link-activo');
        links[1].classList.remove('link-activo');
        links[2].classList.remove('link-activo');
        links[4].classList.add('link-activo');

        document.title = 'CLUB WP FITNESS | MAS INFO';
        body.style.backgroundImage = "url('../img/Fondo-info.jpg')";
    }
}
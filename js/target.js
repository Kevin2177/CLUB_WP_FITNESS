const links = document.querySelectorAll('.menu a');
const paginaInicio = document.querySelector('#section-inicio');
const paginaInstalaciones = document.querySelector('#section-instalaciones');
const paginaServicios = document.querySelector('#section-servicios');

const body = document.querySelector('#body');


eventos();
function eventos(){
    links[0].addEventListener('click',cambiarTarget);
    links[1].addEventListener('click',cambiarTarget);
    links[2].addEventListener('click',cambiarTarget);

    comprobarPaginaAbierta();
}

function cambiarTarget(e){
    e.preventDefault();

    if(e.target.textContent === 'Inicio'){
        paginaInicio.classList.add('page-activa');
        paginaInstalaciones.classList.remove('page-activa');
        paginaServicios.classList.remove('page-activa');

    }else if(e.target.textContent === 'Instalaciones'){
        paginaInicio.classList.remove('page-activa');
        paginaInstalaciones.classList.add('page-activa');
        paginaServicios.classList.remove('page-activa');


    }else if(e.target.textContent === 'Servicios'){
        paginaInicio.classList.remove('page-activa');
        paginaInstalaciones.classList.remove('page-activa');
        paginaServicios.classList.add('page-activa');

    }

    comprobarPaginaAbierta();
}

function comprobarPaginaAbierta(){
    if(paginaInicio.classList.contains('page-activa')){
        links[0].classList.add('link-activo');
        links[1].classList.remove('link-activo');
        links[2].classList.remove('link-activo');

        document.title = 'CLUB WP FITNESS | INICIO';
        body.style.backgroundImage = "url('../img/Fondo-principal.jpg')";
    }else if(paginaInstalaciones.classList.contains('page-activa')){
        links[0].classList.remove('link-activo');
        links[1].classList.add('link-activo');
        links[2].classList.remove('link-activo');

        document.title = 'CLUB WP FITNESS | INSTALACIONES';
        body.style.backgroundImage = "url('../img/Fondo-Instalaciones.jpg')";
    }else if(paginaServicios.classList.contains('page-activa')){
        links[0].classList.remove('link-activo');
        links[1].classList.remove('link-activo');
        links[2].classList.add('link-activo');

        document.title = 'CLUB WP FITNESS | SERVICIOS';
        body.style.backgroundImage = "url('../img/Fondo-servicios.jpg')";
    }
}
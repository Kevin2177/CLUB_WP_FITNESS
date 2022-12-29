const btnFormulario = document.querySelector('#button');
const divResultado = document.querySelector('#resultado');
const UMPeso = document.querySelector('#UMPeso');
const UMAltura = document.querySelector('#UMEstatura');
const lblPeso = document.querySelector('#lblPeso');
const lblAltura = document.querySelector('#lblAltura');

/* Varibales globales */
let peso;
let altura;

iniciarAPP();
function iniciarAPP(){
    btnFormulario.addEventListener('click', validarFormulario);
    UMPeso.addEventListener('change', actualizarLbl);
    UMAltura.addEventListener('change', actualizarLbl);
}
    
function validarFormulario(e){
    e.preventDefault();

    peso = parseFloat(document.querySelector('#peso').value);
    altura = parseFloat(document.querySelector('#altura').value);

    
    if(isNaN(peso) && isNaN(altura)){
        alerta('Debes ingresar todos los datos para calcular tu IMC');
        return;
    }

    if(UMPeso.value === 'lb'){
        convertirLb(peso);
    }

    if(UMAltura.value === 'm'){
        convertirM(altura);
    }

    if(UMAltura.value === 'ft'){
        convertirft(altura);
    }

    if(UMAltura.value === 'yd'){
        convertiryd(altura);
    }

    calcularIMC();

}

function actualizarLbl(){
    if(UMPeso.value === 'kg'){
        lblPeso.innerHTML = `Peso (${UMPeso.value})`
    }
    if(UMPeso.value === 'lb'){
        lblPeso.innerHTML = `Peso (${UMPeso.value})`
    }
    if(UMAltura.value === 'cm'){
        lblAltura.innerHTML = `Altura (${UMAltura.value})`;
    }
    if(UMAltura.value === 'm'){
        lblAltura.innerHTML = `Altura (${UMAltura.value})`;
    }
    if(UMAltura.value === 'ft'){
        lblAltura.innerHTML = `Altura (${UMAltura.value})`;
    }
    if(UMAltura.value === 'yd'){
        lblAltura.innerHTML = `Altura (${UMAltura.value})`;
    }
}

function calcularIMC(){
    limpiarHTML();
    console.log(peso);
    console.log(altura);
    const IMC = ((peso/Math.pow(altura,2))*10000).toFixed(2);
    
    const parrafoIMC = document.createElement('P');
    parrafoIMC.innerHTML = `Tu indice de masa corporal es:   <span class="bold">${IMC} </span>`;
    parrafoIMC.classList.add('text-2xl');

    divResultado.appendChild(parrafoIMC);
}

const convertirLb = lb => peso = lb * 0.453592;
const convertirM = metro => altura = metro * 100;
const convertirft = ft => altura = ft * 30.48;
const convertiryd = yd => altura = yd * 91.44;

function limpiarHTML(){
    while(divResultado.firstChild){
        divResultado.removeChild(divResultado.firstChild);
    }
}

function alerta(msj){
    const comprobarAlerta = document.querySelector('.text-red-600');

    if(!comprobarAlerta){
        const parrafoAlerta = document.createElement('P');
        parrafoAlerta.textContent = msj;
        parrafoAlerta.classList.add('text-red-600','bg-red-300','py-1','text-xl');
        
        divResultado.appendChild(parrafoAlerta);
        setTimeout(() => {
            parrafoAlerta.remove();
        }, 2500);
    };

    
}

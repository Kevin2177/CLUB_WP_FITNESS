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

    const IMC = ((peso/Math.pow(altura,2))*10000).toFixed(2);
    
    // SCRIPTING
    const parrafoIMC = document.createElement('P');
    parrafoIMC.innerHTML = `Tu indice de masa corporal es:   <span class="bold">${IMC} </span>`;
    parrafoIMC.classList.add('text-2xl');

    // Comprobacion del IMC para el su estatus
    const estatusIMC = document.createElement('P');
    if(IMC < 18.5){
        estatusIMC.textContent = 'Bajo de peso';
        estatusIMC.classList.add('text-red-800','text-xl','py-0.5','bg-yellow-300');
    }else if(IMC >= 18.5 && IMC <= 24.9){
        estatusIMC.textContent = 'Saludable';
        estatusIMC.classList.add('text-black','text-xl','py-0.5','bg-lime-400');
    }else if(IMC >= 25 && IMC <= 29.9){
        estatusIMC.textContent = 'Sobre Peso';
        estatusIMC.classList.add('text-red-800','text-xl','py-0.5','bg-yellow-300');
    }else if(IMC > 30){
        estatusIMC.textContent = 'Obesidad';
        estatusIMC.classList.add('text-red-800','text-xl','py-0.5','bg-red-400');
    }

    divResultado.appendChild(parrafoIMC);
    divResultado.appendChild(estatusIMC);
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

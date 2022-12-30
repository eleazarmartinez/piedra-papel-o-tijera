
let puntosUsuario = 0;
let puntosPC = 0;

let instrucciones = document.querySelector("#instrucciones");

let contenedorPuntosUsuario = document.querySelector("#puntos-usuario");

let contenedorPuntosPC = document.querySelector("#puntos-computadora");

let mensaje = document.querySelector("#mensaje");

let contenedorGanaPunto = document.querySelector("#gana-punto");

let elegiTuArma = document.querySelector("#elegi-tu-arma");


let contenedorEleccionUsuario = document.querySelector("#eleccion-usuario");

let contenedorEleccionPC = document.querySelector("#eleccion-computadora");
let botonesArma = document.querySelectorAll(".arma")
let btnReiniciar = document.querySelector("#reiniciar")
let armas = document.querySelector(".armas")

botonesArma.forEach((botones)=>{
    botones.addEventListener("click",jugar)
})

function jugar(e){
    let elecUsuario= e.currentTarget.id;
    let elecPc = Math.floor(Math.random()*3);

    if(elecPc ===0){
        elecPc = "piedra🪨"
    }else if(elecPc ===1){
        elecPc = "papel📋"
    }else if(elecPc ===2){
       elecPc = "tijera✂️"
    }
    
    if((elecUsuario === "piedra🪨" && elecPc === "tijera✂️" )
    || (elecUsuario === "papel📋" && elecPc === "piedra🪨")
    ||(elecUsuario ==="tijera✂️" && elecPc ==="papel📋")
    ){
        ganaUsuario()

    }else if((elecPc === "piedra🪨" && elecUsuario === "tijera✂️" )
    || (elecPc === "papel📋" && elecUsuario === "piedra🪨")
    ||(elecPc ==="tijera✂️" && elecUsuario ==="papel📋")
    ){
       
   ganaPc()

    }else{
        empate()
    }

    mensaje.classList.remove("disabled")

    mostrarMensaje(elecUsuario,elecPc)

    if(puntosPC===5 ||puntosUsuario ===5){
        reinicioJuego()
        armas.classList.add("disabled")
        puntosPC = 0;
        puntosUsuario =0
    }

}

function ganaUsuario(){
        puntosUsuario++;
        contenedorPuntosUsuario.innerText = puntosUsuario;
        contenedorGanaPunto.innerText = "ganastes un punto 🔥"
        

}

function ganaPc (){
        puntosPC++;
        contenedorPuntosPC.innerText = puntosPC;
        contenedorGanaPunto.innerText = "la pc hizo un punto 😭"

}
function empate(){
    contenedorGanaPunto.innerText = "empate 😒"
}


function mostrarMensaje(mensajeUsuario,mensajePc){
    
    contenedorEleccionUsuario.innerText =mensajeUsuario
    contenedorEleccionPC.innerText = mensajePc
}

function reinicioJuego(){
    if(puntosUsuario ===5){
        instrucciones.innerText ="😂ganaste el juego😂"
        puntosUsuario.innerText = 0
        
        
    }else if(puntosPC===5){
        instrucciones.innerText ="😭la computadora gano el juego😭"
        puntosPC.innerText =0
       
        
    }
    btnReiniciar.classList.remove("disabled")

  btn()
     
}

function btn(){
    btnReiniciar.addEventListener("click",()=>{
        mensaje.classList.add("disabled")
        btnReiniciar.classList.add("disabled")
        contenedorPuntosUsuario.innerText =0;
        contenedorPuntosPC.innerText =0;
        instrucciones.innerText = "El primero en llegar a 5 puntos gana";
        armas.classList.remove("disabled")
       })
}
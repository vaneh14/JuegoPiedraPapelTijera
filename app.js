// Inicializacion y declaracion de variables //
let puntajeJugador = 0;
let puntajeComputadora = 0;

const manoJugador = document.querySelector("#mano-jugador");
const manoComputadora = document.querySelector("#mano-computadora");

const playerScore = document.querySelector(".puntaje-jugador p");
const computerScore = document.querySelector(".puntaje-computadora p");

const resultado = document.querySelector("#resultado");


// Resetear el tablero //
const limpiar = () => {
  
    resultado.textContent = "...";
  
    manoJugador.src = `./assets/piedra_izq.png`;
    manoComputadora.src = `./assets/piedra_der.png`;
}


// Eleccion de la computadora //
const obtenerEleccionComputadora = () => {
    const eleccionComputadora = ['piedra', 'papel', 'tijera'];
  
    const numeroEleccion = Math.floor(Math.random() * 3);
    console.log(numeroEleccion)
  
    return eleccionComputadora[numeroEleccion];
}


// Jugar segun la eleecion del jugador //
const jugar = (eleccionJugador) => {
    const tablero = document.querySelector(".tablero");
  
    setTimeout(() => {
        
      const eleccionComputadora = obtenerEleccionComputadora();
  
      compararEleccion(eleccionJugador, eleccionComputadora);
  
      manoJugador.src = `./assets/${eleccionJugador}_izq.png`;
      manoComputadora.src = `./assets/${eleccionComputadora}_der.png`;
    }, 2000);
  
}


// Actualizar puntajes //
const actualizarPuntajes = () => {
  
    playerScore.textContent = puntajeJugador;
    computerScore.textContent = puntajeComputadora;
};


// Comparar elecciones del jugador y la computadora //
const compararEleccion = (eleccionJugador, eleccionComputadora) => {

    if (eleccionJugador === eleccionComputadora) {
      resultado.textContent = "¡Empataste!";
    }
    else if (eleccionJugador === "piedra") {
      if (eleccionComputadora === "tijera") {
        resultado.textContent = "¡Ganaste!";
        puntajeJugador++;
      } else {
        resultado.textContent = "¡Perdiste!";
        puntajeComputadora++;
      }
    }
    else if (eleccionJugador === "papel") {
      if (eleccionComputadora === "tijera") {
        resultado.textContent = "¡Perdiste!";
        puntajeComputadora++;
      } else {
        resultado.textContent = "¡Ganaste!";
        puntajeJugador++;
      }
    }
    else if (eleccionJugador === "tijera") {
      if (eleccionComputadora === "piedra") {
        resultado.textContent = "¡Perdiste!";
        puntajeComputadora++;
      } else {
        resultado.textContent = "¡Ganaste!";
        puntajeJugador++;
      }
    }

    actualizarPuntajes();
}


// Jugar segun el boton seleccionado //
const presionarBoton = () => {

    const botonPiedra = document.querySelector("#btn-piedra");
    const botonPapel = document.querySelector("#btn-papel");
    const botonTijera = document.querySelector("#btn-tijera");

    botonPiedra.onclick = () => {
        limpiar();
        jugar('piedra');
    }

    botonPapel.onclick = () => {
        limpiar();
        jugar('papel');
    }

    botonTijera.onclick = () => {
        limpiar();
        jugar('tijera');
    }

}


// Resetear juego //
const resetearJuego = () => {
    const botonResetear = document.querySelector("#btn-resetear");

    botonResetear.onclick = () => {
  
        resultado.textContent = "Elegí una opción";
  
        manoJugador.src = `./assets/piedra_izq.png`;
        manoComputadora.src = `./assets/piedra_der.png`;

        puntajeJugador = 0;
        puntajeComputadora = 0;

        playerScore.textContent = puntajeJugador;
        computerScore.textContent = puntajeComputadora;        
    }
}


presionarBoton();

resetearJuego();
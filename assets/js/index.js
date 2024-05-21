alert ("¡Vamos a jugar!") //comienzo del juego

let puntajeHumano = 0;
let puntajeMaquina = 0;
let empate = 0;

let numeroJugadas = prompt ("¿Cuántas veces quieres jugar?"); //persona indica cuántas veces quiere jugar

for (let i=0; i<numeroJugadas; i++) {     //bucle para que se repita el numero de juagadas elegido

    let jugadaHumano = Number (prompt ("Elige un número para tu opción: (0) piedra, (1) papel o (2) tijera")); //persona elige su jugada
    let jugadaMaquina = Math.floor(Math.random()*3) //maquina elige su jugada

    if (                                                    //aplico condiciones del cachipun
        (jugadaHumano == "2" && jugadaMaquina == "1")||
        (jugadaHumano == "1" && jugadaMaquina == "0")||
        (jugadaHumano == "0" && jugadaMaquina == "2")
    ){
        puntajeHumano++;
        alert("Humano gana partida")
    } else if (
        (jugadaMaquina == "2" && jugadaHumano == "1")||
        (jugadaMaquina == "1" && jugadaHumano == "0")||
        (jugadaMaquina == "0" && jugadaHumano == "2")
    ){
        puntajeMaquina++;
        alert("Maquina gana partida")
    } else {
        empate++;
        alert ("Esto es un empate!")
    }
}

if (puntajeHumano>puntajeMaquina) {                             //le explico al programa cómo saber quién ganó y genero alertas para cada situación
    alert ("Ganó la partida de " + numeroJugadas + " juegos el humano, felicitaciones humano!")
} else if (puntajeMaquina>puntajeHumano) {
    alert ("Humano, has perdido contra la máquina")
} else {
    alert("No hay ganadores, esto es un empate")
}



/*

let jugadaMaquina = math.floor (math.random()*3); //maquina indica su jugada

//tijera>papel
//papel>piedra
//piedra>tijera
//si eligen la misma opción empatan


for (let i=0; i<numeroJugadas; i++){     //bucle para que se repita el numero de juagadas elegido

    if (
        (jugadaHumano === tijera && jugadaMaquina === papel)||
        (jugadaHumano === papel && jugadaMaquina === piedra)||
        (jugadaHumano === piedra && jugadaMaquina === tijera)
    ){
        puntajeHumano(++)
        alert("Humano gana partida")
    } else (
        (jugadaMaquina === tijera && jugadaHumano === papel)||
        (jugadaMaquina === papel && jugadaHumano === piedra)||
        (jugadaMaquina === piedra && jugadaHumano === tijera)
    ){
        puntajeMaquina(++)
        alert("Maquina gana partida")
    } else (
        (jugadaMaquina === tijera && jugadaHumano === tijera)||
        (jugadaMaquina === papel && jugadaHumano === papel)||
        (jugadaMaquina === piedra && jugadaHumano === piedra)
    ){
        empate()
        alert("Esto es un empate")
    }
}

if (puntajeHumano>puntajeMaquina) {
    alert("Felicidades humano, has ganado")
} else (puntajeMaquina>puntajeHumano){
    alert("Humano, has perdido contra la máquina")
} else (puntajeHumano === puntajeMaquina){
    alert("Esto es un empate")
}
    

//persona elige una opcion entre papel, piedra o tijera
//let elige = prompt ("¿Piedra, papel o tijera?")
//let piedra = piedra>tijera

//maquina elige aleatoriamente mediante la funcion 
//Math.random()

//Programa debe comparar las elecciones, de manera que:
//tijera>papel
//papel>piedra
//piedra>tijera
//si eligen la misma opción empatan


//Al finalizar cada juego se debe mostrar el resultado y luego pedir nuevamente una respuesta dependiendo de las veces que haya indicado el usuario que desea jugar

//Al finalizar definir un ganador, considerando la jugada del usuario y la de la maquina

//Indicar el resultado con 3 posibilidades:
//-felicitar al ganador
//-indicarle al usuario que ha perdido contra la maquina, si perdió
//-declarar un empate

*/
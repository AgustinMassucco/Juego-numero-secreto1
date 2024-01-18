// Variables
let numeroMaximoPos = parseInt(prompt('Ingrese el numero maximo de posibilidades que desea'))
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPos) + 1;
let numeroUsuario = 0;
let intentos = 1;
let palabraIntento = 'intento';
let maximosIntentos = 3;

while (numeroSecreto != numeroUsuario){
    numeroUsuario = parseInt(prompt (`Me indicas un numero entre 1 al ${numeroMaximoPos} por favor`));
    
    console.log(numeroUsuario);

    /*
    Este codigo realiza 
    la comparacion
    */
    if (numeroUsuario == numeroSecreto) {
        //La condicion es verdadera
        alert(`Acertaste en ${intentos} ${intentos==1 ? 'vez' : 'veces'}, el numero es: ${numeroUsuario}`);
    } else {
        if (numeroUsuario > numeroSecreto){
            alert ('El numero secreto es menor')
        }
        else{
            alert ('El numero secreto es mayor')
        }
        //La condicion es falsa
        alert ('Lo siento, no acertaste en numero')
        //Incrementamos el contador
        intentos++;
        palabraIntento = 'intentos';
        if (intentos > maximosIntentos){
            alert(`Llegaste al numero maximo de ${maximosIntentos} intentos `);
            break;
        }
    }
}

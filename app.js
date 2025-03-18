// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let amigoSecreto = document.getElementById("amigo").value;
    console.log(amigoSecreto);
    if (amigoSecreto) {
        amigos.push(amigoSecreto);
        actualizarListaAmigos();
        document.getElementById("amigo").value = "";
        console.log(amigos);
        limpiaCaja();
    } else {
        alert("Por favor, inserte un nombre.");
    }
    return;
}

function limpiaCaja() {
    document.querySelector("#amigo").value = "";
    return;
}

function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (i = 0; i < amigos.length; i++) {
        let nuevoElemento = document.createElement("li");
        nuevoElemento.innerHTML = amigos[i];
        lista.appendChild(nuevoElemento);
        console.log(nuevoElemento);
        //no debe ir return aquí, sino no funciona
    }
    return;
}

function sortearAmigo() {
    let longitudArrayAmigos = amigos.length;
    amigoSorteado = Math.floor(Math.random()*longitudArrayAmigos);
    
    console.log(longitudArrayAmigos);
    console.log(amigoSorteado);
    if (longitudArrayAmigos != 0) {
        //no se puede declar una variable aquí, debe ser despues de function.
        alert(`En tu lista de amigos hay ${longitudArrayAmigos}`)
        
        console.log(amigoSorteado);
        //Aquí en una variable, se asigna el elemento html con el cual se va a interactuar
        let resultadoSorteo = document.getElementById('resultado');
        //se le indica a la variable anterior que valor va asignarsele para que aparezca en el elemento html
        resultadoSorteo.innerHTML = (`El amigo secreto sorteado es: ${amigos[amigoSorteado]}`);
    } else {
        console.log('la lista de amigos esta vacía');
    }
    return amigoSorteado;
}


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

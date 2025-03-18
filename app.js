let amigos = [];

//Permite agregar un nombre y los coloca en una lista.
function agregarAmigo() {
    let amigoSecreto = document.getElementById("amigo").value;
    if (amigoSecreto) {
        amigos.push(amigoSecreto);
        actualizarListaAmigos();
        document.getElementById("amigo").value = "";
        limpiaCaja();
    } else {
        //Valída que se ingrese un nombre y no dejarlo vacío.
        alert("Por favor, inserte un nombre.");
    }
    return;
}

//Limpia la caja después de agregar un nombre.
function limpiaCaja() {
    document.querySelector("#amigo").value = "";
    return;
}

//Muestra los nombres agregados en pantalla
function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    //Recorre la lista de nombres y crea los elementos "li" en html para mostrarlos
    for (i = 0; i < amigos.length; i++) {
        let nuevoElemento = document.createElement("li");
        nuevoElemento.innerHTML = amigos[i];
        lista.appendChild(nuevoElemento);
    }
    return;
}

function sortearAmigo() {
    let longitudArrayAmigos = amigos.length;
    amigoSorteado = Math.floor(Math.random()*longitudArrayAmigos);
    
    if (longitudArrayAmigos != 0) {
        //Selecciona el elemento en el cual se mostrara el nombre sorteado.
        let resultadoSorteo = document.getElementById('resultado');
        //Asigna el valor del nombre sorteado en el elemento seleccionado anteriormente.
        resultadoSorteo.innerHTML = (`El amigo secreto sorteado es: ${amigos[amigoSorteado]}`);
        //Limpia el listado de nombres que estaba mostrado en pantalla.
        let lista = document.getElementById("listaAmigos");
        lista.innerHTML = "";
    } else {
        alert('La lista de amigos esta vacía. Por favor, ingrese un nombre');
    }
    return amigoSorteado;
}


let amigos = [];
let lista = document.getElementById('listaAmigos');
let campoAmigo = document.getElementById('amigo');
let resultado = document.getElementById('resultado');
/*
Implementa una función para agregar amigos:
Desarrolla una función, que permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente.
*/
function agregarAmigo() {
    if (resultado.textContent !== '') {
        resultado.innerHTML = '';
    }
    //Capturar el valor del campo de entrada
    let valorAmigo = campoAmigo.value;
    //Validar la entrada
    if (valorAmigo.length > 0) {
        if (!amigos.includes(valorAmigo)) {
            //Actualizar el array de amigos
            amigos.push(valorAmigo);
            //limpia y actualiza 
            actualizarAmigos();
        } else {
            alert('Este amigo ya está en la lista.');
        }

    } else {
        //Si está vacío, mostrar un alert con un mensaje de error
        alert('Por favor, inserte un nombre.');
    }
}

/*Implementa una función para actualizar la lista de amigos:
Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> dentro de una lista HTML. Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.
*/
function actualizarAmigos() {
    //Limpiar la lista y el campo Amigos
    limpiar();
    //Iterar sobre el arreglo
    for (let i = 0; i < amigos.length; i++) {
        //crear elementos de lista (<li>)
        let li = document.createElement("li");
        //Asignar el nombre del amigo como texto al <li>
        li.appendChild(document.createTextNode(amigos[i]));
        //Agregar elementos a la lista
        lista.appendChild(li);
    }

}

function limpiar() {
    campoAmigo.value = '';
    lista.innerHTML = '';
}

/*Implementa una función para sortear los amigos
Escribe una función que seleccione de manera aleatoria uno de los nombres almacenados en el array amigos. Usa Math.random() y Math.floor() para obtener un índice aleatorio.
*/
function sortearAmigo() {
    //Validar que haya amigos disponibles
    if (amigos.length > 0) {
        //Generar un índice aleatorio
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        //Obtener el nombre sorteado
        let amigoSorteado = amigos[indiceAleatorio];
        //limpiar lista
        limpiar();
        //vaciar array
        amigos.length = 0;
        //Mostrar el resultado
        resultado.innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
    } else {
        alert('No existen amigos para sortear.');
    }
}
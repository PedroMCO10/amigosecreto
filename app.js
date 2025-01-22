// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Crear un array para almacenar los nombres*/
    const amigos = [];

//Implementa una función para agregar amigos*/

function agregarAmigo(){
 
    const amigosCampo = document.getElementById('amigo').value;
  
// Validar que el campo no esté vacío
    if (amigosCampo === ""){
        alert("Por favor, inserte un nombre");
        return;
     }

// Añadir el amigo al array
    amigos.push(amigosCampo);

 // Llamamos a la función para actualizar la lista de amigos en la página
    actualizarListaAmigos();

 // Limpiamos el campo de entrada después de agregar el nombre
    amigosCampo = document.getElementById('amigo').value='';
}

// Función para actualizar la lista de amigos en la página
function actualizarListaAmigos() {

    // Obtenemos el <ul> (lista) donde vamos a mostrar los amigos
    const listaAmigos = document.getElementById("listaAmigos");

    // Limpiamos la lista (en caso de que tenga elementos anteriores)
    listaAmigos.innerHTML = "";

    // Recorremos el array 'amigos' y agregamos cada nombre a la lista
    for (let i = 0; i < amigos.length; i++) {

        // Creamos un nuevo elemento <li> para cada amigo
        const li = document.createElement("li");
        li.textContent = amigos[i]; 

        // Agregamos el nuevo <li> dentro del <ul> (lista)
        listaAmigos.appendChild(li);
    }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
 
     // Validar si el array amigos tiene al menos un nombre
     if (amigos.length === 0) {
        alert("La lista de amigos está vacía. Por favor, añade amigos antes de sortear.");
                return; 
            }
    
     // Generar un índice aleatorio basado en la longitud del array amigos
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
     
    // Obtener el nombre del amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];

     // Mostrar el resultado en el elemento de resultado
     const resultadoElemento = document.getElementById("resultado");
     resultadoElemento.innerHTML = `<li>Amigo secreto sorteado es: <strong>${amigoSorteado}</strong></li>`;

    // Limpiar la lista de amigos de la vista
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; 
}

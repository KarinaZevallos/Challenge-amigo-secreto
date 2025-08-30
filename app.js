
let amigos = [] //arreglo vacio

function agregarAmigo(){
    let nombres = document.getElementById('amigo').value;
    if (nombres == '') {
        alert("Por favor, ingrese un nombre");
    } else {
        amigos.push(nombres);
        console.log("Lista de amigos:" , amigos );
        document.getElementById('amigo').value = '';
        actualizarLista();
    }    
} 
    
function actualizarLista(){

    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++){
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}


function sortearAmigo(){
    if (amigos.length == 0){
        alert("No hay amigos para sortear");
        return;
    }
    const nombreAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[nombreAleatorio];
    const resultadoAmigo = document.getElementById("resultado");
    resultadoAmigo.innerHTML = 'El amigo secreto es: ' + amigoSorteado;
}

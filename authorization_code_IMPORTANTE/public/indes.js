const socket = io();

const buscador = document.getElementById("buscador");

buscador.addEventListener('input', updateSearch);

function updateSearch(e){
    socket.emit("search", {item: e.srcElement.value});
}

socket.on("found", (data)=>{
    console.log(data);
})
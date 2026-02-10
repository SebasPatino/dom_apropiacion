const campoTexto = document.querySelector("input");
const boton = document.querySelector('button');
const resultado = document.querySelector("#mensajes");

function agregarMensaje (e) {
    e.preventDefault();
    const texto = campoTexto.value.trim();
    if (texto !== "") {
        resultado.value += texto + "\n";
        console.log(`Mensaje agregado: ${texto}`);
        campoTexto.value = "";
    } else {
        alert("Por favor, ingresa un mensaje antes de agregarlo.");
    }
}

boton.addEventListener("click", agregarMensaje);
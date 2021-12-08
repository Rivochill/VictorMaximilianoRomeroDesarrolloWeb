function mostrarMostrarTextoIngresado() {
    
    e.preventDefault();
    
    var textoIngresado = document.getElementById("textoUsuario").value;
    
    document.querySelector("h4").textContent = textoIngresado;
    console.log(Ejecutando);
}

var form = document.getElementById("form");
form.addEventListener("submit", mostrarMostrarTextoIngresado);
const BotonTema = document.getElementById("boton-tema");

BotonTema.textContent="Modo Oscuro";

BotonTema.addEventListener("click",function(){
document.body.classList.toggle("oscuro");

if(document.body.classList.contains("oscuro")){
    BotonTema.textContent="Modo Claro";
}
else{
    BotonTema.textContent="Modo Oscuro";
}
});



const FormContacto = document.getElementById("FormContacto");

FormContacto.addEventListener("submit",function(event){

    event.preventDefault();

    const nombre = document.getElementById("nombre").value;

    const email = document.getElementById("email").value;

    const mensaje = document.getElementById("mensaje").value;

    if(nombre==""||email==""||mensaje==""){

        alert("Complete los campos del formulario de contacto antes de enviar ");

    }
    else{
        alert("Formulario Enviado Correctamente");
    }

});
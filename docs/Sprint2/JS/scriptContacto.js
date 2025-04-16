document.getElementById("formContacto").addEventListener("submit", function (e) {
    e.preventDefault(); 
  
    let nombre = document.getElementById("nombre").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let telefono = document.getElementById("numero").value.trim();
  
    let valido = true;
  
    if (nombre.length < 3 || /\d/.test(nombre)) {
      document.getElementById("errorNombre").innerText = "Nombre inválido (mínimo 3 letras y sin números)";
      valido = false;
    } else {
      document.getElementById("errorNombre").innerText = "";
    }
  
    let validadorCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!validadorCorreo.test(correo)) {
      document.getElementById("errorCorreo").innerText = "Correo inválido";
      valido = false;
    } else {
      document.getElementById("errorCorreo").innerText = "";
    }
  
    if (!/^\d{9}$/.test(telefono)) {
      document.getElementById("errorTelefono").innerText = "Teléfono debe tener 9 dígitos";
      valido = false;
    } else {
      document.getElementById("errorTelefono").innerText = "";
    }
  
    if (valido) {
      alert("Formulario enviado con éxito");
    }
  });
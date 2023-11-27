const regexToBeAfirmativo =
  /^(I('m| am)|You('re| are)|He('s| is)|She('s| is)|It('s| is)|We('re| are)|They('re| are)|[A-Z][a-z]*('s| is)|[A-Z][a-z]* .+|The [A-Z][a-z]+ (am|is|are)) .+$/;

function validarToBeAfirmativo(cadena) {
  return regexToBeAfirmativo.test(cadena);
}

function validarOraciones() {
  const inputOraciones = document.getElementById("oraciones");
  const resultadoDiv = document.getElementById("resultado");

  // Limpiar el resultado anterior
  resultadoDiv.innerHTML = "";

  // Obtener las oraciones del textarea
  const oraciones = inputOraciones.value.split("\n");

  // Inicializar el contador de oraciones correctas
  let correctCount = 0;

  // Validar cada oración y mostrar el resultado
  oraciones.forEach((oracion, index) => {
    const esValida = validarToBeAfirmativo(oracion.trim());
    const resultado = esValida ? "Correcta" : "Incorrecta";
    const color = esValida ? "green" : "red";

    // Incrementar el contador si la oración es correcta
    if (esValida) {
      correctCount++;
    }

    // Crear un elemento div para mostrar el resultado
    const resultadoElement = document.createElement("div");
    resultadoElement.style.color = color;
    resultadoElement.textContent = `Oración ${index + 1}: ${resultado}`;

    // Agregar el resultado al contenedor
    resultadoDiv.appendChild(resultadoElement);
  });

  // Agregar un pequeño retraso antes de mostrar la alerta
  // Reemplazar el código de las alertas con SweetAlert2

setTimeout(() => {
  // Determinar el mensaje final según el contador
  let message = "";
  if (correctCount === oraciones.length) {
      message = "Excelente, todas fueron correctas!";
      Swal.fire({
          title: '¡Excelente!',
          text: 'Todas las oraciones fueron correctas',
          icon: 'success',
          confirmButtonText: 'Aceptar'
      });
  } else if (correctCount >= oraciones.length / 2) {
      message = "Muy bien, pero puedes mejorar";
      Swal.fire({
          title: 'Muy bien',
          text: 'Pero puedes mejorar',
          icon: 'info',
          confirmButtonText: 'Aceptar'
      });
  } else {
      message = "Tienes que estudiar más";
      Swal.fire({
          title: 'Tienes que estudiar más',
          text: 'Algunas oraciones no fueron correctas',
          icon: 'error',
          confirmButtonText: 'Aceptar'
      });
  }
}, 200); // Ajusta el tiempo según sea necesario

}

const inputOraciones = document.getElementById("oraciones");
const resultadoDiv = document.getElementById('resultado');
function limpiarTextArea() {
  inputOraciones.value = ''; // Limpia el contenido del textarea
  resultadoDiv.innerHTML = '';
}

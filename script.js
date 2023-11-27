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
  setTimeout(() => {
    // Determinar el mensaje final según el contador
    let message = "";
    if (correctCount === oraciones.length) {
      message = "Excelente, todas fueron correctas!";
    } else if (correctCount >= oraciones.length / 2) {
      message = "Muy bien, pero puedes mejorar";
    } else {
      message = "Tienes que estudiar más";
    }

    // Mostrar el mensaje final
    alert(message);
  }, 100);
}

const inputOraciones = document.getElementById("oraciones");
function limpiarTextArea() {
  inputOraciones.value = ''; // Limpia el contenido del textarea
}

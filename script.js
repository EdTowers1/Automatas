



const regexToBeAfirmativo =
  /^((I('m| am)|You('re| are)|He('s| is)|She('s| is)|It('s| is)|We('re| are)|They('re| are))|[A-Z][a-z]*('s| is)|The .+ (is|'s)) .+$/;

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

  // Validar cada oración y mostrar el resultado
  oraciones.forEach((oracion, index) => {
    const esValida = validarToBeAfirmativo(oracion.trim());
    const resultado = esValida ? "Correcta" : "Incorrecta";
    const color = esValida ? "green" : "red";

    // Crear un elemento div para mostrar el resultado
    const resultadoElement = document.createElement("div");
    resultadoElement.style.color = color;
    resultadoElement.textContent = `Oración ${index + 1}: ${resultado}`;

    // Agregar el resultado al contenedor
    resultadoDiv.appendChild(resultadoElement);
  });
}

const inputOraciones = document.getElementById("oraciones");
function limpiarTextArea() {
  inputOraciones.value = ''; // Limpia el contenido del textarea
}
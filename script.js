function mostrarInfo() {
    var selectVehiculo = document.getElementById("selectVehiculo");
    var vehiculoSeleccionado = selectVehiculo.value;
    var infoVehiculo = document.getElementById("infoVehiculo");

    // Lógica para mostrar la información del vehículo seleccionado
    switch (vehiculoSeleccionado) {
        case "caddy":
            infoVehiculo.innerHTML = "<p>Número de serie: WV1CAASE7KX002403</p><p>Placas: AA3521C</p>";
            break;
        case "saveiro":
            infoVehiculo.innerHTML = "<p>Número de serie: 9BWKB45U5NP038446</p><p>Placas: AA0075C</p>";
            break;
        case "ram":
            infoVehiculo.innerHTML = "<p>Número de serie: ZZZZ</p><p>Placas: GHI789</p>";
            break;
        case "silverado":
            infoVehiculo.innerHTML = "<p>Número de serie: WWWW</p><p>Placas: JKL012</p>";
            break;
        default:
            infoVehiculo.innerHTML = "";
            break;
    }
}

function mostrarNumeroLicencia() {
    var selectConductor = document.getElementById("selectConductor");
    var numeroLicenciaSpan = document.getElementById("numeroLicencia");

    // Lógica para mostrar el número de licencia del conductor seleccionado
    switch (selectConductor.value) {
        case "Carlos":
            numeroLicenciaSpan.textContent = "F1184874"; // Número de licencia de Carlos
            break;
        case "Antonio":
            numeroLicenciaSpan.textContent = "F1134840"; // Número de licencia de Antonio
            break;
        case "Guillermo":
            numeroLicenciaSpan.textContent = "456789123"; // Número de licencia de Guillermo
            break;
        default:
            numeroLicenciaSpan.textContent = ""; // Si no se selecciona ningún conductor
            break;
    }
}

document.addEventListener('DOMContentLoaded', function () {
  const slider = document.getElementById('fuelSlider');
  const fuelLevel = document.getElementById('fuelLevel');
  const needle = document.getElementById('needle');
  const fuelAmount = document.getElementById('fuelAmount'); // No se usará más

  slider.addEventListener('input', function () {
    const value = this.value;
    fuelLevel.style.height = value + '%';
    // fuelAmount.innerText = value + '%'; // Eliminar esta línea
    const rotation = -135 + (value * 2.15); // 2.7 grados por cada porcentaje
    needle.style.transform = `translateX(-50%) rotate(${rotation}deg)`;
  });
});

document.addEventListener('DOMContentLoaded', function () {
    // Código para la firma del supervisor
    const canvasSupervisor = document.getElementById('firmaCanvasSupervisor');
    const ctxSupervisor = canvasSupervisor.getContext('2d');
    const signaturePadSupervisor = new SignaturePad(canvasSupervisor);

    // Botón para borrar la firma del supervisor
    const borrarFirmaSupervisorBtn = document.getElementById('borrarFirmaSupervisor');
    borrarFirmaSupervisorBtn.addEventListener('click', function() {
        signaturePadSupervisor.clear();
    });

    // Código para la firma del conductor
    const canvasConductor = document.getElementById('firmaCanvasConductor');
    const ctxConductor = canvasConductor.getContext('2d');
    const signaturePadConductor = new SignaturePad(canvasConductor);

    // Botón para borrar la firma del conductor
    const borrarFirmaConductorBtn = document.getElementById('borrarFirmaConductor');
    borrarFirmaConductorBtn.addEventListener('click', function() {
        signaturePadConductor.clear();
    });

    // Restaurar las firmas al cargar la página si hay firmas guardadas en el almacenamiento local
    var savedSignatureSupervisor = localStorage.getItem('savedSignatureSupervisor');
    if (savedSignatureSupervisor) {
        signaturePadSupervisor.fromDataURL(savedSignatureSupervisor);
    }

    var savedSignatureConductor = localStorage.getItem('savedSignatureConductor');
    if (savedSignatureConductor) {
        signaturePadConductor.fromDataURL(savedSignatureConductor);
    }

    // Guardar las firmas cuando se hace clic en el botón de guardar
    document.getElementById('botonGuardar').addEventListener('click', function () {
        // Obtener las firmas como imágenes base64 y guardarlas en el almacenamiento local
        var signatureDataSupervisor = signaturePadSupervisor.toDataURL();
        localStorage.setItem('savedSignatureSupervisor', signatureDataSupervisor);

        var signatureDataConductor = signaturePadConductor.toDataURL();
        localStorage.setItem('savedSignatureConductor', signatureDataConductor);
    });

    // Borrar las firmas cuando se hace clic en el botón de borrar
    document.getElementById('borrarFirmaSupervisor').addEventListener('click', function () {
        signaturePadSupervisor.clear();
        localStorage.removeItem('savedSignatureSupervisor');
    });

    document.getElementById('borrarFirmaConductor').addEventListener('click', function () {
        signaturePadConductor.clear();
        localStorage.removeItem('savedSignatureConductor');
    });
});



function borrarFormato() {
    // Limpiar selección de vehículo
    document.getElementById("selectVehiculo").value = "";
    document.getElementById("infoVehiculo").innerHTML = "";

    // Limpiar fecha y hora de salida
    document.getElementById("fechaSalida").value = "";
    document.getElementById("horaSalida").value = "";

    // Limpiar documentación del vehículo
    var radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => radio.checked = false);

    // Limpiar selección de conductor
    document.getElementById("selectConductor").value = "";
    document.getElementById("numeroLicencia").textContent = "";
    document.getElementById("tipoRuta").value = "";

    // Limpiar nombres de acompañantes
    var inputsAcompanantes = document.querySelectorAll('#acompanantes input[type="text"]');
    inputsAcompanantes.forEach(input => input.value = "");

    // Limpiar kilometraje
    document.getElementById("kilometrajeInicial").value = "";
    document.getElementById("kilometrajeFinal").value = "";

    // Limpiar niveles óptimos
    var nivelesRadios = document.querySelectorAll('#Niveles input[type="radio"]');
    nivelesRadios.forEach(radio => radio.checked = false);

    // Resetear medidor de gasolina
    document.getElementById("fuelSlider").value = 50;
    document.getElementById("fuelLevel").style.height = "50%";
    document.getElementById("needle").style.transform = "translateX(-50%) rotate(0deg)";
    // document.getElementById("fuelAmount").innerText = "50%"; // Eliminar esta línea si ya no se necesita

    // Limpiar observaciones
    document.getElementById("textoObservaciones").value = "";

    // Limpiar firmas
    var canvasSupervisor = document.getElementById('firmaCanvasSupervisor');
    var ctxSupervisor = canvasSupervisor.getContext('2d');
    ctxSupervisor.clearRect(0, 0, canvasSupervisor.width, canvasSupervisor.height);

    var canvasConductor = document.getElementById('firmaCanvasConductor');
    var ctxConductor = canvasConductor.getContext('2d');
    ctxConductor.clearRect(0, 0, canvasConductor.width, canvasConductor.height);
}

document.addEventListener('DOMContentLoaded', function () {
    var canvas = document.getElementById('firmaCanvas');
    var signaturePad = new SignaturePad(canvas, {
        // Opciones adicionales de configuración, si es necesario
    });

    // Restaurar la firma al cargar la página si hay una firma guardada en el almacenamiento local
    var savedSignature = localStorage.getItem('savedSignature');
    if (savedSignature) {
        signaturePad.fromDataURL(savedSignature);
    }

    // Guardar la firma cuando se hace clic en el botón de guardar
    document.getElementById('botonGuardar').addEventListener('click', function () {
        // Obtener la firma como una imagen base64 y guardarla en el almacenamiento local
        var signatureData = signaturePad.toDataURL();
        localStorage.setItem('savedSignature', signatureData);
    });

    // Borrar la firma cuando se hace clic en el botón de borrar
    document.getElementById('borrarFirma').addEventListener('click', function () {
        signaturePad.clear();
        localStorage.removeItem('savedSignature');
    });
});


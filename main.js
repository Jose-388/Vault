document.getElementById('form-registro').addEventListener('submit', function(event) {
    // Evitar que el formulario se envíe por defecto
    event.preventDefault();

    // Limpiar mensajes de error previos
    limpiarErrores();

    let esValido = true;

    // Obtener valores de los campos
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const edad = document.getElementById('edad').value.trim();
    const carrera = document.getElementById('carrera').value.trim();
    const fecha = document.getElementById('fecha').value;
    const genero = document.querySelector('input[name="genero"]:checked');

    // 1. Validar Nombre
    if (nombre === '') {
        mostrarError('err-nombre', 'El nombre completo es obligatorio.');
        esValido = false;
    }

    // 2. Validar Correo (@ y no vacío)
    if (email === '') {
        mostrarError('err-email', 'El correo electrónico es obligatorio.');
        esValido = false;
    } else if (!email.includes('@')) {
        mostrarError('err-email', 'El correo electrónico debe contener un "@".');
        esValido = false;
    }

    // 3. Validar Edad (mayor o igual a 18)
    if (edad === '') {
        mostrarError('err-edad', 'La edad es obligatoria.');
        esValido = false;
    } else if (parseInt(edad) < 18) {
        mostrarError('err-edad', 'Debes ser mayor o igual a 18 años para registrarte.');
        esValido = false;
    }

    // 4. Validar Carrera
    if (carrera === '') {
        mostrarError('err-carrera', 'La carrera es obligatoria.');
        esValido = false;
    }

    // 5. Validar Género
    if (!genero) {
        mostrarError('err-genero', 'Por favor selecciona una opción de género.');
        esValido = false;
    }

    // 6. Validar Fecha
    if (fecha === '') {
        mostrarError('err-fecha', 'Debes seleccionar una fecha de asistencia.');
        esValido = false;
    }

    // Si todas las validaciones son correctas
    if (esValido) {
        document.getElementById('mensaje-exito').style.display = 'block';
        document.getElementById('form-registro').reset();
    }
});

function mostrarError(elementId, mensaje) {
    document.getElementById(elementId).innerText = mensaje;
}

function limpiarErrores() {
    const errores = document.querySelectorAll('.error-msg');
    errores.forEach(err => err.innerText = '');
    document.getElementById('mensaje-exito').style.display = 'none';
}
const persona = { nombre: 'Juan', edad: 25, ciudad: 'Ejemplo' };

Object.entries(persona).forEach(([clave, valor]) => {
    console.log(`${clave}: ${valor}`);
});

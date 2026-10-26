const formulario = document.querySelector("form");

const fotoMascota = document.getElementById("fotoMascota");
const vistaPrevia = document.getElementById("vistaPrevia");

if (fotoMascota && vistaPrevia) {
    fotoMascota.addEventListener("change", function() {

        const archivo = fotoMascota.files[0];

        if (archivo) {
            const lector = new FileReader();

            lector.onload = function() {
                vistaPrevia.src = lector.result;
                vistaPrevia.style.display = "block";
            };

            lector.readAsDataURL(archivo);
        }
    });
}

if (formulario) {

    formulario.addEventListener("submit", function(evento) {

        evento.preventDefault();

        const nombre = formulario.querySelector('input[placeholder="Ejemplo: Luna"]').value;

        const textos = formulario.querySelectorAll('input[type="text"]');

        const tipo = textos[1].value;
        const raza = textos[2].value;

        const contacto = formulario.querySelector('input[type="tel"]').value;

        const estado = document.getElementById("estado").value;
const departamento = document.getElementById("departamento").value;
        const lugar = textos[3].value;

        const descripcion = formulario.querySelector("textarea").value;

        const archivo = fotoMascota.files[0];

        function guardarMascota(foto) {
const mascota = {
    nombre: nombre,
    tipo: tipo,
    raza: raza,
    contacto: contacto,
    estado: estado,
    departamento: departamento,
    lugar: lugar,
    descripcion: descripcion,
    foto: foto
};
            
            let mascotas = JSON.parse(localStorage.getItem("mascotas")) || [];

            mascotas.push(mascota);

            localStorage.setItem("mascotas", JSON.stringify(mascotas));

            alert("🐾 ¡La mascota fue publicada correctamente!");

            formulario.reset();

            vistaPrevia.src = "";
            vistaPrevia.style.display = "none";
        }

        if (archivo) {

            const lector = new FileReader();

            lector.onload = function() {
                guardarMascota(lector.result);
            };

            lector.readAsDataURL(archivo);

        } else {

            guardarMascota("");
        }

    });

}
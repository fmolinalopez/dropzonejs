function crearDropdown() {
    let container = document.getElementById("container"); // Div contenedor
    let div = document.createElement("div"); // Crea un div que sera el dropzone
    div.setAttribute("id", "miDiv"); // Le asigna un id al div
    div.setAttribute("class", "dropzone"); // Le asigna una clase al div
    container.appendChild(div); // Asigna el div dropzone al div contenedor
    let myDropzone = new Dropzone("div#miDiv", { url: "upload.php"}); // Convierte el div en dropzone
}
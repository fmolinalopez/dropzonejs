Dropzone.options.dropzone = {
    init: function() {
        this.on("addedfile", function(file) {
            console.log(file.name);
            alert(`Añadido archivo ${file.name}`);
        });
        this.on("dragenter", function (file) {
            console.log(`El archivo ha entrado en la dropzone`)
        });
        this.on("dragleave", function (file) {
            console.log(`El archivo ha salido de la dropzone`)
        });
    },
    accept: function(file, done) {
        if (file.name === "test.txt") {
            done("No puedes subir archivos llamados test.txt");
        }
        else { done(); }
    },
    clickable: false,
};

function crearDropdown() {
    let container = document.getElementById("container"); // Div contenedor
    let div = document.createElement("div"); // Crea un div que sera el dropzone
    div.setAttribute("id", "miDiv"); // Le asigna un id al div
    div.setAttribute("class", "dropzone"); // Le asigna una clase al div
    container.appendChild(div); // Asigna el div dropzone al div contenedor
    let myDropzone = new Dropzone("div#miDiv", { url: "upload.php"}); // Convierte el div en dropzone
    myDropzone.on("complete", function (file) {
        console.log(file.name);
        myDropzone.removeFile(file);
    })
    myDropzone.on("removedfile", function (file) {
        alert(`Se ha eliminado el archivo ${file.name} de la dropzone`);
    })
}

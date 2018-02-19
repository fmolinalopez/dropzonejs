<?php
$ds          = DIRECTORY_SEPARATOR;  //1 Guarda la constante DIRECTORY_SEPARATOR en una variable corta por comodidad.

$storeFolder = 'uploads';   //2 Carpeta donde se guardaran los archivos.

if (!empty($_FILES)) { // Si recibe un archivo

    $tempFile = $_FILES['file']['tmp_name'];         //3 Guarda el archivo en una variable temporal.

    $targetPath = dirname( __FILE__ ) . $ds. $storeFolder . $ds;  //4 Crea la ruta a la carpeta de destino.

    $targetFile =  $targetPath. $_FILES['file']['name'];  //5 Crea la ruta al destino del archivo.

    move_uploaded_file($tempFile,$targetFile); //6 Mueve el archivo a la carpeta.

}

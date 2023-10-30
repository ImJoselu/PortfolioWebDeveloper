<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $mensaje = $_POST["mensaje"];

    $destinatario = "jltortolacer@gmail.com"; // Cambia esto por tu dirección de correo

    $asunto = "Nuevo mensaje de formulario de $nombre";

    $contenido = "Nombre: $nombre\n";
    $contenido .= "Email: $email\n";
    $contenido .= "Mensaje:\n$mensaje";

    $encabezados = "From: $email";

    mail($destinatario, $asunto, $contenido, $encabezados);

    echo "Mensaje enviado con éxito. ¡Gracias por contactarnos!";
}
?>

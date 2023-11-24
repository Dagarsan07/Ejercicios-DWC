<?php
// nombre y host de la base de datos
$db = "mysql:dbname=catalogo;host=localHost";
// usuario y contraseña
$user = "root";
$pass = "";
try {
    // se conecta con la base de datos
    $pdo = new PDO($db, $user, $pass);
} catch (PDOException $e) {
    echo "Conexión fallida " . $e->getMessage();
}

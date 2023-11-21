<?php
$db = "mysql:dbname=catalogo;host=localHost";
$user = "root";
$pass = "";
try {
    $pdo = new PDO($db, $user, $pass);
} catch (PDOException $e) {
    echo "Conexión fallida " . $e->getMessage();
}

<?php
// "decodeo" los datos que me manda "factura.js"
$datosJS = json_decode(file_get_contents('php://input'), true);
// y lo guardo en una variable
$codigo = $datosJS['codigo'];

require('conexion.php');
try {
    // consulta si existe el producto en la base de datos
    $sql = "SELECT * FROM productos WHERE codigo = :codigo";
    $stmt = $pdo -> prepare($sql);
    $stmt->bindValue(":codigo", $codigo);
    $stmt->execute();
    $producto = $stmt->fetch();
    // Devuelve el resultado "encodeado"
    echo json_encode($producto);
} catch (PDOException $e) {
    echo "Ha ocurrido un error";
    echo $e;
}

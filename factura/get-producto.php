<?php
$datosJS = json_decode(file_get_contents('php://input'), true);
$codigo = $datosJS['codigo'];
$cantidad = $datosJS['cantidad'];

require('conexion.php');
try {
    $sql = "SELECT * FROM productos WHERE codigo = :codigo";
    $stmt = $pdo -> prepare($sql);
    $stmt->bindValue(":codigo", $codigo);
    $stmt->execute();
    $producto = $stmt->fetch();
    echo json_encode($producto);
} catch (PDOException $e) {
    echo "Ha ocurrido un error";
    echo $e;
}

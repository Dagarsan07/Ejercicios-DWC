<?php
$datosJS = json_decode(file_get_contents('php://input'), true);
$codigo = $datosJS['codigo'];
$cantidad = $datosJS['cantidad'];

if ($codigo === '' || $cantidad === '') {
    echo json_encode('Error');
} else {
    echo json_encode("Codigo: $codigo - Cantidad: $cantidad");
}

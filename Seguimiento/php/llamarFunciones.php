<?php 
require_once "model/ficha.model.php";
require_once "db_handler.php";

$fi = new Ficha();
$clave = $fi->generarClave();
echo "$clave";
?>
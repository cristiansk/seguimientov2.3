<?php 
@session_start();
if(!$_SESSION['usuario']){
	echo "<script>alert('No ha iniciado sesion')</script>";
	header("Location: sesion-administrador");
}
?>
<?php 
	require_once "../../php/access/redirect.php" 
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Iniciar Sesion</title>
	<link rel="stylesheet" href="css/admin_login.css">
</head>
<body>
	<section>
		<form id="admin_login">
			<h1>Iniciar Sesion</h1>
			<label for="">Usuario: </label>
			<input type="text" name="usuario" id="usuario" placeholder="Ingrese su usuario..." required><br>
			<label for="">Contraseña: </label>
			<input type="password" name="pwd" id="password" placeholder="Ingrese su contraseña..." required><br>
			<center>
				<input type="submit" value="Acceder...">
			</center>
		</form>
	</section>
	<script type="text/javascript" src="js/jquery-2.1.1.js"></script>
	<script type="text/javascript" src="js/acceso_administrador.js"></script>
</body>
</html>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Administrador</title>
	<link rel="stylesheet" href="css/barra.css">
</head>
<body>
	<div id="show">
		<div id="blue">
			<img src="../favicon.png" alt="">
		</div>
		<ul>
			<h3>Opciones</h3>
			<li id="reportes">Reportes</li>
			<li id="registros">Registros</li>
			<li>Consultas</li>
			<li>Emails</li>
			<li>Datos</li>
		</ul>
	</div>
	<section>
		<div id="infoEgresados">
			<table id="infoBase">
			<thead>
					<tr>
						<th>Apellido Paterno</th>
						<th>Apellido Materno</th>
						<th>Nombre</th>
						<th>Email</th>
						<th>N° Control</th>
						<th>Especialidad</th>
						<th>Año Egreso</th>
						<th>Campus</th>
						<th>Situacion Laboral</th>
					</tr>
				</thead>
				<tbody></tbody>
			</table>
		</div>
	</section>
	<script type="text/javascript" src="js/jquery-2.1.1.js"></script>
	<script type="text/javascript" src="js/js_getJSON.js"></script>
</body>
</html>
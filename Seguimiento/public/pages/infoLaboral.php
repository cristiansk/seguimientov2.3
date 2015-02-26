<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<link rel="icon" type="image/png" href="../favicon.png" />
	<title>Informacion Laboral</title>
	<link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/main.css">
</head>
<body>
	<header></header>
	<nav></nav>
	<section>
		<form id="regEgresados">
			<h1>Ficha de seguimiento de egresados del ITSAV</h1>
			<div id="infoLaboral">	
				<span>Informacion Laboral</span>	
					<label class="top" for="">Indica cual es  tu situacion actual.</label>
					<input class="lineal" type="checkbox" id="lab_work"><label class="lineal" for="">Trabajo</label>
					<input class="lineal" type="checkbox" id="lab_not"><label class="lineal" for="">Trabajo y estudio</label>
					<input class="lineal" type="checkbox" id="lab_est"><label class="lineal" for="">Estudio</label>
					<input class="lineal" type="checkbox" id="lab_des"><label class="lineal" for="">Desempleado</label>

				<div id="16">
					<label class="top" for="">¿Cuanto tiempo tienes sin empleo?</label>
					<input class="lineal" type="checkbox" id="1m"><label class="lineal" for="">Menos de un mes</label>
					<input class="lineal" type="checkbox" id="3m"><label class="lineal" for="">De uno a 3 meses</label>
					<input class="lineal" type="checkbox" id="6m"><label class="lineal" for="">Hasta 6 meses</label>
					<input class="lineal" type="checkbox" id="12m"><label class="lineal" for="">Hasta 1 año</label>
					<br><input class="lineal" type="checkbox" id="not_yet"><label class="lineal" for="">No he comenzado a trabajar</label>
				</div>

				<div id="17">
					<label class="top" for="">¿Cual es el principal motivo por el que no trabaja?</label>
					<input class="lineal" type="checkbox" id="renuncia"><label class="lineal" for="">Renuncia voluntaria</label>
					<input class="lineal" type="checkbox" id="hogar"><label class="lineal" for="">Me dedido al hogar</label>
					<input class="lineal" type="checkbox" id="clausura"><label class="lineal" for="">Cerró la empresa</label>
					<input class="lineal" type="checkbox" id="despido"><label class="lineal" for="">Despido</label>
					<br><input class="lineal" type="checkbox" id="no_planeado"><label class="lineal" for="">No esta en mis planes</label>
					<input class="lineal" type="checkbox" id="otros_motivos"><label class="lineal" for="">Otros</label>
					<input type="text" id="agregarOtrasOpciones"  placeholder="Agregar otras opciones">
				</div>

				<div id="18">
					<label class="top" for="">¿Por qué medio te colocaste en tu empleo actual?</label>
					<input class="lineal" type="checkbox" id="residencia"><label class="lineal" for="">Residencia Profesional</label>
					<input class="lineal" type="checkbox" id="bolsa_itsav"><label class="lineal" for="">Bolsa de trabajo ITSAV</label>
					<input class="lineal" type="checkbox" id="bolsa_municipal"><label class="lineal" for="">Bolsa de trabajo municipal</label>
					<br><input class="lineal" type="checkbox" id="otros"><label class="lineal" for="">Otros</label>
					<input type="text" id="agregarOtros" placeholder="Agregar otras opciones">
				</div>

				<div id="19">
					<label class="top" for="">Datos de la empresa</label>
					<input class="lineal separador" type="text" id="nombreEmpresa" placeholder="Nombre de la empresa">
					<input class="lineal separador" type="text" id="calle_numero" placeholder="Calle y Numero">
					<input class="lineal separador" type="text" id="colonia_empresa" placeholder="Colonia">
					<input class="lineal separador" type="text" id="municipio_empresa" placeholder="Municipio">
					<input class="lineal separador" type="text" id="estado_empresa" placeholder="Estado">
					<input class="lineal separador" type="text" id="tel_empresa" placeholder="Telefono">

					<label class="top" for="">Tu trabajo esta relacionado a tu perfil</label>
					<input class="lineal" type="checkbox" id="perfil_si"><label class="lineal" for="">Si</label>
					<input class="lineal" type="checkbox" id="perfil_no"><label class="lineal" for="">No</label>
					<input class="lineal" type="checkbox" id="perfil_parcial"><label class="lineal" for="">Parcial</label>
				</div>

				<div id="23">
					<label class="top" for="">Regimen juridico de la empresa</label>
					<input class="lineal" type="checkbox" id="reg_paraestatal">
					<label class="lineal" for="">Paraestatal (Empresano registrada por el gobierno, CFE, PEMEX, etc..)</label>
					<br><input class="lineal" type="checkbox" id="reg_pub"><label class="lineal" for="">Publica</label>
					<input class="lineal" type="checkbox" id="reg_priv"><label class="lineal" for="">Privada</label>
					<input class="lineal" type="checkbox" id="reg_negPropio"><label class="lineal" for="">Negocio propio</label>
				</div>

				<div id="24-25">
					<label class="top" for="">Nombre del puesto que desempeñas.</label>
					<input type="text" id="nombre_puesto" placeholder="Nombre del puesto">
				</div>

				<label class="top" for="">Nombre de la institucion donde estudias actualmente.</label>
				<input type="text" id="nombre_institucion" placeholder="Nombre de la institucion">

				<label class="top" for="">En que ciudad esta ubicada la institucion.</label>
				<input type="text" id="ciudad_institucion" placeholder="Nombre de la ciudad">

				<label class="top" for="">Tipo de estudios que cursas.</label>
				<input class="lineal" type="checkbox" id="act_cap"><label class="lineal" for="">Cursos de actualizacion y/o capacitacion</label>
				<input class="lineal" type="checkbox" id="ing_lic"><label class="lineal" for="">Ingenieria y/o Licenciatura</label>
				<br><input class="lineal" type="checkbox" id="otro_tipo"><label class="lineal" for="">Otros: </label>
				<input class="lineal" type="text" id="otro_tipo_estudios" placeholder="Ingresa el tipo de estudios">

				<label class="top" for="">Nombre del estudio que cursas.</label>
				<input type="text" id="nombre_estudios" placeholder="Nombre de sus estudios">

				<label class="top" for="">¿Te gustatia tomar cursos de capacitacion o actualizacion?</label>
				<input class="lineal" type="checkbox" id="capacitacion_si"><label class="lineal" for="">Si (Pasar a la siguiente pregunta)</label>
				<input class="lineal" type="checkbox" id="capacitacion_no"><label class="lineal" for="">No</label>

				<div id="cursos" style="display: none;">
					<label class="top" for="">Escribe por lo menos 3 cursos o actualizaciones de tu interes.</label>
					<input type="text" id="curso1" placeholder="Curso 1">
					<input type="text" id="curso2" placeholder="Curso 2">
					<input type="text" id="curso3" placeholder="Curso 3">
				</div>

				<br><br><br><input type="button" id="page5" value="Enviar Cuestionario" style="float:right; margin-bottom:10px;">
			</div>
		</form>
	</section>
	<footer></footer>
	<script type="text/javascript" src="js/jquery-2.1.1.js"></script>
	<script type="text/javascript" src="js/load_sections.js"></script>
	<script type="text/javascript" src="js/laboral.js"></script>
</body>
</html>
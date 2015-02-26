$(document).on("ready", function(){

//Seccion 1 -->> Informacion Personal
var apPaterno;var apMaterno;var nombre;var clave = "";
var calleNum;var colonia;var ciudad;var estado;var codPostal;
var telCasa;var telCel;var telRecados;var email;var facebook;
var sexo="";

$("#sexoH").change(function() {
	if ($(this).is(':checked')) {
		$("#sexoM").prop('checked', false);
		sexo = "Hombre";
	}else{
		sexo = "";
	}
});
$("#sexoM").change(function() {
	if ($(this).is(':checked')) {
		$("#sexoH").prop('checked', false);
		sexo = "Mujer";
	}else {
		sexo = "";
	}
});

$("#page2").click(function(event) {
	apPaterno = $("#apPaterno").val();
	apMaterno = $("#apMaterno").val();
	nombre = $("#nombre").val();
	calleNum = $("#calleNum").val();
	colonia = $("#colonia").val();
	ciudad = $("#ciudad").val();
	estado = $("#estado").val();
	codPostal = $("#codPostal").val();
	telCasa = $("#casa").val();
	telCel = $("#movil").val();
	telRecados = $("#recado").val();
	email = $("#email").val();
	facebook = $("#facebook").val();
	clave = $("#clave").val();
	var emailREG = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/;
	var postalREG = /^([1-9]{2}|[0-9][1-9]|[1-9][0-9])[0-9]{3}$/;
	var telREG = /^[0-9-()+]{3,20}/;


	if(clave != "" && apPaterno != "" && apMaterno != "" && nombre != "" && 
		calleNum != "" && colonia != "" && ciudad != "" && estado != "" &&  sexo != ""){
		if($("#email").val().match(emailREG)){
			if($("#codPostal").val().match(postalREG)){
				if($("#movil").val().match(telREG)){
					$("#infoPersonal").hide();$("#datosEscolares").show();
				}else {
					alert("Ingrese un numero de telefoo valido");
				}
			}else {
				alert("Codigo postal invalido");
			}
		}else {
			alert("Ingrese un email valido");
		}
		
	}else {
		alert("Debe de llenar todos los campos");
	}
});


//Seccion 2 -->> Informacion escolar
var prog_Educativo = "";
var titulado = "";
var anio_egreso = "";
var numControl = "";
var campus = ""; 
var modalidad = "Escolarizado";
var especialidad="";

$("#titulado_si").change(function(){
	if($(this).is(":checked")){
		titulado = "Si";
		$("#titulado_no").prop('checked', false);
	}else {
		titulado = "";
	}
});
$("#titulado_no").change(function(){
	if($(this).is(":checked")){
		titulado = "No";
		$("#titulado_si").prop('checked', false);
	}else {
		titulado = "";
	}
});

$("#programaEducativo").change(function(event) {prog_Educativo = $("#programaEducativo").val();});
$("#especialidad").change(function(event) {prog_Educativo = $("#especialidad").val();});
$("#modalidad").change(function(event) {modalidad = $("#modalidad").val();});
function llenarSelect(){
	var items = "<option value='Sistemas Computacionales'>Sistemas Computacionales</option>";
	items += "<option value='Mecanica'>Mecanica</option>";
	items += "<option value='Electronica'>Electronica</option>";
	items += "<option value='Industrial'>Industrial</option>";
	items += "<option value='Gestion Empresarial'>Gestion Empresarial</option>";
	items += "<option value='Contaduria Publica'>Contaduria Publica</option>";
	$("#especialidad").append(items);
}
llenarSelect();
$("#modalidad").change(function(){
	$("#especialidad option").remove();
	if($(this).val() === "Semiescolarizado"){
		modalidad = "Semiscolarizado";
		var items = "<option value='Sistemas Computacionales'>Sistemas Computacionales</option>";
		items += "<option value='Industrial'>Industrial</option>";
		items += "<option value='Gestion Empresarial'>Gestion Empresarial</option>";
		items += "<option value='Contaduria Publica'>Contaduria Publica</option>";
		$("#especialidad").append(items);
	}else{
		modalidad = "Escolarizado";
		llenarSelect();
	}
	alert(modalidad);
});

$("#alvarado").change(function() {
	if ($(this).is(':checked')) {
		$("#lerdo").prop('checked', false);
		$("#tlalixcoyan").prop('checked', false);
		$("#medellin").prop('checked', false);
		campus = "Campus Alvarado";
	}else {
		campus = "";
	}
});
$("#lerdo").change(function() {
	if ($(this).is(':checked')) {
		$("#alvarado").prop('checked', false);
		$("#tlalixcoyan").prop('checked', false);
		$("#medellin").prop('checked', false);
		campus = "Campus Lerdo";
	}else {
		campus = "";
	}
});
$("#medellin").change(function() {
	if ($(this).is(':checked')) {
		$("#lerdo").prop('checked', false);
		$("#tlalixcoyan").prop('checked', false);
		$("#alvarado").prop('checked', false);
		campus = "Campus Medellin";
	}else {
		campus = "";
	}
});
$("#tlalixcoyan").change(function() {
	if ($(this).is(':checked')) {
		$("#lerdo").prop('checked', false);
		$("#alvarado").prop('checked', false);
		$("#medellin").prop('checked', false);
		campus = "Campus Tlalixcoyan";
	}else {
		campus = "";
	}
});
$("#page3").on("click", function(){
	prog_Educativo = $("#programaEducativo").val();
	anio_egreso = $("#fechaEgreso").val();
	especialidad = $("#especialidad").val();
	numControl = $("#numControl").val();
	modalidad = $("#modalidad").val();
	var anio = /^([1-9]{2}|[0-9][1-9]|[1-9][0-9])[0-9]{2}$/;

	if(modalidad != "" && prog_Educativo != "" && titulado != "" && numControl != "" && campus != "" && especialidad != ""){
		if($("#fechaEgreso").val().match(anio)){
			$("#datosEscolares").hide();
			$("#seccion3").show();
		}else {
			alert("Ingrese un año valido.");
		}
	}else {
		alert("Para continuar, llene todos los campos requeridos");
	}
});

//Seccion 3
//$("#page3").on("click", function(){prog_Educativo = $("#programaEducativo").val();titulado = $("#titulado").val();mes_year_egreso = $("#fechaEgreso").val();numControl = $("#numControl").val();if(prog_Educativo != "" && titulado != "" && mes_year_egreso != "" && numControl != ""){$("#datosEscolares").hide();$("#seccion3").show();}else {alert("Para continuar, llene todos los campos requeridos");}});
var calidad="";var estudio="";var experiencia="";
$("#mb1").change(function(event) {
	if($(this).is(':checked')){
		calidad="Muy Buena";
		$("#b1").prop('checked', false);
		$("#r1").prop('checked', false);
		$("#m1").prop('checked', false);
	}else {
		calidad = "";
	}
});
$("#b1").change(function(event) {
	if($(this).is(':checked')){
		calidad="Buena";
		$("#mb1").prop('checked', false);
		$("#r1").prop('checked', false);
		$("#m1").prop('checked', false);
	}else{
		calidad = "";
	}
});
$("#r1").change(function(event) {
	if($(this).is(':checked')){
		calidad="Regular";
		$("#b1").prop('checked', false);
		$("#mb1").prop('checked', false);
		$("#m1").prop('checked', false);
	}else {
		calidad = "";
	}
});
$("#m1").change(function(event) {
	if($(this).is(':checked')){
		calidad="Mala";
		$("#b1").prop('checked', false);
		$("#r1").prop('checked', false);
		$("#mb1").prop('checked', false);
	}else {
		calidad = "";
	}
});

$("#mb2").change(function(event) {
	if($(this).is(':checked')){
		estudio="Muy Bueno";
		$("#b2").prop('checked', false);
		$("#r2").prop('checked', false);
		$("#m2").prop('checked', false);
	}else {
		estudio = "";
	}
});
$("#b2").change(function(event) {
	if($(this).is(':checked')){
		estudio="Bueno";
		$("#mb2").prop('checked', false);
		$("#r2").prop('checked', false);
		$("#m2").prop('checked', false);
	}else {
		estudio = "";
	}
});
$("#r2").change(function(event) {
	if($(this).is(':checked')){
		estudio="Regular";
		$("#b2").prop('checked', false);
		$("#mb2").prop('checked', false);
		$("#m2").prop('checked', false);
	}else {
		estudio = "";
	}
});
$("#m2").change(function(event) {
	if($(this).is(':checked')){
		estudio="Malo";
		$("#b2").prop('checked', false);
		$("#r2").prop('checked', false);
		$("#mb2").prop('checked', false);
	}else {
		estudio = "";
	}
});

$("#mb3").change(function(event) {
	if($(this).is(':checked')){
		experiencia="Muy Buena";
		$("#b3").prop('checked', false);
		$("#r3").prop('checked', false);
		$("#m3").prop('checked', false);
	}else {
		experiencia = "";
	}
});
$("#b3").change(function(event) {
	if($(this).is(':checked')){
		experiencia="Buena";
		$("#mb3").prop('checked', false);
		$("#r3").prop('checked', false);
		$("#m3").prop('checked', false);
	}else {
		experiencia = "";
	}
});
$("#r3").change(function(event) {
	if($(this).is(':checked')){
		experiencia="Regular";
		$("#b3").prop('checked', false);
		$("#mb3").prop('checked', false);
		$("#m3").prop('checked', false);
	}else {
		experiencia = "";
	}
});
$("#m3").change(function(event) {
	if($(this).is(':checked')){
		experiencia="Mala";
		$("#b3").prop('checked', false);
		$("#r3").prop('checked', false);
		$("#mb3").prop('checked', false);
	}else {
		experiencia = "";
	}
});
$("#page4").on("click", function(){
	if(calidad != "" && estudio != "" && experiencia != ""){
		//alert(clave);alert(apPaterno);alert(apMaterno);alert(nombre);alert(calleNum);alert(colonia);alert(ciudad);
		//alert(estado);alert(codPostal);alert(telCasa);alert(telCel);alert(telRecados);alert(email);alert(facebook);

		//alert(sexo);alert(prog_Educativo);alert(titulado);alert(anio_egreso);alert(numControl);
		//alert(campus);alert(modalidad);alert(especialidad);alert(calidad);alert(estudio);alert(experiencia);
		$("#seccion3").hide();
		$("#infoLaboral").show();
	}else {
		alert("Llene todos los campos");
	}
});

//Ultima seccion --->> Cuestionario Laboral
var lab_actual= "";
//Variables si trabaja
var medio="";
var nombreEmpresa="";var calleNumEmpresa="";var coloniaEmpresa="";var municipioEmpresa="";var estadoEmpresa="";var telefonoEmpresa="";var perfil="";
var nivel_puesto="";var regimen="";

//Variables si estudia
var nombreInstitucion="";var ciudadInstitucion="";var tipo_estudios="";var nombreEstudios="";

//Variables si esta desempleado
var sin_empleo="";
var motivos="";

var capacitacion="";

$("#lab_work").change(function(event){
	mostrar();
	if($(this).is(':checked')){
		lab_actual = "Trabajando";
		$("#estudios").hide();
		//$("#lab_not").prop('checked', false);
		$("#lab_est").prop('checked', false);
		$("#lab_des").prop('checked', false);
		$("#16").hide();
		$("#17").hide();
	}else {
		$("#16").show();
		$("#17").show();
		lab_actual = "";
	}
	alert(lab_actual);
});
//$("#lab_not").change(function(event){mostrar();if($(this).is(':checked')){lab_actual = "Trabaja y estudia";$("#lab_work").prop('checked', false);$("#lab_est").prop('checked', false);$("#lab_des").prop('checked', false);$("#16").hide();$("#17").hide();}else {$("#16").show();$("#17").show();}});
function mostrar(){
	$("#seccion_trabajo").show();
	$("#estudios").show();
	$("#16").show();
	$("#17").show();
	$("#18").show();
	$("#19").show();
	$("#20").show();
	$("#21").show();
	$("#22").show();
	$("#23").show();
	$("#24-25").show();
}

$("#lab_est").change(function(event){
	mostrar();
	if($(this).is(':checked')){
		lab_actual = "Estudia";
		$("#lab_work").prop('checked', false);
		/*$("#lab_not").prop('checked', false);*/
		$("#lab_des").prop('checked', false);
		$("#16").hide();
		$("#17").hide();
		$("#18").hide();
		$("#19").hide();
		$("#20").hide();
		$("#21").hide();
		$("#22").hide();
		$("#23").hide();
		$("#24-25").hide();
	}else {
		mostrar();
		lab_actual = "";
	}
});

$("#lab_des").change(function(event){
	mostrar();
	if($(this).is(':checked')){
		lab_actual = "Desempleado";
		$("#lab_work").prop('checked', false);
		//$("#lab_not").prop('checked', false);
		$("#lab_est").prop('checked', false);
		$("#seccion_trabajo").hide();
	}else {
		$("#seccion_trabajo").show();
		lab_actual = "";
	}
	alert(lab_actual);
});

$("#1m").change(function(event){
	if($(this).is(':checked')){
		sin_empleo = "1 Mes";
		$("#3m").prop('checked', false);
		$("#6m").prop('checked', false);
		$("#12m").prop('checked', false);
		$("#not_yet").prop('checked', false);
	}else {
		sin_empleo = "";
	}
});

$("#3m").change(function(event){
	if($(this).is(':checked')){
		sin_empleo = "1 Mes";
		$("#1m").prop('checked', false);
		$("#6m").prop('checked', false);
		$("#12m").prop('checked', false);
		$("#not_yet").prop('checked', false);
	}else {
		sin_empleo = "";
	}
});
$("#6m").change(function(event){
	if($(this).is(':checked')){
		sin_empleo = "1 Mes";
		$("#3m").prop('checked', false);
		$("#1m").prop('checked', false);
		$("#12m").prop('checked', false);
		$("#not_yet").prop('checked', false);
	}else {
		sin_empleo = "";
	}
});
$("#12m").change(function(event){
	if($(this).is(':checked')){
		sin_empleo = "1 Mes";
		$("#3m").prop('checked', false);
		$("#1m").prop('checked', false);
		$("#6m").prop('checked', false);
		$("#not_yet").prop('checked', false);
	}else {
		sin_empleo = "";
	}
});

$("#not_yet").change(function(event){
	if($(this).is(':checked')){
		sin_empleo = "1 Mes";
		$("#3m").prop('checked', false);
		$("#1m").prop('checked', false);
		$("#12m").prop('checked', false);
		$("#1m").prop('checked', false);
	}else {
		sin_empleo = "";
	}
});

$("#renuncia").change(function(event){
	if($(this).is(':checked')){
		motivos = "Renuncia";
		$("#hogar").prop('checked', false);
		$("#clausura").prop('checked', false);
		$("#despido").prop('checked', false);
		$("#no_planeado").prop('checked', false);
		$("#otros_motivos").prop('checked', false);
	}else {
		motivos = "";
	}
});
$("#hogar").change(function(event){
	if($(this).is(':checked')){
		motivos = "Se dedica al hogar";
		$("#renuncia").prop('checked', false);
		$("#clausura").prop('checked', false);
		$("#despido").prop('checked', false);
		$("#no_planeado").prop('checked', false);
		$("#otros_motivos").prop('checked', false);
	}else {
		motivos = "";
	}
});
$("#clausura").change(function(event){
	if($(this).is(':checked')){
		motivos = "Cerro la empresa";
		$("#hogar").prop('checked', false);
		$("#renuncia").prop('checked', false);
		$("#despido").prop('checked', false);
		$("#no_planeado").prop('checked', false);
		$("#otros_motivos").prop('checked', false);
	}else {
		motivos = "";
	}
});
$("#despido").change(function(event){
	if($(this).is(':checked')){
		motivos = "Despido";
		$("#hogar").prop('checked', false);
		$("#clausura").prop('checked', false);
		$("#renuncia").prop('checked', false);
		$("#no_planeado").prop('checked', false);
		$("#otros_motivos").prop('checked', false);
	}else {
		motivos = "";
	}
});
$("#no_planeado").change(function(event){
	if($(this).is(':checked')){
		motivos = "No esta en mis planes";
		$("#hogar").prop('checked', false);
		$("#clausura").prop('checked', false);
		$("#despido").prop('checked', false);
		$("#renuncia").prop('checked', false);
		$("#otros_motivos").prop('checked', false);
	}else {
		motivos = "";
	}
});
$("#otros_motivos").change(function(event){
	if($(this).is(':checked')){
		motivos = $("#agregarOtrasOpciones").val();
		$("#hogar").prop('checked', false);
		$("#clausura").prop('checked', false);
		$("#despido").prop('checked', false);
		$("#no_planeado").prop('checked', false);
		$("#renuncia").prop('checked', false);
	}else {
		motivos = "";
	}
});

$("#residencia").change(function(event){
	if($(this).is(':checked')){
		medio = "Residencia Profesional";
		$("#bolsa_itsav").prop('checked', false);
		$("#bolsa_municipal").prop('checked', false);
		$("#otros").prop('checked', false);	
	}else {
		medio = "";
	}
});
$("#bolsa_itsav").change(function(event){
	if($(this).is(':checked')){
		medio = "Bolsa de trabajo ITSAV";
		$("#residencia").prop('checked', false);
		$("#bolsa_municipal").prop('checked', false);
		$("#otros").prop('checked', false);	
	}else {
		medio = "";
	}
});
$("#bolsa_municipal").change(function(event){
	if($(this).is(':checked')){
		medio = "Bolsa de Trabajo Municipal";
		$("#bolsa_itsav").prop('checked', false);
		$("#residencia").prop('checked', false);
		$("#otros").prop('checked', false);	
	}else {
		medio = "";
	}
});

$("#otros").change(function(event){
	if($(this).is(':checked')){
		medio = $("#agregarOtros").val();
		$("#bolsa_itsav").prop('checked', false);
		$("#residencia").prop('checked', false);
		$("#bolsa_municipal").prop('checked', false);	
	}else {
		medio = "";
	}
});

$("#perfil_si").change(function(event) {
	if($(this).is(':checked')){
		perfil = "Perfil Relacionado a la carrera";
		$("#perfil_no").prop('checked', false);
		$("#perfil_parcial").prop('checked', false);
	}else {
		perfil = "";
	}
});
$("#perfil_no").change(function(event) {
	if($(this).is(':checked')){
		perfil = "Perfil no Relacionado a la carrera";
		$("#perfil_si").prop('checked', false);
		$("#perfil_parcial").prop('checked', false);
	}else {
		perfil = "";
	}
});
$("#perfil_parcial").change(function(event) {
	if($(this).is(':checked')){
		perfil = "Parcialmente Relacionado a la carrera";
		$("#perfil_si").prop('checked', false);
		$("#perfil_no").prop('checked', false);
	}else {
		perfil = "";
	}
});


$("#reg_paraestatal").change(function(event) {
	if($(this).is(':checked')){
		regimen = "Paraestatal";
		$("#reg_pub").prop('checked', false);
		$("#reg_priv").prop('checked', false);
		$("#reg_negPropio").prop('checked', false);
	}else {
		regimen = "";
	}
});
$("#reg_pub").change(function(event) {
	if($(this).is(':checked')){
		regimen = "Publico";
		$("#reg_paraestatal").prop('checked', false);
		$("#reg_priv").prop('checked', false);
		$("#reg_negPropio").prop('checked', false);
	}else {
		regimen = "";
	}
});
$("#reg_priv").change(function(event) {
	if($(this).is(':checked')){
		regimen = "Privado";
		$("#reg_paraestatal").prop('checked', false);
		$("#reg_pub").prop('checked', false);
		$("#reg_negPropio").prop('checked', false);
	}else {
		regimen = "";
	}
});

$("#reg_negPropio").change(function(event) {
	if($(this).is(':checked')){
		regimen = "Negocio Propio";
		$("#reg_paraestatal").prop('checked', false);
		$("#reg_pub").prop('checked', false);
		$("#reg_priv").prop('checked', false);
	}else {
		regimen = "";
	}
});

$("#act_cap").change(function(event) {
	if($(this).is(':checked')){
		tipo_estudios = "Cursos de actualizacion y capacitacion";
		$("#ing_lic").prop('checked', false);
		$("#otro_tipo").prop('checked', false);
	}else {
		tipo_estudios = "";
	}
});
$("#ing_lic").change(function(event) {
	if($(this).is(':checked')){
		tipo_estudios = "Ingenieria y/o Licenciatura";
		$("#act_cap").prop('checked', false);
		$("#otro_tipo").prop('checked', false);
	}else {
		tipo_estudios = "";
	}
});
$("#otro_tipo").change(function(event) {
	if($(this).is(':checked')){
		tipo_estudios = $("#otro_tipo_estudios").val();
		$("#act_cap").prop('checked', false);
		$("#ing_lic").prop('checked', false);
	}else {
		tipo_estudios = "";
	}
});

var capacitacion = "";
var cursos = "";
$("#capacitacion_si").change(function(event) {
	if($(this).is(':checked')){
		$("#cursos").show();
		$("#capacitacion_no").prop('checked', false);
		capacitacion = "Si";
	}else {
		$("#cursos").hide();
		capacitaion = "";
	}
});

$("#capacitacion_no").change(function(event) {
	if($(this).is(':checked')){
		$("#cursos").hide();
		capacitacion = "No";
		$("#capacitacion_si").prop('checked', false);
	}else {
		capacitaion = "";
	}
});
$("#page5").on("click", function(){
//Ultima seccion --->> Cuestionario Laboral
		nombreInstitucion = $("#nombre_institucion").val();
		ciudadInstitucion = $("#ciudad_institucion").val();
		nombreEstudios = $("#nombre_estudios").val();

		nombreEmpresa = $("#nombreEmpresa").val();
		calleNumEmpresa = $("#calle_numero").val();
		coloniaEmpresa = $("#colonia_empresa").val();
		municipioEmpresa = $("#municipio_empresa").val();
		estadoEmpresa = $("#estado_empresa").val();
		telefonoEmpresa = $("#tel_empresa").val();

		if($("#otros_motivos").is(':checked')){
			motivos = $("#agregarOtrasOpciones").val();
		}
		if($("#otro_tipo").is(':checked')){
			tipo_estudios = $("#otro_tipo_estudios").val();
		}

		if($("#otros").is(':checked')){
			medio = $("#agregarOtros").val();
		}

		if(capacitacion === "Si") {
			cursos += $("#curso1").val() + ", ";
			cursos += $("#curso2").val() + ", ";
			cursos += $("#curso3").val();
		}else {
			cursos = "";
		}

		if((lab_actual == "Desempleado" && sin_empleo != "" && motivos != "") ||
		   (lab_actual == "Estudia" && nombreInstitucion != "" && ciudadInstitucion != "" && tipo_estudios != "" && nombre_estudios != "") ||
		   (lab_actual == "Trabajando" && medio != "" && regimen != "" && nivel_puesto != "" && perfil != "" && nombreEmpresa != "" && calleNumEmpresa != "" &&
		   	coloniaEmpresa != "" && municipioEmpresa != "" && estadoEmpresa != "" && telefonoEmpresa != "")){

			//Enviar datos al servidor de manera asincrona
			$.ajax({
				url: '../php/model/ficha.model.php',
				type: 'POST',
				dataType: '',
				data: {
					//Datos Personales
					"clave": clave, 
					"apPaterno": apPaterno, "apMaterno": apMaterno, "nombre": nombre, "sexo": sexo, 
					"calleNum": calleNum, "colonia": colonia, "ciudad": ciudad, "estado": estado, "codPost": codPostal,
					"telCasa": telCasa, "telCel": telCel, "telRec": telRecados, "email": email, "facebook": facebook, 
					//Datos Escolares
					"ncontrol": numControl, "progEducativo": prog_Educativo, "especialidad": especialidad, "anioEgreso": anio_egreso,
					"titulado": titulado, "campus": campus, "modalidad": modalidad,
					//DatosPertinencia
					"calidad": calidad, "estudio": estudio, "experiencia": experiencia,
					"lab_actual": lab_actual,
					//Cestionario laboral
					//Trabajando
					"medio": medio, "regimen":regimen, 	"puesto": nivel_puesto, "perfil": perfil, 
					"nombreEmpresa": nombreEmpresa, "calleNumEmpresa": calleNumEmpresa, "coloniaEmpresa":coloniaEmpresa, "municipioEmpresa": municipioEmpresa,
					"estadoEmpresa": estadoEmpresa, "telefonoEmpresa": telefonoEmpresa,
					//Estudiando
					"nombreInstitucion": nombreInstitucion, "ciudadInstitucion": ciudadInstitucion, "tipoEstudios": tipo_estudios,
					"nombreEstudios": nombreEstudios,
					//Desempleado
					"tiempo": sin_empleo,"motivos": motivos, 
					//Informacion final
					"capacitacion": capacitacion, "cursos": cursos,

				},
				success: function(resp){
					if(resp == 1) {
						alert("Datos registrados con exito");
						window.location = "index.html";
					}else {
						alert(resp);
					}
				}, 
				error: function(resp){
					alert(resp);
				}
			})
			.always(function() {
				console.log("Completado");
			});
		}else {
			alert("Llene los campos requeridos x)");
		}
		
});
});
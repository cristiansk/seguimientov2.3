$(document).on("ready", function(){
	filtro_personal();
	$("#registros").on("click", function(){

		switch($("#filtro").val()){
			case "cat_0":
				filtro_personal();
				break;
			default:
				alert("No implementado");
				break;
		}
	});
	$("#salir").on("click", function(){
		$.get('http://localhost/Seguimiento/php/access/cerrarSesion.php', function(data) {
			if(data == 1){
				window.location = "sesion-administrador";
			}
		});
	});
	$("#filtro").change(function(event) {
		if($(this).val() === "cat_0"){
			filtro_personal();
		}
	});
	function filtro_personal(){
		$('table').find("tr:gt(0)").remove();
		$.getJSON('http://localhost/Seguimiento/php/model/listarInformacion.php', function(data) {
			$.each(data, function(key, registro){
				var fila = $("<tr />");
				$("<td />").text(registro.apPaterno).appendTo(fila);
				$("<td />").text(registro.apMaterno).appendTo(fila);
				$("<td />").text(registro.nombre).appendTo(fila);
				//$("<td />").text(registro.email).appendTo(fila);
				$("<td />").text(registro.ncontrol).appendTo(fila);
				$("<td />").text(registro.especialidad).appendTo(fila);
				$("<td />").text(registro.anioEgreso).appendTo(fila);
				$("<td />").text(registro.campus).appendTo(fila);
				//$("<td />").text(registro.modalidad).appendTo(fila);
				$("<td />").html("<button id='"+registro.ncontrol+"'>Ver detalles</button>'" + registro.sit_lab).appendTo(fila);
				fila.appendTo("section #infoEgresados #infoBase tbody");
				$("#infoBase").show();
			});
			var agregar = "<script>$('button').on('click', function(){alert($(this).attr('id'));});</script>";
			$("body").append(agregar);
		});
	}
});
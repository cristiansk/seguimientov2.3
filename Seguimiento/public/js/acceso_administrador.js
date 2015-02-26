$(document).on("ready", function(){
	$("#admin_login").on("submit", function(evt){
		evt.preventDefault();
		$.ajax({
			url: 'http://localhost/Seguimiento/php/model/Log_in.php',
			type: 'POST',
			dataType: '',
			data: $(this).serialize(),
			success: function(respuesta){
				if(respuesta){
					var dataArray = jQuery.parseJSON(respuesta);
					if(dataArray.success === 1){
						window.location = "seg-egresados-admin-view";
					}else {
						alert("Usuario y/o contraseña incorrecta");
						$("#usuario").val("");
						$("#usuario").focus();
						$("#password").val("");
					}
				}
			}
		});
	});
});
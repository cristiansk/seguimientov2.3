<?php 
require_once "../database/db_handler.php"; 
class Acceso extends Database {
	private $usuario = "";
	private $password = "";
	
	public function __construct($usuario, $password){
		$this->usuario = $usuario;
		$this->password = $password;
	}

	public function login(){
		try {
			$query = "SELECT nombreUsuario, nombreAdministrador FROM administrador 	
							WHERE nombreUsuario = '$this->usuario' and claveUsuario = '$this->password'";
			$respuesta = $this->ejecutarConsulta($query);
			$respuesta->execute();
			
			if($respuesta->rowCount() == 1){
				$registro = $respuesta->fetch();
				@session_start();
				$_SESSION['usuario'] = $registro['nombreAdministrador'];
				$resultados = array(
					"success" => 1,
					"usuarioConectado" => $registro['nombreAdministrador']
				);
				return $resultados;
			}else {
				$resultados = array(
					"success" => 0,
					"usuarioConectado" => "Sin acceso"
				);
				return $resultados;
			}
		} catch (Exception $e) {
			return "Error: " .$e->getMessage();
		}
	}
}
$usuario = "";
$password = "";
if(isset($_POST)){
	$usuario = $_POST['usuario'];
	$password = $_POST['pwd'];

	$obj = new Acceso($usuario, md5($password));
	echo json_encode($obj->login());
}
?>
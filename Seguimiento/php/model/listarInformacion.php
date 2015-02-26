<?php
require_once "../database/db_handler.php"; 
class JSON_Items extends Database{
	public function infoBase(){
		try {
			@session_start();
			if(isset($_SESSION['usuario'])){
				$query = "SELECT p.apPaterno, p.apMaterno, p.nombre, p.email, e.ncontrol, e.especialidad, e.anioEgreso, e.campus, e.modalidad, l.situacion_actual 
				from infopersonal p inner join infoescolar e on e.clave = p.clave inner join infolaboral l on l.clave_usuario = p.clave";
				$respuesta = $this->ejecutarConsulta($query);
				$respuesta->execute();

				$array_info = array();
				foreach ($respuesta as $row) {
					$array_info[] = array(
						'apPaterno' => $row[0],
						'apMaterno' => $row[1],
						'nombre' => $row[2],
						'email' => $row[3],
						'ncontrol' => $row[4],
						'especialidad' => $row[5],
						'anioEgreso' => $row[6],
						'campus' => $row[7],
						'modalidad' => $row[8],
						'sit_lab' => $row[9],
					);
				}
				return json_encode($array_info);
			}else {
				return "Imposible acceder a la informacion. Usuario no logueado.";
			}
		} catch (Exception $e) {
			echo $e-getMessage();
			return null;
		}
	}
}
$item = new JSON_Items();
echo $item->infoBase();
?>
<?php 
require_once "../database/db_handler.php";
class Ficha extends Database {
	public function __construct(){}

	public function insertaRegistro($personal, $escolar, $pertinencia){
		try {
			$sentencia1 = "insert into infoPersonal(clave, apPaterno, apMaterno, nombre, sexo, calleNum, colonia, ciudad, estado, 
								codPost, telCasa, telCel, telRec, email, facebook)  
								values(" . $personal . ")";
			
			$sentencia2 = "insert into infoEscolar(id, ncontrol, progEducativo, especialidad, anioEgreso, titulado, campus, modalidad, clave) 
										values(" . $escolar . ")";
			$sentencia3 = "insert into recursos_aprendizaje(id, calidadDocentes, planEstudio, experiencia, clave_usuario) 
								values(" . $pertinencia . ")";
			$this->ejecutarQuery($sentencia1, $sentencia2, $sentencia3);

			return true;
		} catch (Exception $e) {
			echo "Error: " . $e->getMessage();
			return false;
		}
	}

	public function insertaLaboral($sql1, $sql2, $sql3) {
		try {
			$sentencia1 = "insert into infolaboral(id, situacion_actual, clave_usuario) values(0, ".$sql1.")";
			$sentencia2 = "insert into 	detalle_laboral(id, medioDeColocacion, rel_perfil, puesto_laboral, clave_usuario) 
							values(0, ".$sql2.")";
			$sentencia3 = "insert into detalle_empresa values(0, ".$sql3.")";
			$this->ejecutarQuery($sentencia1, $sentencia2, $sentencia3);
			return true;
		} catch (Exception $e) {
			echo "Error: " . $e->getMessage();
		}
	}

	public function insertaDesempleado($sql1, $sql2){
		try {
			$inserta_laboral = "insert into infolaboral(id, situacion_actual, clave_usuario) 
								values (0, ".$sql1.")";
			$insertaDesempleado = "insert into detalle_desempleado(id, tiempoDesempleado, motivo, clave_usuario) 
										values(0, ". $sql2 .")";
			$this->registros($inserta_laboral, $insertaDesempleado);
			return true;
		} catch (Exception $e) {
			echo $e->getMessage();
		}
	}
	public function insertaEstudiando($sql1, $sql2){
		$inserta_estudio = "insert into infolaboral(id, situacion_actual, clave_usuario) 
								values (0, ".$sql1.")";
		$detalle_estudio = "insert into detalle_estudio(id, nombreInstitucion, ciudadInstitucion, tipoDeEstudios, nombreEstudios, clave_usuario) 
								values(0, ". $sql2 .")";
		$this->registros($inserta_estudio, $detalle_estudio);
		return true;
	}

	public function capacitacion($sql){
		try {
			$inserta_capacitacion = "insert into capacitacion values(0, ".$sql.")";
			$this->insertaCapacitacion($inserta_capacitacion);
			return true;
		} catch (Exception $e) {
			echo $e->getMessage();
		}
	}
}

if(isset($_POST)){
	$infoPersonal = "'". md5($_POST['clave']) ."', '" . $_POST['apPaterno']. "', '" . $_POST['apMaterno']. "', '" . $_POST['nombre']. "', '" . $_POST['sexo']
	. "', '" . $_POST['calleNum']. "', '" . $_POST['colonia']. "', '" . $_POST['ciudad']. "', '" . $_POST['estado']. "', '" . $_POST['codPost']
	. "', '" . $_POST['telCasa']. "', '" . $_POST['telCel']. "', '" . $_POST['telRec']. "', '" . $_POST['email']. "', '" . $_POST['facebook'] . "'";
	
	$infoEscolar = "0, '" . $_POST['ncontrol'] . "', '" . $_POST['progEducativo']. "', '" . $_POST['especialidad']. "', '" . $_POST['anioEgreso']
	. "', '" . $_POST['titulado']. "', '" . $_POST['campus']. "', '" . $_POST['modalidad']. "', '" . md5($_POST['clave'])  . "'";
	
	$pertinencia = "0, '".$_POST['calidad']."', '" . $_POST['estudio']. "', '" . $_POST['experiencia'] . "', '".md5($_POST['clave'])."'";

	$fi = new Ficha();
	
	if($fi->insertaRegistro($infoPersonal, $infoEscolar, $pertinencia)){
		$lab_actual = $_POST['lab_actual'];
		switch($lab_actual){
			case "Trabajando":
				$trabaja = "'".$lab_actual."', '".md5($_POST['clave'])."'";
				$detalle_laboral = "'".$_POST['medio']."', '".$_POST['perfil']."', '".$_POST['puesto']."', 
				 '".md5($_POST['clave'])."'";
				 $detalle_empresa = "'".$_POST['nombreEmpresa']."', '".$_POST['calleNumEmpresa']." ".$_POST['coloniaEmpresa']." ".$_POST['municipioEmpresa']." ".$_POST['estadoEmpresa']."', 
				 '".$_POST['telefonoEmpresa']."', 'CVG_1992', '".md5($_POST['clave'])."'";

				if($fi->insertaLaboral($trabaja, $detalle_laboral, $detalle_empresa)){
					if($_POST['capacitacion'] == "Si"){
						$capacita = "'".$_POST['capacitacion']."', '".$_POST['cursos']."', '".md5($_POST['clave'])."'";
						if($fi->capacitacion($capacita)){
							echo 1;
						}
					}else {
						echo 1;
					}
				}
				break;
			case "Trabaja y estudia":
				break;
			case "Estudia":
				$estudia = "'".$lab_actual."', '".md5($_POST['clave'])."'";
				$detalle_estudia  = "'".$_POST['nombreInstitucion']."', '".$_POST['ciudadInstitucion']."', '".$_POST['tipoEstudios']."', 
				 '".$_POST['nombreEstudios']."', '".md5($_POST['clave'])."'";

				if($fi->insertaEstudiando($estudia, $detalle_estudia)){
					if($_POST['capacitacion'] == "Si"){
						$capacita = "'".$_POST['capacitacion']."', '".$_POST['cursos']."', '".md5($_POST['clave'])."'";
						if($fi->capacitacion($capacita)){
							echo 1;
						}
					}else {
						echo 1;
					}
				}
				break;
			default:
				$laboral = "'".$lab_actual."', '".md5($_POST['clave'])."'";
				$laboral_detalle = "'".$_POST['tiempo']."', '".$_POST['motivos']."', '".md5($_POST['clave'])."'";
				if($fi->insertaDesempleado($laboral, $laboral_detalle)){
					if($_POST['capacitacion'] == "Si"){
						$capacita = "'".$_POST['capacitacion']."', '".$_POST['cursos']."', '".md5($_POST['clave'])."'";
						if($fi->capacitacion($capacita)){
							echo 1;
						}
					}else {
						echo 1;
					}
				}
				break;	
			}		
	}else {
		echo "No se pudieron registrar los datos";
	}
}else {
	echo "No se obtuvieron los datos";
}
?>

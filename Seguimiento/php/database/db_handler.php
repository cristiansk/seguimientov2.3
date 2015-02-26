<?php 
abstract class Database {
	protected $db_name = "seg_egresados_itsav";
	private static $db_pass = "a28d8896f9";
	private static $db_host = "localhost";
	private static $db_user = "root";
	protected $resultado = array();
	protected $sentencia;
	private $conn;	
	private $mensaje = "";

	private function open(){
		try {
			$this->conn = new PDO("mysql:host=" . self::$db_host . ";dbname=" . $this->db_name, self::$db_user, self::$db_pass);
			$this->conn->exec("SET CHARACTER SET UTF8");
		} catch (Exception $e) {
			echo "Error: " . $e->getMessage();
		}
	}

	protected function ejecutarQuery($sql, $sql2, $sql3){
		try {
			$this->open();
			$this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			$this->conn->beginTransaction();
  			$this->conn->exec($sql);
  			$this->conn->exec($sql2);
  			$this->conn->exec($sql3);
  			$this->conn->commit();
  			return true;
		} catch (Exception $e) {
			$this->conn->rollBack();
			echo "Error: " . $e->getMessage();
		}
	}
	protected function registros($sql1, $sql2){
		try {
			$this->open();
			$this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			$this->conn->beginTransaction();
  			$this->conn->exec($sql1);
  			$this->conn->exec($sql2);
  			$this->conn->commit();
		} catch (Exception $e) {
			$this->conn->rollBack();
			echo "Error: " . $e->getMessage();
		}
	}

	protected function insertaCapacitacion($sql1){
		try {
			$this->open();
			$this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			$this->conn->beginTransaction();
	  		$this->conn->exec($sql1);
	  		$this->conn->commit();
		} catch (Exception $e) {
			$this->conn->rollBack();
			echo "Error: " . $e->getMessage();
		}
	}


	protected function ejecutarConsulta($sql){
		try {
			$this->open();
		 	return $this->conn->prepare($sql);
		} catch (Exception $e) {
			echo "Error: " . $e->getMessage();
		}
	}

	private function close(){
		try {
			$this->conn = null;
		} catch (Exception $e) {
			echo "Error: " . $e->getMessage();
		}
	}

	public function __clone(){ 
        trigger_error('La clonación de este objeto no está permitida', E_USER_ERROR); 
    }
}
?>
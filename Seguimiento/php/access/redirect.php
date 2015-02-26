<?php 
@session_start();
if(@$_SESSION['usuario']){
	header("Location: seg-egresados-admin-view");
}
?>
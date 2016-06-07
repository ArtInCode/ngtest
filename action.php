<?php
header('Access-Control-Allow-Origin: *'); 
header('Content-Type: application/json');
if(isset($_POST['login'])){
	$data = [
		'login'=>'ngadmin@gmail.com',
		'pass'=>'NgPass', 
		
		];

	echo json_encode($data);	
}



exit();
?>
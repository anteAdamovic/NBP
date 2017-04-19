<?php

    $origin = getallheaders()['Origin'];
	
	// For development
	if( strcmp($origin, 'http://localhost:4200') == 0 )
		header('Access-Control-Allow-Origin: http://localhost:4200');

    $hostname = 'pdb10.biz.nf';
    $database = '2264940_nbp';
    $username = '2264940_nbp';
    $password = 'nbp12345';

    $db = new mysqli($hostname, $username, $password, $database);

    if($db->connect_error) {
        $databaseConnectionStatus = false;
        echo json_encode(array('status' => $databaseConnectionStatus));
        return;
    }

?>
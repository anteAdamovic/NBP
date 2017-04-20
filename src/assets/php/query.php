<?php
    include('./databaseConnection.php');
    ini_set('default_charset', 'utf-8');
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $data = [];

    $queryString = $request->query;
    $result = $db->query($queryString);
    if($result->num_rows > 0) {
        while($row = $result->fetch_object()) {
            array_push($data, json_encode($row, JSON_UNESCAPED_UNICODE));
        }
        
    }

    echo json_encode($data);

    $db->close();
?>
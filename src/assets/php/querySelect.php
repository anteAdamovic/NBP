<?php
    include('./databaseConnection.php');

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $data = [];

    if( !isset($request->query) ) {
        echo json_encode(array('status' => 'Invalid request.'));
    }

    $queryString = $request->query;

    $result = $db->query($queryString);
    if($result->num_rows > 0) {
        
        while($row = $result->fetch_assoc()) {
            array_push($data,json_encode($row));
        }
    }

    echo json_encode(array('data' => $data));

    $db->close();
?>
?>
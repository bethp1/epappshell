<?php
// autologin.php
require("config.php");

$rememberToken = $_POST['loginRememberToken'];

$query = "SELECT ID, username, name, email  FROM users WHERE remember_token = :loginToken";
$query_params = array(':loginToken' => $rememberToken);



try { 
    $stmt = $db->prepare($query); 
    $result = $stmt->execute($query_params); 
    
    $outData = array();
    while($row = $stmt->fetch()) {
        $outData[] = $row;
    } 
    //echo json_encode($outData);
    echo '{"user":' . json_encode($outData) . '}'; 
    exit();
} catch(PDOException $ex){ 
    http_response_code(500);
    echo json_encode(array(
        'error' => array(	
        'msg' => 'Error on select user: ' . $ex->getMessage(),
        'code' => $ex->getCode(),
        ),
    ));
    exit();
} 
?>
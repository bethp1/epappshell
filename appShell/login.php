<?php
  require("config.php");

  
//print_r($_POST); exit();
if(empty($_POST['username'])) die("Username required");
if(empty($_POST['password'])) die("Password required");	



$username = $_POST['username'];
$password = $_POST['password'];
$email = $_POST['username'];
$rememberToken = $_POST['loginToken'];

$hash = md5($password);

if($rememberToken > 1 ) {

    $query = "UPDATE users SET remember_token = :loginToken WHERE username = :username OR email = :email";
    $query_params = array(':loginToken' => $rememberToken, ':username' => $username, ':email'=> $email ); 
    
    try { 
		$stmt = $db->prepare($query); 
        $result = $stmt->execute($query_params); 
    } catch(PDOException $ex){ 
		http_response_code(500);
		echo json_encode(array(
			'error' => array(	
			'msg' => 'Error on update ' . $ex->getMessage(),
			'code' => $ex->getCode(),
			),
		));
		exit();
    } 

}

$email = filter_var($email, FILTER_SANITIZE_EMAIL);


if (filter_var($email, FILTER_VALIDATE_EMAIL)){

    $query = "SELECT username FROM users WHERE email = :email AND password = :password";
    $query_params = array(':email'=> $email, ':password' => $hash);
//print_r($query_params);exit();
}else{

    

    $query = "SELECT username FROM users WHERE username = :username AND password = :password";
    $query_params = array(':username' => $username, ':password' => $hash);
   // print_r($query_params);exit();


}

//echo $query;exit();
//$query = "SELECT 1 FROM users WHERE username = :username AND raw_password = :password";
//$query_params = array(':username' => $username, ':password' => $password);


try {

    $stmt = $db->prepare($query); 
    $result = $stmt->execute($query_params); 
    

}
 catch(PDOException $ex){ 
    http_response_code(500);
    echo json_encode(array(
        'error' => array(	
        'msg' => 'Error on checking login information: ' . $ex->getMessage(),
        'code' => $ex->getCode(),
        ),
    ));
    exit(); 
}


    //print_r($query_params); exit();

    $row = $stmt->fetch(); 


if ($row > 0){

        $username = $row['username'];
     
       
        $query = "SELECT ID, username, name, email FROM users WHERE username = :userName";
            $query_params = array(':userName' => $username);

           // print_r($query_params);exit();

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


   
    } 
    else {

        http_response_code(500);
        echo json_encode(array(
            'error' => array(	
            'msg' => 'user not found: '
            ),
        ));
        exit();

    }






?>

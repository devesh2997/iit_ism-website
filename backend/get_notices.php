<?php
/**
 *Get notices.
 **/

 require_once 'include/DB_Functions.php';
 $db = new DB_Functions();

 // json response array
 $response = array("error" => FALSE);

 $result = $db->getNotices();

 if($result){
   $response["result"]=$result;
   echo json_encode($response);
 }
 else{
   $response["error"]=TRUE;
   echo json_encode($response);
 }
 ?>

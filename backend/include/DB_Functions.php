<?php 

    class DB_Functions {
        
        private $conn;
    
        // constructor
        function __construct() {
            require_once 'DB_Connect.php';
            // connecting to database
            $db = new Db_Connect();
            $this->conn = $db->connect();
        }
        // destructor
        function __destruct() {
            $this->conn->close();
        }

        /**
         * Encrypting password
        * @param password
        * returns salt and encrypted password
        */
        public function hashSSHA($password) {
        
            $salt = sha1(rand());
            $salt = substr($salt, 0, 10);
            $encrypted = base64_encode(sha1($password . $salt, true) . $salt);
            $hash = array("salt" => $salt, "encrypted" => $encrypted);
            return $hash;
        }
        

        public function getNotices(){
            date_default_timezone_set('Asia/Kolkata');
            $cur_time = strtotime(date('Y-m-d H:i:s'));

            $query = "SELECT * FROM notice";
            $query_run = mysqli_query($this->conn,$query);
            if($query_run){
                $response["notices"] = array();
                while($query_row = mysqli_fetch_assoc($query_run)){
                    $notice_start_time = strtotime($query_row['s_time']);
                    $notice_end_time = strtotime($query_row['e_time']);
                    if($cur_time >= $notice_start_time && $cur_time < $notice_end_time){
                        $notice["title"]=$query_row['title'];
                        $notice["department"]=$query_row['depart'];
                        $notice["e_id"]=$query_row['e_id'];
                        $notice["path"]=$query_row['path'];
                        array_push($response["notices"],$notice);
                    }
                }
                return $response;
            }else{
                return false;
            }
        }


        
    }
?>

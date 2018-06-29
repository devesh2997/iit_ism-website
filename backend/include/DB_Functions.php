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
            $cur_time = date('Y-m-d H:i:s');
        }


        
    }
?>

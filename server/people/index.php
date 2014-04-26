<?php

$HOST = 'localhost';
$USERNAME = 'root';
$PASSWORD = 'root';
$DB_NAME = 'angularJS';


$connection = mysqli_connect($HOST, $USERNAME, $PASSWORD, $DB_NAME);


if ($connection) {
	$sql = "SELECT * FROM people";
	if ($result = $connection->query($sql)) {

//
//		while ($object = mysqli_fetch_object($result)) {
//
////
////			foreach ($rows as $row) {
////
////				echo $row .'<br>';
////			}
//
//
//		}

		$rows = array();
		while($r = mysqli_fetch_assoc($result)) {
			$rows[] = $r;
		}
		print json_encode($rows);

		//print json_endode($object);

	} else echo mysqli_error($connection);
}


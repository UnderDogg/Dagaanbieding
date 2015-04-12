<?php

// Get the database credentials
if(file_exists(__DIR__ . "/database.php")) {
    $credentials = require_once('database.php');
}
else {
    throw new Exception( 'No database credentials file available, please create one.' );
}

return new \Phalcon\Config(array(
    'database' => array(
        'adapter'     => $credentials->adapter,
        'host'        => $credentials->host,
        'username'    => $credentials->username,
        'password'    => $credentials->password,
        'dbname'      => $credentials->dbname,
        'charset'     => $credentials->charset,
    ),
    'application' => array(
        'controllersDir' => __DIR__ . '/../controllers/',
        'modelsDir'      => __DIR__ . '/../models/',
        'viewsDir'       => __DIR__ . '/../views/',
        'cacheDir'       => __DIR__ . '/../cache/',
        'routesDir'		 => __DIR__ . '/../routes/',
        'baseUri'        => '/',
    )
));

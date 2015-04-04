<?php

return new \Phalcon\Config(array(
    'database' => array(
        'adapter'     => 'Mysql',
        'host'        => 'localhost',
        'username'    => 'dagaanbieding_w',
        'password'    => 'TestTest',
        'dbname'      => 'roekel',
        'charset'     => 'utf8',
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

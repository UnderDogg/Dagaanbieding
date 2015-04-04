<?php

// Create the router
$router = new \Phalcon\Mvc\Router(false);

//Add the group to the router
$router->mount(new ApiRoutes());

//Set 404 paths
$router->notFound(array(
	'controller'	=> 'base',
	'action'		=> 'notFound'
));

return $router;
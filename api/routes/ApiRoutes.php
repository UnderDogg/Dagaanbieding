<?php

class ApiRoutes extends Phalcon\Mvc\Router\Group
{
    public function initialize()
    {
        //All the routes start with /blog
        $this->setPrefix('/getDailyInfo');

        //Add a route to the group
        $this->addGet('/:action', array(
        	'namespace'		=> 'Api',
        	'controller'	=> 'Roekel_day_info',
        	'action'		=> 1
        ));
		
		//Add a route to the group
        $this->addPost('/', array(
        	'namespace'		=> 'Api',
        	'controller'	=> 'Roekel_day_info',
        	'action'		=> 'Post'
        ));
		
		//Add a route to the group
        $this->addPut('/', array(
        	'namespace'		=> 'Api',
        	'controller'	=> 'Roekel_day_info',
        	'action'		=> 'Put'
        ));
		
		//Add a route to the group
        $this->addDelete('/', array(
        	'namespace'		=> 'Api',
        	'controller'	=> 'Roekel_day_info',
        	'action'		=> 'Delete'
        ));
    }
}
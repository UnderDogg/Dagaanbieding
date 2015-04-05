<?php

class BaseController extends \Phalcon\Mvc\Controller {
	protected $cache;
	
	public function initialize()
    {
		// Cache the files for 2 days using a Data frontend
		$frontCache = new \Phalcon\Cache\Frontend\Data(array(
		    "lifetime" => 3600
		));
		
		// Create the component that will cache "Data" to a "File" backend
		// Set the cache file directory - important to keep the "/" at the end of
		// of the value for the folder
		$this->cache = new \Phalcon\Cache\Backend\File($frontCache, array(
		    "cacheDir" => __DIR__  . "/../cache/"
		));
    }
}

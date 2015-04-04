<?php

class BaseController extends \Helpers\ApiBaseController {
	public function notFoundAction() {
		$this->setStatusCode(404);
		$this->setPayLoad(array('error' => '404'));
		$this->setFormat('json');
		return $this->render();
	}
}
<?php

namespace Api;

use \RoekelDayInfo;
use \RoekelProducts;

class RoekelDayInfoController extends \Helpers\ApiBaseController {
	public function GetAllAction() {
		// Get Data
		$dailyDeals = RoekelDayInfo::find(array(
			'order'	=> 'date DESC'
		));

		foreach($dailyDeals as $dailyDeal) {
			$data[] = array(
				'name' 		=> $dailyDeal->RoekelProducts->name,
				'date'		=> $dailyDeal->date,
				'price'		=> $dailyDeal->RoekelProducts->price,
				'picture'	=> $dailyDeal->RoekelProducts->picture,
			);
		}

		// Initialize response
		$this->setStatusCode(200);
		$this->setPayload($data);
		$this->setFormat('json');
		
		// Send Response
		return $this->render();
	}
	
	public function GetLatestAction() {
		$today = date('Y-m-d', time());
		//$today = '2015-03-09';
		
		// Get information
		$dailyInfo = RoekelDayInfo::findFirst(array(
			'conditions'	=> 'date = ?1',
			'bind'			=> array(1 => $today)
		));

		if(!empty($data)) {
			$data = array(
				'name' 		=> $dailyInfo->RoekelProducts->name,
				'date'		=> $dailyInfo->date,
				'price'		=> $dailyInfo->RoekelProducts->price,
				'picture'	=> $dailyInfo->RoekelProducts->picture,
			);
		}
		else {
			$data = array('error' => 'noContent');
		}


		// Initialize Response
		$this->setStatusCode(200);
		$this->setPayload($data);
		$this->setFormat('json');
		
		// Send Response
		return $this->render();
	}
	
	public function PostAction() {
		echo json_encode(array('RequestType' => 'POST Request'));
	}

	public function PutAction() {
		echo json_encode(array('RequestType' => 'PUT Request'));
	}
	
	public function DeleteAction() {
		echo json_encode(array('RequestType' => 'DELETE Request'));
	}
}

<?php

class RoekelDayInfo extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var string
     */
    public $daily_deal;

    /**
     *
     * @var string
     */
    public $daily_soup;

    /**
     *
     * @var string
     */
    public $daily_luxe_soup;

    /**
     *
     * @var string
     */
    public $date;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->belongsTo('daily_deal', 'RoekelProducts', 'name', array('foreignKey' => TRUE, 'alias' => 'RoekelProducts'));
        //$this->belongsTo('daily_soup', 'Roekel_products', 'name', array('alias' => 'Roekel_products'));
    }

    /**
     * Independent Column Mapping.
     */
    public function columnMap()
    {
        return array(
            'daily_deal' => 'daily_deal', 
            'daily_soup' => 'daily_soup', 
            'daily_luxe_soup' => 'daily_luxe_soup', 
            'date' => 'date'
        );
    }

}

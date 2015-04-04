<?php

class RoekelProducts extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var string
     */
    public $name;

    /**
     *
     * @var string
     */
    public $price;

    /**
     *
     * @var string
     */
    public $picture;

    /**
     *
     * @var string
     */
    public $category;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->hasMany('name', 'Roekel_day_info', 'daily_deal', array('alias' => 'Roekel_day_info'));
        $this->hasMany('name', 'Roekel_day_info', 'daily_soup', array('alias' => 'Roekel_day_info'));
        $this->belongsTo('category', 'Roekel_categories', 'category', array('alias' => 'Roekel_categories'));
    }

    /**
     * Independent Column Mapping.
     */
    public function columnMap()
    {
        return array(
            'name' => 'name', 
            'price' => 'price', 
            'picture' => 'picture', 
            'category' => 'category'
        );
    }

}

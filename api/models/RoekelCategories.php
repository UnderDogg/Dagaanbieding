<?php

class RoekelCategories extends \Phalcon\Mvc\Model
{

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
        $this->hasMany('category', 'Roekel_products', 'category', array('alias' => 'Roekel_products'));
    }

    /**
     * Independent Column Mapping.
     */
    public function columnMap()
    {
        return array(
            'category' => 'category'
        );
    }

}

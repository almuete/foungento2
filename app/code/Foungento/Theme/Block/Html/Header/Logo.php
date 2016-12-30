<?php
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
namespace Foungento\Theme\Block\Html\Header;

use Magento\Framework\View\Element\Template;
use Magento\Framework\App\ObjectManager as Objm;

/**
 * Logo page header block
 */
class Logo extends \Magento\Theme\Block\Html\Header\Logo
{

	protected function _toHtml()
    {
        $this->setModuleName($this->extractModuleName('Magento\Theme\Block\Html\Header\Logo'));
        return parent::_toHtml();
    }

    public function getProduct() {
        //$_product = Product;
        //echo get_class($_product->load());
        $objectManager = Objm::getInstance();
        $product = $objectManager->get('Magento\Catalog\Model\Product')->load(1);
        echo $product->getSelect();
        $product->setName('Programatically Created '.rand(100,1000));
        $product->save();
        var_dump($product->getName());
        //$product = new Product();
        //var_dump(get_class($product));
        //$label = $this->_categoryFactory->create()->load($categoryId)->getName();
        //var_dump($label);
        //return __METHOD__;
    }


    /**
     * Get logo image URL
     *
     * @return string
     */
    public function getLogoSrc()
    {
        if (empty($this->_data['logo_src'])) {
            $this->_data['logo_src'] = $this->_getLogoUrl();
        }
        return $this->_data['logo_src'];
    }

}

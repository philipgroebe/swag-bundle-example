<?php declare(strict_types=1);

namespace Swag\BundleExample\Core\Content\Bundle;

use Shopware\Core\Framework\DataAbstractionLayer\{
    Entity,
    EntityIdTrait
};

use Shopware\Core\Content\Product\ProductCollection;

class BundleEntity extends Entity {

    use EntityIdTrait;

    /**
     * @var string
     */
    protected $discountType;

    /**
     * @var float
     */
    protected $discount;

    /**
     * @var ProductCollection|null
     */
    protected $products;

    public function getProducts(): ?ProductCollection
    {
        return $this->products;
    }

    public function setProducts(ProductCollection $products): void 
    {
        $this->products = $products;
    }

    public function getDiscountType(): string 
    {
        return $this->discountType;
    }


    public function setDiscountType(string $type): void 
    {
        $this->discountType = $type;
    }



    public function getDiscount(): float
    {
        return $this->discount;
    }



    public function setDiscount(float $discount): void 
    {
        $this->discount = $discount;
    }

}

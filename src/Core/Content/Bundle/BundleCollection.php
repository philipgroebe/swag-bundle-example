<?php declare(strict_types=1);

namespace Swag\BundleExample\Core\Content\Bundle;

use Shopware\Core\Framework\DataAbstractionLayer\{
    EntityCollection,
};

class BundleCollection extends EntityCollection {

    protected function getExpectedClass(): string
    {
        return BundleEntity::class;
    }

}

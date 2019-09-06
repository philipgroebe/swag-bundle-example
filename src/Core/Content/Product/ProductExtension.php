<?php declare(strict_types=1);

namespace Swag\BundleExample\Core\Content\Product;

use Shopware\Core\Content\Product\ProductDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\{
    EntityExtensionInterface,
    FieldCollection,
    Field\ManyToManyAssociationField
};

use Swag\BundleExample\Core\Content\Bundle\BundleDefinition;
use Swag\BundleExample\Core\Content\Bundle\Aggregate\BundleProduct\BundleProductDefinition;

class ProductExtension implements EntityExtensionInterface {

    public function extendFields(FieldCollection $fields): void 
    {
        $fields->add(
            new ManyToManyAssociationField(
                'bundles', 
                BundleDefinition::class, 
                BundleProductDefinition::class, 
                'product_id', /** localColumn */
                'bundle_id' /** mappingReferenceColumn */
            )
        );
    }

    public function getDefinitionClass(): string 
    {
        return ProductDefinition::class;
    }
}

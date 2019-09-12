<?php declare(strict_types=1);

namespace Swag\BundleExample\Core\Content\Bundle\Aggregate\BundleProduct;

use Swag\BundleExample\Core\Content\Bundle\BundleDefinition;
use Shopware\Core\Content\Product\ProductDefinition;

use Shopware\Core\Framework\DataAbstractionLayer\{
    FieldCollection,
    MappingEntityDefinition,        
};

use Shopware\Core\Framework\DataAbstractionLayer\Field\{
    CreatedAtField,
    FkField,
    ManyToOneAssociationField,
    ReferenceVersionField,
    Flag\PrimaryKey,
    Flag\Required
};

class BundleProductDefinition extends MappingEntityDefinition {

    public function getEntityName(): string 
    {
        return 'swag_bundle_product';
    }

    public function defineFields(): FieldCollection 
    {
        $fields = [];

        array_push($fields, (new FkField(
                                'bundle_id', 
                                'bundleId', 
                                BundleDefinition::class
                            ))->addFlags(
                                new PrimaryKey(), 
                                new Required()
                            ));

        array_push($fields, (new FkField(
                                'product_id', 
                                'productId', 
                                ProductDefinition::class
                            ))->addFlags(
                                new PrimaryKey(), 
                                new Required()
                            ));


        array_push($fields, (new ReferenceVersionField(
                                ProductDefinition::class
                            ))->addFlags(
                                new PrimaryKey(),
                                new Required()
                            )
                        );

        array_push($fields, new ManyToOneAssociationField(
                                'bundle',
                                'bundle_id',
                                BundleDefinition::class
                            ));

        array_push($fields, new ManyToOneAssociationField(
            'product',
            'product_id',
            ProductDefinition::class
        ));

        array_push($fields, new CreatedAtField());

        return new FieldCollection($fields);

    }

}

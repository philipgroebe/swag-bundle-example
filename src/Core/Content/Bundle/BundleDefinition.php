<?php declare(strict_types=1);

namespace Swag\BundleExample\Core\Content\Bundle;

use Shopware\Core\Content\Product\ProductDefinition;
use Swag\BundleExample\Core\Content\Bundle\{
    BundleEntity,
    BundleCollection,
    Aggregate\BundleProduct\BundleProductDefinition,
};
use Swag\BundleExample\Core\Content\Bundle\Aggregate\BundleTranslation\BundleTranslationDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\{
    EntityDefinition,
    FieldCollection,
};
use Shopware\Core\Framework\DataAbstractionLayer\Field\{
    IdField,
    StringField,
    FloatField,
    TranslatedField,
    ManyToManyAssociationField,
    TranslationsAssociationField,
    Flag\PrimaryKey,
    Flag\Required,
};

class BundleDefinition extends EntityDefinition {
    
    public function getEntityName(): string 
    {
        return 'swag_bundle';
    }

    public function getEntityClass(): string 
    {
        return BundleEntity::class;
    }

    public function getCollectionClass(): string 
    {
        return BundleCollection::class;
    }

    public function defineFields(): FieldCollection
    {
        $fields = [];

        array_push($fields, (new IdField('id', 'id'))
                                    ->addFlags(
                                        new Required(), 
                                        new PrimaryKey()));
        
        array_push($fields,  new TranslatedField('name'));

        array_push($fields,  (new StringField('discount_type', 'discountType'))
                                    ->addFlags(new Required()));

        array_push($fields, (new FloatField('discount', 'discount'))
                                    ->addFlags(new Required()));
        
        array_push($fields, new TranslationsAssociationField(
            BundleTranslationDefinition::class,
            'swag_bundle_id' 
        ));

        array_push($fields, new ManyToManyAssociationField(
            'products', 
            ProductDefinition::class,
            BundleProductDefinition::class,
            'bundle_id',
            'product_id'));

        return new FieldCollection($fields);

    }
}

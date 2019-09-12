<?php declare(strict_types=1);

namespace Swag\BundleExample\Core\Content\Bundle\Aggregate\BundleTranslation;

use Shopware\Core\Framework\DataAbstractionLayer\{
    EntityTranslationDefinition,
    FieldCollection,
    Field\StringField,
    Field\Flag\Required,
};

use Swag\BundleExample\Core\Content\Bundle\BundleDefinition;


class BundleTranslationDefinition extends EntityTranslationDefinition {

    public function getEntityName(): string 
    {
        return 'swag_bundle_translation';
    }

    public function getCollectionClass(): string 
    {
        return BundleTranslationCollection::class;
    }

    public function getEntityClass(): string 
    {
        return BundleTranslationEntity::class;
    }

    public function getParentDefinitionClass(): string 
    {
        return BundleDefinition::class;
    }

    protected function defineFields(): FieldCollection 
    {
        return new FieldCollection([
            (new StringField('name', 'name'))->addFlags(new Required())
        ]);
    }

}

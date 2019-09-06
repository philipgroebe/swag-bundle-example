<?php declare(strict_types=1);

namespace Swag\BundleExample;

use Doctrine\DBAL\Connection;
use Shopware\Core\Framework\Plugin;
use Shopware\Core\Framework\Plugin\Context\UninstallContext;

class BundleExample extends Plugin {
    
    public function uninstall(UninstallContext $context): void 
    {
        parent::uninstall($context);

        if ($context->keepUserData()) return;

        $connection = $this->container->get(Connection::class);
        
        try {
        
            $connection->executeQuery('DROP TABLE IF EXISTS `swag_bundle_product`');
        
        } catch(\Exception $e) {

            echo "Table \"swag_bundle_product\" not deleted.". \n\r;

        }

        try {

            $connection->executeQuery('DROP TABLE IF EXISTS `swag_bundle_translation`');

        } catch(\Exception $e) {

            echo "Table \"swag_bundle_translation\" not deleted.". \n\r;

        }

        try {

            $connection->executeQuery('DROP TABLE IF EXISTS `swag_bundle`');

        } catch(\Exception $e) {

            echo "Table \"swag_bundle\" not deleted.". \n\r;

        }
    }

}
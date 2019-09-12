(this.webpackJsonp=this.webpackJsonp||[]).push([["bundle-example"],{"5LBt":function(e,t){e.exports='{% block swag_bundle_detail %}\n<sw-page class="swag-bundle-detail">\n    <template slot="smart-bar-actions">\n        <sw-button :routerLink="{ name: \'swag.bundle.list\' }">\n            {{ $t(\'swag-bundle.detail.cancelButtonText\') }}\n        </sw-button>\n        <sw-button-process\n            :isLoading="isLoading"\n            :processSuccess="processSuccess"\n            variant="primary"\n            @process-finish="saveFinish"\n            @click="onClickSave">\n            {{ $t(\'swag-bundle.detail.saveButtonText\') }}\n        </sw-button-process>\n    </template>\n\n    <template slot="content">\n         <sw-card-view>\n            <sw-card v-if="bundle" :isLoading="isLoading">\n                <sw-field \n                    :label="$t(\'swag-bundle.detail.nameLabel\')" \n                    v-model="bundle.name" \n                    validation="required">\n                </sw-field>\n                <sw-field type="number"\n                    :label="$t(\'swag-bundle.detail.discountLabel\')" \n                    v-model="bundle.discount">\n                </sw-field>\n                <sw-field type="radio" \n                    :label="$t(\'swag-bundle.detail.discountTypeLabel\')" \n                    v-model="bundle.discountType" \n                    :options="options">\n                </sw-field>\n                <sw-many-to-many-select\n                    :localMode="bundle.isNew()"\n                    :label="$t(\'swag-bundle.detail.assignProductsLabel\')"\n                    :collection="bundle.products">\n                </sw-many-to-many-select>\n            </sw-card>\n        </sw-card-view>\n    </template>\n</sw-page>\n{% endblock %}\n'},"5nAn":function(e){e.exports=JSON.parse('{"swag-bundle":{"general":{"mainMenuItemGeneral":"Bundle","descriptionTextModule":"Manage bundles here"},"list":{"addButtonText":"Add bundle","columnName":"Name","columnDiscountType":"Discount type","columnDiscount":"Discount"},"detail":{"nameLabel":"Name","discountLabel":"Discount","discountTypeLabel":"Discount type","assignProductsLabel":"Assign products","cancelButtonText":"Cancel","saveButtonText":"Save","errorTitle":"Error saving the bundle","absoluteText":"Absolute","percentageText":"Percentage"}},"sw-product":{"detail":{"bundleCardLabel":"Bundles","bundleSelectLabel":"Associated bundles","bundleSelectPlaceholder":"Add bundle..."}},"sw-condition":{"condition":{"cartContainsBundle":{"label":"Cart contains bundle"}}}}')},AaZN:function(e,t){e.exports='{% block swag_bundle_list %}\n    <sw-page class="swag-bundle-list">\n        {% block swag_bundle_list_smart_bar_actions %}\n            <template slot="smart-bar-actions">\n                <sw-button variant="primary" :routerLink="{ name: \'swag.bundle.create\' }">\n                    {{ $t(\'swag-bundle.list.addButtonText\') }}\n                </sw-button>\n            </template>\n        {% endblock %}\n        \n        <template slot="content">\n            {% block swag_bundle_list_content %}\n                <sw-entity-listing\n                    v-if="bundles"\n                    :items="bundles"\n                    :repository="repository"\n                    :showSelection="false"\n                    :columns="columns"\n                    detailRoute="swag.bundle.detail">\n                </sw-entity-listing>\n            {% endblock %}\n        </template>\n    </sw-page>\n{% endblock %}\n'},S4sG:function(e){e.exports=JSON.parse('{"swag-bundle":{"general":{"mainMenuItemGeneral":"Bundle","descriptionTextModule":"Verwalte die Bundles hier"},"list":{"addButtonText":"Bundle hinzufügen","columnName":"Name","columnDiscountType":"Rabatt Typ","columnDiscount":"Rabatt"},"detail":{"nameLabel":"Name","discountLabel":"Rabatt","discountTypeLabel":"Rabatt Typ","assignProductsLabel":"Produkte zuweisen","cancelButtonText":"Abbrechen","saveButtonText":"Speichern","errorTitle":"Fehler beim Speichern des Bundles","absoluteText":"Absolut","percentageText":"Prozentual"}},"sw-product":{"detail":{"bundleCardLabel":"Bundles","bundleSelectLabel":"Zugewiesene Bundles","bundleSelectPlaceholder":"Bundle hinzufügen..."}},"sw-condition":{"condition":{"cartContainsBundle":{"label":"Warenkorb enthält Bundle"}}}}')},ZpdO:function(e,t){const{Component:n}=Shopware;n.extend("swag-bundle-create","swag-bundle-detail",{methods:{getBundle(){this.bundle=this.repository.create(this.context)},onClickSave(){this.isLoading=!0,this.repository.save(this.bundle,this.context).then(()=>{this.isLoading=!1,this.$router.push({name:"swag.bundle.detail",params:{id:this.bundle.id}})}).catch(e=>{this.isLoading=!1,this.createNotificationError({title:this.$t("swag-bundle.detail.errorTitle"),message:e})})}}})},e5q0:function(e,t,n){"use strict";n.r(t);var s=n("AaZN"),a=n.n(s);const{Criteria:l}=Shopware.Data;Shopware.Component.register("swag-bundle-list",{template:a.a,inject:["repositoryFactory","context"],data:()=>({repository:null,bundles:null}),metaInfo(){return{title:this.$createTitle()}},computed:{columns(){return[{property:"name",dataIndex:"name",label:this.$t("swag-bundle.list.columnName"),routerLink:"swag.bundle.detail",inlineEdit:"string",allowResize:!0,primary:!0},{property:"discount",dataIndex:"discount",label:this.$t("swag-bundle.list.columnDiscount"),inlineEdit:"number",allowResize:!0},{property:"discountType",dataIndex:"discountType",label:this.$t("swag-bundle.list.columnDiscountType"),allowResize:!0}]}},created(){this.repository=this.repositoryFactory.create("swag_bundle"),this.repository.search(new l,this.context).then(e=>{this.bundles=e})}});var i=n("5LBt"),o=n.n(i);const{Component:d,Mixin:u}=Shopware;d.register("swag-bundle-detail",{template:o.a,inject:["repositoryFactory","context"],mixins:[u.getByName("notification")],metaInfo(){return{title:this.$createTitle()}},data:()=>({bundle:null,isLoading:!1,processSuccess:!1,repository:null}),created(){this.repository=this.repositoryFactory.create("swag_bundle"),this.getBundle()},computed:{options(){return[{value:"absolute",name:this.$t("swag-bundle.detail.absoluteText")},{value:"percentage",name:this.$t("swag-bundle.detail.percentageText")}]}},methods:{getBundle(){this.repository.get(this.$route.params.id,this.context).then(e=>{this.bundle=e})},onClickSave(){this.isLoading=!0,this.repository.save(this.bundle,this.context).then(()=>{this.getBundle(),this.isLoading=!1,this.processSuccess=!0}).catch(e=>{this.isLoading=!1,this.createNotificationError({title:this.$t("swag-bundle.detail.errorTitle"),message:e})})},saveFinish(){this.processSuccess=!1}}});n("ZpdO");var r=n("S4sG"),c=n("5nAn");Shopware.Module.register("swag-bundle",{type:"plugin",name:"Bundle",title:"swag-bundle.general.mainMenuItemGeneral",description:"swag-bundle.general.descriptionTextModule",color:"#ff3d58",icon:"default-shopping-paper-bag-product",snippets:{"de-DE":r,"en-GB":c},routes:{list:{component:"swag-bundle-list",path:"list"},detail:{component:"swag-bundle-detail",path:"detail/:id",meta:{parentPath:"swag.bundle.list"}},create:{component:"swag-bundle-create",path:"create",meta:{parentPath:"swag.bundle.list"}}},navigation:[{label:"swag-bundle.general.mainMenuItemGeneral",color:"#ff3d58",path:"swag.bundle.list",icon:"default-shopping-paper-bag-product",position:100}]})}},[["e5q0","runtime"]]]);
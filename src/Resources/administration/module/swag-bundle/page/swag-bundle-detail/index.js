import template from './swag-bundle-detail.html.twig';

const { Component, Mixin } = Shopware;

Component.register('swag-bundle-detail', {
    template,

    inject: [
        'repositoryFactory',
        'context'
    ],

    mixins: [
        Mixin.getByName('notification')
    ],

    metaInfo() {
        return {
            title: this.$createTitle()
        };
    },

    data() {
        return {
            bundle: null,
            isLoading: false,
            processSuccess: false,
            repository: null
        };
    },


    created() {
        this.repository = this.repositoryFactory.create('swag_bundle');
        this.getBundle();
    },

    computed: {
        options() {
            return [
                { value: 'absolute', name: this.$t('swag-bundle.detail.absoluteText') },
                { value: 'percentage', name: this.$t('swag-bundle.detail.percentageText') }
            ];
        }
    },

    methods: {
        getBundle() {
            this.repository
                .get(this.$route.params.id, this.context)
                .then((entity) => {
                        this.bundle = entity;
                });
        },

        onClickSave() {
            this.isLoading = true;
            this.repository
                .save(this.bundle, this.context)
                .then(() => {
                    this.getBundle();
                    this.isLoading = false;
                    this.processSuccess = true
                }).catch((exception) => {
                    this.isLoading = false;
                    this.createNotificationError({
                        title: this.$t('swag-bundle.detail.errorTitle'),
                        message: exception
                    });
                });

        },

        saveFinish() {
            this.processSuccess = false;
        },

    }

});

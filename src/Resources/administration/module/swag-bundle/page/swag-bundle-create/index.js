const { Component } = Shopware;

Component.extend('swag-bundle-create', 'swag-bundle-detail', {
    methods: {
        getBundle() {
            this.bundle = this.repository.create(this.context);
        },

        onClickSave() {
            this.isLoading = true;

            this.repository
                .save(this.bundle, this.context)
                .then(() => {
                    this.isLoading = false;
                    this.$router.push({ name: 'swag.bundle.detail', params: { id: this.bundle.id } });
                }).catch((exception) => {
                    this.isLoading = false;
                    this.createNotificationError({
                        title: this.$t('swag-bundle.detail.errorTitle'),
                        message: exception
                    });
                });
        }
    }
});

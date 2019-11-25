import Controller from '@ember/controller';

export default Controller.extend({
    openSetting: false,
    openEditSetting: false,
    ID: "",
    editPageTitle: '',
    editAlias: '',
    editDescription: '',

    actions: {
        toggleSetting(gameId) {
            this.set("ID", gameId);
            this.toggleProperty('openSetting');
            this.set('openEditSetting', false)
        },
        toggleEditSetting(gameId) {
            this.toggleProperty("openSetting");
            this.toggleProperty('openEditSetting')
            let that = this
            this.store.findRecord('game', gameId).then((game) => {
                that.setProperties({
                    editPageTitle: game.pageTitle,
                    editAlias: game.alias,
                    editDescription: game.description
                })
            })
        },
        SaveEdit() {
            this.store.findRecord('game', this.ID).then((game) => {
                let title = this.editPageTitle
                let ali = this.editAlias
                let desc = this.editDescription
                game.setProperties({
                    pageTitle: title,
                    alias: ali,
                    description: desc
                })
                game.save();
            });
            this.send('toggleSetting', this.ID);
        }
    }
});
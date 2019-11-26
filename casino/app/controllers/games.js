import Controller from '@ember/controller';

export default Controller.extend({
    openSetting: false,
    openEditSetting: false,
    openCategories:false,
    postionX:'',
    postionY:'',
    mouseEvent:'',
    ID: "",
    editPageTitle: '',
    editAlias: '',
    editDescription: '',
    categoryValue:'',

    actions: {
        toggleSetting(gameId,event) {
          let width=window.innerWidth
          this.set("ID", gameId);
          this.toggleProperty('openSetting');
          if(!(width-event.pageX>=300)){
            this.setProperties({
              openEditSetting: false,
              postionX:event.pageY,
              postionY:event.pageX -310+(width-event.pageX),
              mouseEvent: event
            })
          }else{
            this.setProperties({
              openEditSetting: false,
              postionX:event.pageY,
              postionY:event.pageX,
              mouseEvent: event
            })
          }
        },
        goBack(){
          this.toggleProperty('openEditSetting')
          this.toggleProperty('openSetting')
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
            this.send('toggleSetting', this.ID, this.mouseEvent);
        },

        toggleEditCategories(){
          this.toggleProperty("openSetting");
          this.toggleProperty('openCategories')
          
        }
    }
});

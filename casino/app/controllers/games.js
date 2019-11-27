import Controller from '@ember/controller';
import { A } from '@ember/array';
import { computed } from '@ember/object';
import { sort } from '@ember/object/computed';

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
    arrayCategory: A(),
    searchTerm: '',
    sortBy:'titleAsc',

    sortProperties: computed('sortBy', function() {
      let options = {
        titleDesc: ['pageTitle:desc'],
        titleAsc: ['pageTitle:asc']
      };
      return options[this.sortBy];
    }),

    sortedGames: sort('matchingGames', 'sortProperties'),

    matchingGames:computed('model.@each.pageTitle','searchTerm',function(){
        // if(!searchTerm){
        //   return this.model
        // }else{
          let search = this.searchTerm.toLowerCase();
          return this.model.filter((game) => {
            return game.pageTitle.toLowerCase().includes(search);
          });
        // }
      }
    ),

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
        },
        SaveCategory(){
          this.store.findRecord('game', this.ID).then((game) => {
              let cat = this.arrayCategory
              game.setProperties({
                  category: cat
              })
              game.save();
          });
          this.send('toggleEditCategories');
        },
        addCategories(item,event){
          if(event.target.checked){
            this.arrayCategory.push(item)
          }else{
            let index = this.arrayCategory.indexOf(item)
            this.arrayCategory.splice(index,1)
          }
        }
    }
});

import Component from '@ember/component';
import { computed } from '@ember/object';


export default Component.extend({
   tagName: "section",
   limit:20,

   paginatedItems: computed('offset', function(){
     debugger
     return this.model.slice(this.limit*this.offset);
   }),
});

import DS from 'ember-data';
const { Model, attr } = DS;

export default Model.extend({
  name:attr(),
  img:attr(),
  pageTitle:attr(),
  alias:attr(),
  description:attr(),
  category:attr(),
});

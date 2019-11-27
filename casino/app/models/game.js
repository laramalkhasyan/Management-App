import DS from 'ember-data';
const { Model, attr, hasMany} = DS;

export default Model.extend({
  img:attr(),
  pageTitle:attr(),
  alias:attr(),
  description:attr(),
  categories:hasMany(),
});

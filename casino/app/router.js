import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('games'
  // , function () {
  //   this.route('categories');
  // }
);
  this.route('categories');
});

export default Router;

import Ember from 'ember';
import config from './config/environment';
import googlePageview from './mixins/google-pageview';

const Router = Ember.Router.extend(googlePageview, {
  location: config.locationType
});

Router.map(function() {
  this.route('show-notes', { path: ':id' });
  this.route('about');
  this.route('episodes');
  this.route('episode', { path: ':number' });
  this.route('404');
});

export default Router;

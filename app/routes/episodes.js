import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Episodes',
  model() {
    return this.store.findAll('episode');
  }
});

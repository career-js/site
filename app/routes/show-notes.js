import Ember from 'ember';

export default Ember.Route.extend({
  titleToken(model) {
    return 'Show Notes';
  },
  model(params) {
    console.log(params.id);
  }
});

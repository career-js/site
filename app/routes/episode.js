import Ember from 'ember';

export default Ember.Route.extend({
  titleToken(model) {
    if (model) {
      return model.get('title');
    }
  },
  model(params)  {
    return this.store.findAll('episode').then((episodes) => {
      return episodes.findBy('number', parseInt(params.number));
    });
  },
  afterModel(model) {
    if (!model) {
      this.transitionTo('404');
    }
  }
});

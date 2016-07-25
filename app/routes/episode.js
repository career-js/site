import Ember from 'ember';

export default Ember.Route.extend({
  titleToken(model) {
    if (model) {
      return model.get('title');
    }
  },
  model(params)  {
    return this.store.findAll('episode').then((episodes) => {
      console.log('sdf');
      return episodes.findBy('id', params.id);
    });
  },
  afterModel(model) {
    console.log('afterMOdle', model);
    if (!model) {
      this.transitionTo('404');
    }
  }
});

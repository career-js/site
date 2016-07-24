import Ember from 'ember';

export default Ember.Route.extend({
  titleToken(model) {
    console.log(model)
    return model.get('title');
  },
  model(params)  {
    return this.store.findAll('episode').then((episodes) => {
      return episodes.findBy('id', params.id);
    });
  }
});

import Ember from 'ember';

export default Ember.Controller.extend({
  last4Episodes: Ember.computed('model', function() {
    let episodes = [];
    for (let i = 0; i < this.get('model.length'); i++) {
      if (i <= 3) {
        episodes.push(this.get('model').objectAt(i));
      } else {
        break;
      }
    }

    return episodes;
  }),
  actions: {
    viewEpisode(id) {
      this.transitionToRoute('episode', id);
    }
  }
});

import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  title: attr('string'),
  description: attr('string'),
  simplecastID: attr('string'),
  image: attr('string'),
  releaseDate: attr('string'),
  iframeURL: Ember.computed(function() {
    return `https://simplecast.com/e/${this.get('simplecastID')}?style=light`;
  })
});

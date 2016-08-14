import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  title: attr('string'),
  description: attr('string'),
  images: attr(),
  number: attr('number'),
  releaseDate: attr('string'),
  showNotes: attr('string'),
  iframeURL: Ember.computed(function() {
    return `https://simplecast.com/e/${this.get('id')}?style=light`;
  })
});

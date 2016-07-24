import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  title: attr('string'),
  description: attr('string'),
  simplecastID: attr('string'),
  image: attr('string'),
  releaseDate: attr('string'),
  showNotes: belongsTo(),
  iframeURL: Ember.computed(function() {
    return `https://simplecast.com/e/${this.get('simplecastID')}?style=light`;
  })
});

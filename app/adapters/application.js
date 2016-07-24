import RESTAdapter from 'ember-data/adapters/rest';

export default RESTAdapter.extend({
  urlForFindAll() {
    return 'episodes.json';
  }
});

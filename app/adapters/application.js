import RESTAdapter from 'ember-data/adapters/rest';

export default RESTAdapter.extend({
  urlForFindAll(modelName, snapshot) {
    return 'episodes.json';
  }
});

import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  normalize(modelClass, resourceHash, prop) {
    resourceHash.number = resourceHash.number - 1;
    return this._super(...arguments);
  },
  attrs: {
    releaseDate: 'published_at',
    showNotes: 'long_description'
  }
});

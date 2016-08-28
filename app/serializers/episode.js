import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    payload = Object.keys(payload).map((key) => {
      return payload[key];
    });
    return this._super(store, primaryModelClass, payload, id, requestType);
  },
  normalize(modelClass, resourceHash, prop) {
    resourceHash.number = resourceHash.number - 1;
    return this._super(...arguments);
  },
  attrs: {
    releaseDate: 'published_at',
    showNotes: 'long_description'
  }
});

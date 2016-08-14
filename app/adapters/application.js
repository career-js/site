import RESTAdapter from 'ember-data/adapters/rest';
import ENV from 'site/config/environment';

export default RESTAdapter.extend({
  host: ENV.API_ENDPOINT,
  namespace: 'api',
  shouldBackgroundReloadAll(store, snapshotRecordArray) {
    return false;
  }
});

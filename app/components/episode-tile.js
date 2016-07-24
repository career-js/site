import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['episode'],
  click() {
    this.get('onClick')();
  }
});

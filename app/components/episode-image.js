import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'img',
  classNames: ['episode-image'],
  attributeBindings: ['customSrc:src', 'customAlt:alt'],
  customAlt: 'Career.js',
  customSrc: '/careerjs.jpg',
  init() {
    this._super(...arguments);
    if (this.get('src')) {
      this.set('customSrc', `episode-images/${this.get('src')}`);
    }

    if (this.get('alt')) {
      this.set('customAlt', this.get('alt'));
    }
  }
});

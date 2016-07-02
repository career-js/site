import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('subscribe-form', 'Integration | Component | subscribe form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{subscribe-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#subscribe-form}}
      template block text
    {{/subscribe-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

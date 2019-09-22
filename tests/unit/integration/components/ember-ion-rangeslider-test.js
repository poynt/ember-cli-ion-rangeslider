import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ember-ion-rangeslider', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(1);

    // creates the component instance
    await render(hbs`<EmberIonRangeslider min=2 max=9 to=toValue from=fromValue/>`);
    assert.equal(this.element.querySelector('input').getAttribute('min'), '2');
  });
});


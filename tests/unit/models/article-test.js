import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('article', {
  // Specify the other units that are required for this test.
  needs: ['model:friend']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

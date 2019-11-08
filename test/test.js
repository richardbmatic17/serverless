var assert = require('assert');
describe('Array', function() {
  describe('Not in array', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
  describe('In array', function() {
    it('should return 0 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(1), 0);
    });
  });
});


describe('Not in array', function() {
  it('should return -1 when the value is not present', function() {
    assert.equal([1, 2, 3].indexOf(4), -1);
  });
});
describe('In array', function() {
  it('should return 0 when the value is not present', function() {
    assert.equal([1, 2, 3].indexOf(1), 0);
  });
});

describe('test ', () => {
  it('blabla', () => {
    assert.equal([1, 2, 3].indexOf(1), 0);
  });
});

import test from 'tape';

test('What are you testing?', assert => {
  const msg = 'what should it do?'

  const actual = 'what was the output?';
  const expected = 'what was the expected output?';

  assert.same(actual, expected, msg);
  assert.end();
});

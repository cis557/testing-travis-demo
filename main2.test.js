const main2 = require('./main2');

test('multiply 3 and 4 should equal 12', () => {
  expect(main2.mul(3, 4)).toBe(12);
});

test('divide 12 and 4 should equal 3', () => {
  expect(main2.div(12, 4)).toBe(3);
});

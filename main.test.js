import { sum, subtract } from './main';

test('add 3 + 4 should equal 7', () => {
  expect(sum(3, 4)).toBe(7);
});

test('subtract 3 - 4 should equal -1', () => {
  expect(subtract(3, 4)).toBe(-1);
});

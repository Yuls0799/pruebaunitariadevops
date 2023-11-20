const sumar = require('../index');

test('sumar 1 + 2 es igual a 3', () => {
  expect(sumar(1, 2)).toBe(3);
});

test('sumar 0 + 0 es igual a 0', () => {
  expect(sumar(0, 0)).toBe(0);
});

const { Square, Circle, Triangle } = require('./shapes');

//Render methods for our shapes to test proper function
test('Square render() method should include the correct rectangle SVG element with the given shape color', () => {
  const shape = new Square();
  shape.setColor('red');
  const renderedSvg = shape.render();
  expect(renderedSvg).toContain('<rect');
  expect(renderedSvg).toContain('fill="red"');
});

test('Circle render() method should include the correct circle SVG element with the given shape color', () => {
  const shape = new Circle();
  shape.setColor('green');
  const renderedSvg = shape.render();
  expect(renderedSvg).toContain('<circle');
  expect(renderedSvg).toContain('fill="green"');
});

test('Triangle render() method should include the correct polygon SVG element with the given shape color', () => {
  const shape = new Triangle();
  shape.setColor('blue');
  const renderedSvg = shape.render();
  expect(renderedSvg).toContain('<polygon');
  expect(renderedSvg).toContain('fill="blue"');
});
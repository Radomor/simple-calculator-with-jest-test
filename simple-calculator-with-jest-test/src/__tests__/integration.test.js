const { assert } = require('console');
const fs = require('fs');

const calc = fs.readFileSync(`${__dirname}/../www/index.html`, 'utf8');
document.body.innerHTML = calc;

'use strict';

function clicked(buttons) {
  buttons.forEach((element) => {
    document.getElementById(`${element}`).click();
  });
}
test('integration test: 1 + 0.5 - 3 * 2 / 3 =', () => {
  // given
  const Complex = ['one', 'plus', 'zero', 'decimal', 'five', 'minus', 'three', 'multiply', 'two', 'divide', 'three', 'equals'];
  require('../www/code.js');
  // when
  clicked(Complex);
  // then
  expect(document.getElementById('display').textContent).toEqual('-0.5');
});

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
test('division by zero', () => {
  // given
  const divByZero = ['one', 'divide', 'zero', 'equals'];
  require('../www/code.js');
  // when
  clicked(divByZero);
  // then
  expect(document.getElementById('display').textContent).toEqual('Infinity');
});

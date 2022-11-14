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

test('multiply two numbers', () => {
  // given
  const multiplyThreeAndFour = ['three', 'multiply', 'four', 'equals'];
  require('../www/code.js');
  // when
  clicked(multiplyThreeAndFour);
  // then
  expect(document.getElementById('display').textContent).toEqual('12');
});

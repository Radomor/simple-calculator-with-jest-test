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
test('displaing recurring decimal', () => {
  // given
  const OneThird = ['one', 'divide', 'three', 'equals'];
  require('../www/code.js');
  // when
  clicked(OneThird);
  // then
  expect(document.getElementById('display').textContent).toMatch('0.3333333333333333');
});

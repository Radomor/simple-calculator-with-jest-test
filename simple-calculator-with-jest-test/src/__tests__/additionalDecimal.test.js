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
test('adding additional decimal', () => {
  // given
  const TwoDecimals = ['one', 'decimal', 'zero', 'decimal', 'two', 'equals'];
  require('../www/code.js');
  // when
  clicked(TwoDecimals);
  // then
  expect(document.getElementById('display').textContent).toEqual('1.02');
});

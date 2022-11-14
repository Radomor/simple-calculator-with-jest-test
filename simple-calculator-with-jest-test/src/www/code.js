// zmienne dla klawiszy numerycznych
const oneBtn = document.getElementById('one');
const twoBtn = document.getElementById('two');
const threeBtn = document.getElementById('three');
const fourBtn = document.getElementById('four');
const fiveBtn = document.getElementById('five');
const sixBtn = document.getElementById('six');
const sevenBtn = document.getElementById('seven');
const eightBtn = document.getElementById('eight');
const nineBtn = document.getElementById('nine');
const zeroBtn = document.getElementById('zero');

const numsBtn = document.getElementsByClassName('numbers');

// zmienne dla klawiszy funkcyjnych
const decimalBtn = document.getElementById('decimal');
const clearBtn = document.getElementById('clear');
const backspaceBtn = document.getElementById('backspace');
const displayValue = document.getElementById('display');

const operatorBtn = document.getElementsByClassName('operators');

// zmienne pomocnicze
let display = '';
let pendingVal;
let evalArray = [];

// funkcja czysci okienko, wyświetla wartości klawiszy numerycznych
const displayNewValue = (clickObject) => {
  const btnTxt = clickObject.target.textContent;

  if (display === '0') {
    display = '';
  }

  display += btnTxt;
  displayValue.textContent = display;
};

for (let i = 0; i < numsBtn.length; i++) {
  numsBtn[i].addEventListener('click', displayNewValue, false);
}

// funckja do kalkulacji, liczy przez eval() - sprowadza wartości do Arraya i zlicza wynik po naciśnieciu '='. Powinna dawać poprwane wyniki do kolejności działania
const calculation = (clickObj) => {
  const operator = clickObj.target.textContent;

  switch (operator) {
    case '+':
      pendingVal = display;
      display = '0';
      displayValue.textContent = display;
      evalArray.push(pendingVal);
      evalArray.push('+');
      break;

    case '-':
      pendingVal = display;
      display = '0';
      displayValue.textContent = display;
      evalArray.push(pendingVal);
      evalArray.push('-');
      break;

    case 'x':
      pendingVal = display;
      display = '0';
      displayValue.textContent = display;
      evalArray.push(pendingVal);
      evalArray.push('*');
      break;

    case '/':
      pendingVal = display;
      display = '0';
      displayValue.textContent = display;
      evalArray.push(pendingVal);
      evalArray.push('/');
      break;

    case '=':
      evalArray.push(display);
      const evaluation = eval(evalArray.join(' '));
      display = `${evaluation}`;
      displayValue.textContent = display;
      evalArray = [];
  }
};
for (let i = 0; i < operatorBtn.length; i++) {
  operatorBtn[i].addEventListener('click', calculation, false);
}

// funkcja dla backspace
backspaceBtn.onclick = () => {
  const lengthOfDisplayVal = display.length;
  display = display.slice(0, lengthOfDisplayVal - 1);

  if (display === '') display = '0';

  displayValue.textContent = display;
};
// funkcja na kasowanie wyniku
clearBtn.onclick = () => {
  display = '0';
  pendingVal = undefined;
  evalArray = [];
  displayValue.textContent = display;
};
// funkcja, dla niepowielania kropki
decimalBtn.onclick = () => {
  if (!display.includes('.')) display = `${display}.`;

  displayValue.textContent = display;
};

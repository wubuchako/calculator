const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');



function sendNumberValue(number) {
  // If current display value is 0, replace it, if not add number
  const displayValue = calculatorDisplay.textContent;
  calculatorDisplay.textContent = displayValue === "0" ? number : displayValue + number;
}

function addDecimal(){
  // If no decimal, add one
  if(!calculatorDisplay.textContent.includes('.')){
    calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
  }
}
let firstValue = 0;
let operatorValue = '';
let awaitingNextValue = false;

function useOperator(operator){
  const currentValue = Number(calculatorDisplay.textContent);
  // Assign firstValue if no value
  if(!firstValue){
    firstValue = currentValue;
  } else {
    console.log('currentValue', currentValue);
  }
  // Ready for next value, store operator
  awaitingNextValue = true;
  operatorValue = operator;
  console.log('firstValue', firstValue);
  console.log('operator', operatorValue);
}

// Add Event Listeners for numbers, operators, decimal buttons
inputBtns.forEach((inputBtn) => {
 if(inputBtn.classList.length === 0){
   inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
 } else if(inputBtn.classList.contains('operator')){
  inputBtn.addEventListener('click', ()=> useOperator(inputBtn.value));
 } else if(inputBtn.classList.contains('decimal')){
  inputBtn.addEventListener('click', () => addDecimal);
 }
});

// Reset all values, display 
function resetAll(){
   firstValue = 0;
   operatorValue = '';
   awaitingNextValue = false;
  calculatorDisplay.textContent = '0';
}

// Event Listener
clearBtn.addEventListener('click', resetAll);
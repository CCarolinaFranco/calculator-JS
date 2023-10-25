"use strict";

console.log("holis");


const btns =document.querySelector('.js-btns')
const input1 = document.querySelector('.js-input1');
const input2 = document.querySelector('.js-input2');
const result = document.querySelector('.js-result');

function handleClickSuma(e){
  console.log("hacerclick")
  const input1Value = parseFloat(input1.value);
  const input2Value = parseFloat(input2.value);

  const operation = e.target.id;
  let resultado;

  if (operation === "suma"){
    resultado = input1Value + input2Value;
  }
  else if (operation === "resta"){
     resultado = input1Value - input2Value;
  }
  else if (operation === "multiplicar"){
     resultado = input1Value * input2Value;
  }
  else if (operation === "dividir"){
     resultado = input1Value / input2Value;
  }

  result.innerHTML = resultado;
}




btns.addEventListener('click', handleClickSuma);

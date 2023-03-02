function summIfElse() {
  const action = prompt('Что ты хочешь? (add, sub, mult, div)');
  const firstNum = parseInt(prompt('Первое число'));
  const secondNum = parseInt(prompt('Второе число'));

  if (action === 'add') {
    console.log(`${firstNum} + ${secondNum} = ${firstNum + secondNum}`);
  } else if (action === 'sub') {
    console.log(`${firstNum} - ${secondNum} = ${firstNum - secondNum}`);
  } else if (action === 'mult') {
    console.log(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`);
  } else if (action === 'div') {
    console.log(`${firstNum} / ${secondNum} = ${firstNum / secondNum}`);
  }
}
summIfElse();
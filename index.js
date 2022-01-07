//Iteration#1

/*1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click*/

const newBtn = document.createElement('button');
const btnText = document.createTextNode('Pulsar aquí');
newBtn.appendChild(btnText);

newBtn.setAttribute('id', 'btnToClick');

document.body.appendChild(newBtn);

newBtn.addEventListener('click', e => console.log(e));


//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const inputs = document.querySelectorAll('input');

inputs.forEach( elem => elem.addEventListener('focus', e => console.log(e.target.value)));




//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

inputs.forEach( elem => elem.addEventListener('input', e => console.log(e.target.value)));

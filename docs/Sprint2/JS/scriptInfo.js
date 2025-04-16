const button1 = document.getElementById('button1');
const div1 = document.getElementById('div1');

const button2 = document.getElementById('button2');
const div2 = document.getElementById('div2');

const button3 = document.getElementById('button3');
const div3 = document.getElementById('div3');

const button4 = document.getElementById('button4');
const div4 = document.getElementById('div4');

const button5 = document.getElementById('button5');
const div5 = document.getElementById('div5');

const button6 = document.getElementById('button6');
const div6 = document.getElementById('div6');

const button7 = document.getElementById('button7');
const div7 = document.getElementById('div7');

const button8 = document.getElementById('button8');
const div8 = document.getElementById('div8');


const active = function (button, div) {
  button.addEventListener('click', function () {
    if (button.innerHTML == 'Ver mas') {
      button.innerHTML = 'Ver menos'
      div.style.display = 'block'
    } else {
      button.innerHTML = 'Ver mas'
      div.style.display = 'none'
    }
  });
}

active(button1, div1);
active(button2, div2);
active(button3, div3);
active(button4, div4);
active(button5, div5);
active(button6, div6);
active(button7, div7);
active(button8, div8);
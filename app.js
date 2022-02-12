const container = document.querySelector('.container');
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('result').addEventListener('click', () => { change() });
})

function change() {
  let R = document.getElementById('R').value;
  let G = document.getElementById('G').value;
  let B = document.getElementById('B').value;
  let A = document.getElementById('A').value;

  let RGB = [R, G, B, A];
  let out = ''
  let out02 = '';

  //  Example In: 0, 36, 255
  //  Example out: #0024ff
  
  let conunt = 0
  let arr = [];
  let hexd = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

  for (let z = 0; z < RGB.length; z++) {
    if (RGB[3] == '') RGB[3] = 255
    if (RGB[z] == undefined) RGB[z] = 0
    
    if (RGB[z] == 0) {
      out = '00';
      conunt = 0
    }
    for (; RGB[z] > 0; RGB[z] -= hexd.length) {
      if (RGB[z] > hexd.length) {
        arr.push(conunt);
        out = hexd[arr.length];
      } else {
        out += hexd[RGB[z]].toString()
        arr = []

      }
      conunt++
    }
    out02 += out;
    conunt = 0
  } //main for

  document.getElementById('hex').innerHTML = '#'+out02;
  container.style.background = '#' + out02;
}
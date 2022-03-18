const container = document.querySelector('.container');
let R = '00'
let G = '00'
let B = '00'
let A = 'FF'
document.addEventListener('DOMContentLoaded', () => {
  comprobaton()
})

function change(name, value) {
  valor = parseInt(value)
  let hexd = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let data = ''
  let a = 0
if (value == undefined){
  data = '00'
}else{
  if (value <= hexd.length - 1) {
    data = '0'+hexd[value]
  }else {
    while (valor >= 16) {
      if (valor >= 16) {
        a++
        valor -= 16
      }
    }
    data = hexd[a].toString() + hexd[valor].toString()
  }
}

  switch (name) {
    case 'R':
      R = data
      break;
    case 'G':
      G = data
      break;
    case 'B':
      B = data
      break;
    case 'A':
      A = data
      break;
      default:
      break;
  }
  if (R === '00' && G === '00' && B === '00' && A == 'FF' ) 
    A = '00'
  else if (A == '00')
    A = 'FF'
  else if (A != '00' && A != 'FF')
    A = A

  document.getElementById('hex').innerHTML = '#'+R+G+B+A;
  container.style.background = '#' + R+G+B+A;

}

function comprobaton() {
  const inputs = document.querySelectorAll('input')
  inputs.forEach(input => {
    input.addEventListener('keyup', (e) => {
      if (e.target.value > 255 || e.target.value[0] == 0 ) {
        e.target.style.border = '1px solid red';
        e.target.style.background = 'red';
      } else if (e.target.value == '') {
        change(e.target.id, undefined)
      } else {
        e.target.style.border = '1px';
        e.target.style.background = 'green';
        change(e.target.id, e.target.value)
      }

    })
  });
}
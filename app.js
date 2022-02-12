  const container = document.querySelector('.container');
document.addEventListener('DOMContentLoaded',()=>{
    
        change();
})

function change(){
    let R = 0
    let G = 36
    let B = 255

    let salida = ''

  //  Ejemplo de entrada: 0, 36, 255
  //  Ejemplo de salida: #0024ff
let contador = 0

    let hexd = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F' ];
    
    for(; G > 0; G -= hexd.length){
            console.warn(G)
         for(let i = 0; i < hexd.length; i++){
            if(G == hexd.length)
            console.error('there')
        } 
        contador++
    }

console.log(salida)

    


    container.style.background= 'lightblue'
}
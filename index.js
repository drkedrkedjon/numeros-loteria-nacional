document.querySelector('#btn').addEventListener('click', generarNumeros)
const apuesta = document.querySelector('#apuesta')
const reintegro = document.querySelector('#reintegro')

function generarNumeros() {
  apuesta.innerHTML = ''  // Limpiamos el DOM
  const randomNum = () => Math.floor(Math.random() * 50) + 1 // Num Aleatorio
  const loteriaNum = [] // Guardamos numeros aqui
  loteriaNum.push(randomNum()) // Primer numero
  
  do {
    // Generamos el siguiente numero, lo comparamos con los existentes en el array, y si no es el duplicasdo lo metemos dentro 
    let actualNum = randomNum()
    let duplicado = loteriaNum.find( num => num === actualNum )
    !duplicado && loteriaNum.push(actualNum)
  } while (loteriaNum.length < 6)

  loteriaNum.sort( (a, b) => a - b ) // Ordenar numeros
  loteriaNum.forEach( num => { // Render numeros en el DOM
    apuesta.innerHTML += `
    <div class="numero flex"><p>${num}</p></div>
    `
  } )
  // Generar y render el reintegro.
  reintegro.innerHTML = `<div class="numero flex"><p>${Math.floor(Math.random() * 9) + 1}</p></div>`
}


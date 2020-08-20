//testes

x = [10,11,9,9]


console.log(x)


const ordenar = require('./insertion')
var y = ordenar.ordernar(x)
console.log('X- Ordenado:'+y)

const somaArray = require('./somaArray')
var somandoArray = somaArray.somandoArray(y)
console.log('Soma de x:'+somandoArray)

const media = require('./media')
var amedia = media.media(x)
console.log('Media de x:'+amedia)

const moda = require('./moda')
var Amoda = moda.moda(x)
console.log('Moda de x:'+Amoda)

const mediana = require('./mediana')
var meda = mediana.mediana(x)
console.log('Mediana de x:'+meda)



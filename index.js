//testes

x = [10,11,9,9]


console.log(x)


const ordenar = require('./insertion')
var y = ordenar.ordernar(x)
console.log(y)

const somaArray = require('./somaArray')
var somandoArray = somaArray.somandoArray(y)
console.log(somandoArray)

const media = require('./media')
var amedia = media.media([5,5,5,5,6])
console.log(amedia)

const moda = require('./moda')
var Amoda = moda.moda(x)
console.log(Amoda)



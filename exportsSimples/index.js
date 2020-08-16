//testes

x = [10,11,9]


console.log(x)


const ordenar = require('./insertion')
var y = ordenar.ordernar(x)
console.log(y)

const somaArray = require('./somaArray')
var somandoArray = somaArray.somandoArray(y)
console.log(somandoArray)

const media = somandoArray/x.length
console.log(media)

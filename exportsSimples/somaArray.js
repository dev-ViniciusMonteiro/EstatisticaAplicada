//tudo ok!!!
function somaArray(array){
    var numero = 0;
    for(i=0;i<array.length;i++){
        numero = array[i]+numero;
    }
    return numero
}

module.exports={
    somandoArray(z){
        return somaArray(z)
    }
}

// const somaArray = require('./somaArray')
// var somandoArray = somaArray.somandoArray(media.x)
// console.log(somandoArray)
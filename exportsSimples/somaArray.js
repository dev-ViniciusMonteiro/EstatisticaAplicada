//tudo ok!!!
module.exports={
    somaArray(array){
        var numero = 0;
        for(i=0;i<array.length;i++){
            numero = array[i]+numero;
        }
        return numero
    }
}


// const somaArray = require('./somaArray')
// var somandoArray = somaArray.somandoArray(media.x)
// console.log(somandoArray)
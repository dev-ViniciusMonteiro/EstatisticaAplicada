//tudo ok!!!
const ordenar = require('./insertion')

module.exports={
    mediana(array){
        return mediana(array)
    }
}

function mediana(array){
    ordenado = ordenar.ordernar(array)
    par = conta(ordenado)
    final = []
    if(par==1){
        final.push(ordenado[(ordenado.length/2)-1])
        final.push(ordenado[(ordenado.length/2)])
        return final
    }else{
        final.push(ordenado[(ordenado.length-1)/2])
        return final
    }
    
}

function conta(array){
    if((array.length%2) == 0 ){
        return 1
    }else{
        return 0
    }
}



// const mediana = require('./mediana')
// var meda = mediana.mediana(x)
// console.log(meda)


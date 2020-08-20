//tudo ok!!!
const somaArray = require('./somaArray')

module.exports = { 
    media(x){
        return mediA(x)
    }
}


function mediA(x){
    return (somaArray.somandoArray(x)/x.length)
}






// const media = require('./media')
// var amedia = media.media([5,5,5,5,6])
// console.log(amedia)







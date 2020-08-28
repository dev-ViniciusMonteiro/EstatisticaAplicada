//tudo ok!!!
module.exports = { 
    merge(x){
    return mergeSort(x) //devido a recursao da direita e da esquerda temos que chamar a funcao para se alto chamar(callback)!!!
}
}

function mergeSort(array) {
    if (array.length === 1) {//se so tiver 1 numero
      return array//retorna ele (vai retornar no meio da funcao ali em baixo que divide no meio)
    } else {
      var split = Math.floor(array.length/2)//pega o ponto do meio do vetor
      var left = array.slice(0, split)//cria um vetor a esquerda
      var right = array.slice(split)//cria um vetor a direita
  
      left = mergeSort(left)//chama cada parte dinovo(metade) - percorre o array sem for
      right = mergeSort(right)
      console.log(left + ' esquerda  ' + right + ' direta')
  
      var sorted = []//cria um novo array para salvar os numeros
      while (left.length > 0 || right.length > 0) {//se tamanho maior que 0, ja tem mais de um numero no array
        if (right.length === 0 || left[0] <= right[0]) {//se esquerda menor ou igual a direita
          sorted.push(left.shift())//adiciona o da esquerda
        } else {
          sorted.push(right.shift())//adiciona o da direita
        }
      }
  
      return sorted//retorna o novo array criado
    }
  };
  
  // Tests:
//   var array1 = [9,4]
//    console.log('array final com 2 numeros: ' + mergeSort(array1))
//    console.log('__________________________________________')


//   var array2 = [3,6,9,2]
//    console.log('array final com 4 numeros: ' + mergeSort(array2))
//    console.log('__________________________________________')

//    var array3 = [9,4,5,6,7,3,7,9]
//    console.log('array final com 2 numeros: ' + mergeSort(array3))

   /*var x = () => {
     var n = []
     for(i=0;i<10000;i++){
       n.push(i)
     }
     return n
    }
    mergeSort(x())*/
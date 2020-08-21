//tudo ok!!!
module.exports={
      insertion(vet) {//recebe o array , inicio e o fim
         for(var i = 1;i<vet.length;i++){//Varre o vetor da segunda posição em diante;
            var posicao = i//variavel da posicao inicial(2 posicao)
            while(posicao>0&&vet[posicao]<vet[posicao-1]){//Compara o valor que está sendo analisado com o valor anterior; 
            troca(vet,posicao,posicao-1)//troca as posicoes ;caso seja menor, troca os dois valores e compara novamente com o anterior.
            posicao--//volta para a posicao inicial se trocou a posicao(estava na -1)
            }
         }//caso seja maior, segue a análise para o próximo elemento não analisado do vetor.
         return vet//retorna um vetor!!!
         
      }
}
      function troca(vet,ini,fim){
         const x = vet[ini]
         const y = vet[fim]
         vet[ini] = y
         vet[fim] = x
      }

   

/*
const ordenar2 = require('./insertion')//requisiscao da pasta
var y = ordenar2.insertion(media.x)//chama a requisicao e a funcao de ordernar que recebe um array e o ordena
console.log(y)
*/ 
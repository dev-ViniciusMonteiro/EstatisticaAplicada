//tudo ok!!
module.exports = { 
    menorDistanciaDoisPontos(array){//par = x ; impar = y
    var distance = 0 
    var maior = 9**9**9**9
    for(x=0;x<array.length;x=x+2){//xa = [0] ya = [1] 
        for(y=x+2;y<array.length;y=y+2){//xb = [2] yb=[3]
            distance = Math.sqrt(((array[y]-array[x])**2) + ((array[y+1]-array[x+1])**2))//Dab=Raiz(xb-xa)**2 - (yb-ya)**2
            if(distance<maior)
                maior = distance
        }
    }
    return maior;
    }
}



//             xa ya xb yb 
// var arrayyy = [-3,-11,2,1]
// console.log(distanciaDoisPontos(arrayyy))

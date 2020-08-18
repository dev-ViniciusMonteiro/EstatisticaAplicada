//tudo ok!!!
module.exports = { 
    moda(x){
        return mode(x)
    }
}


function mode(numbers) {
    var modes = [] //guardara o arrai final com os numeros mais repetidos
    var count = [] //contara quantas vezes o numero analisado ja apareceu
    var number//guarda o numero analisado
    var maxIndex = 0 //guardara o maior numero de repeticoes
 
    for (i = 0; i < numbers.length; i++) {//faz um loop pelo array numero a numero
        number = numbers[i];// salva em number o numero analisado
        count[number] = (count[number] || 0) + 1; //a posicao de acordo com o numero recebera 0 caso n tenha nada ou recebera o valor nela e apos isso soma 1
        //ex: [3,2,5] o primeiro number dentro do for recebera 3 e a posicao de numero 3 recebera o valor 0 e apos isso acrecenta 1 entao o conte tera 3 lugares vazios e o 4 tera o numero 1
        if (count[number] > maxIndex) {//se o valor da casa do numero analisado for maior que a ultima repeticao salva como maior numero de repeticao
            maxIndex = count[number];//recebe o maior numero de repeticoes
        }
    }
 
    for (i in count)//loop analisando todos os intens de count
        if (count.hasOwnProperty(i)) {//hasOwnProperty -> se houver algo dentro do count na posicao i ele retorna true entrando no if se nao ele sai
            if (count[i] === maxIndex) {// se o numero da posicao analizada 'e igual o maior numero de repeticoes
                //modes.push(Number(i));//Adiciona em modes o valor i e forca ele entrar como number -> caso entre uma string ira aparecer NaN(not a number)
                modes.push(i);//permite que a comparacao seja feita em tambem em strings
            }
        }
 
    return modes;//retorna o array final
}


//console.log(mode([ 5, 4, 1, 2, 3,'cu','co','lo']))


// const moda = require('./moda')
// var Amoda = moda.moda(x)
// console.log(Amoda)
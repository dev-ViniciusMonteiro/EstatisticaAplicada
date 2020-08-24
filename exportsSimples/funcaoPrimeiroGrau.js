
module.exports={
    primeiroGrausY(a,b,y){
        var conta1=y-b;
        var x=conta1/a;
        return x;
    },
    primeiroGrausX(a,b,x){
        var y = (a*x)+b
        return y
    }
}
// console.log(primeiroGrausY(10,100,1000))  /y=10x+1000 y=1000
// console.log(primeiroGrausX(14,2,5)) //y=14x+2  x=5
 //console.log(primeiroGrausY(3,5,20))  
 //y = – 7x + 7  y=0

 function pGrauUm(str){
     var strSplit = str.split(' ')//cria um array com cada parametro como string
     if(strSplit.length>7){//se estiver muito coisa na string
         return console.log('erro - Excesso de letras e numeros use y = x . a + b ou y = x . -a + -b')
     }else
     if(strSplit.length<=1){//se nao tiver nada na conta
        return console.log('erro = tamanho 0')
    }else
    if((strSplit[0]=='y')||(strSplit[0]=='y')){//se y n for numero 
        console.log('y nao e numero')
    }else
    if(isNaN(strSplit[0])== false){//se y atribuido a um valor
        if(strSplit[3]=='*'){// se a conta for com Vezes
            if((strSplit.length==5)||(strSplit.length==6)){//se nao tiver o final da conta (b)
                var y = parseInt(strSplit[0])
                var b = 0
                var a = parseInt(strSplit[2])
                var contaYzero = y-b
                contaYzero = contaYzero/a
                return contaYzero
            }else{ // se a conta for completa com todos argumentos 
                var y = parseInt(strSplit[0])
                var b = parseInt(strSplit[6])
                var a = parseInt(strSplit[2])
                var contaYzero = y-b
                contaYzero = contaYzero/a
                return contaYzero
            }   
        }
        if(strSplit[3]=='/'){//se a conta foir com Dividido
            if((strSplit.length==5)||(strSplit.length==6)){//se nao tiver o final da conta (b)
                var y = parseInt(strSplit[0])
                var b = 0
                var a = parseInt(strSplit[2])
                return conta1(a,b,y)
            }else{// se a conta for completa com todos argumentos 
                var y = parseInt(strSplit[0])
                var b = parseInt(strSplit[6])
                var a = parseInt(strSplit[2])
                return conta1(a,b,y)
            } 
        }   
    }
    else{
        return console.log('erro y nao atribuido')
    }


    return strSplit
}

function conta1(a,b,y){
    var contaYzero = y-b
    contaYzero = contaYzero*a
    return contaYzero
}



 console.log(pGrauUm('2 = 5 / x + 8'))
//tudo ok!!!
module.exports={
    fatorial(num){
        final = 1;
        etapa = num;
        for(i=0;i<num;i++){
            final = final*etapa;
            etapa = etapa-1
        }
        return final;
    }
}


//console.log(fatorial(5)) //5!
// conta1 = (fatorial(3)*(fatorial(2))) //3! x 2!
// conta2 = (fatorial(6)/(fatorial(2)*fatorial(3))) //6! / 2! x 3!
// conta3 = (fatorial(7)/(fatorial(5)*fatorial(2))) //7! / 5! x 2!

var array = [],num=19
for(i=0;i<=num;i++){
    array.push(i+1)
}

console.log(array)

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function changePosition(arr, from, to) {
    arr.splice(to, 0, arr.splice(from, 1)[0]);
    return arr;
};

function randomize(a){
    var n = array.length, x=1;
    for(i=1;i<n;i++){
        var ale = getRandomInt(0,num)
       
        array= changePosition(array,i,ale)
    }
    console.log(array)
}

randomize(array)
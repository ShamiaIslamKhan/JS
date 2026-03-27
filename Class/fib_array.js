// 0 1 1 2 3 5 8 13 21 34 

function fibArray(index){
    let series = [0 , 1];
    let currentNumber;
    for(let i =2; i<index; i++){
        currentNumber = series[i-1] + series[i-2];
        series.push(currentNumber);

    }
    console.log(series);
}

fibArray(8);
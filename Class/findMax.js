const data = [8, 10 , 11, 3, 100, 25];

function findMax(data){
    let maxNumber = data[0];
    for(let i = 1; i< data.length; i++){
        if(data[i]> maxNumber){
            maxNumber = data[i];
        }
    }
    console.log(maxNumber);
}

findMax(data);
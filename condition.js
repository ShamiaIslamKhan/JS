// 4/2 = 2
// 4%2 =0

function oddEvenCheck(data){
    if(data % 2 === 0 && typeof data === 'number'){
        console.log('${data}is an even number');
    }else if(data % 2 === 1 && typeof data === 'number'){
        console.log('${data} is an odd number');
    } else{
        console.log('${data} is an invalid number');
    }

    // const a=6
    // const b="6"
}

oddEvenCheck("10");
const all_data = ["Hello batch_16." , 3 , 8 , "text"];

// function loopTest(data){
//     for(let index in data) {
//         console.log(data[index]);
//     }

// }

// loopTest(all_data);


function loopTest(data){
    data.forEach((test , i) => {
        console.log(test, i);
    });

}

loopTest(all_data);

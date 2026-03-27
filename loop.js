// initialization , condition , activity  , inc/dec
// while , for , do while

const all_data = ["Hello batch_16." , 3 , 8 , "text"];

function whileLoop(data){
      let i =0;
      while(i<data.length){
        console.log(data[i]);
        i = i+1;
      }
}

whileLoop(all_data);
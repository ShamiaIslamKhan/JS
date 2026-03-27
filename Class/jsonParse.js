const jsonData = {
    users:[
        {
            id:1,
            name: "Shamia",
            email:"Dhaka",
            address:{
                street:"123 Main",
                zipcode: "10001"
            },
            // index:2
        },
         {
            id:2,
            name: "Sara",
            email:"Dhaka",
            address:{
                street:"156 Main",
                zipcode: "10067"
            },
            
        },
         {
            id:3,
            name: "Soha",
            email:"Dhaka",
            address:{
                street:"4647 Main",
                zipcode: "16438"
            },
            //index:3
        },
    ],

};

function readJson(data){
    // const firstUser = data.users[0].name;
    // console.log(firstUser);

    const users = data.users;
    for(let i=0; i<users.length; i++){
       //if(users[i].name == "Shamia"){
       // console.log(users[i].address);
       if(users[i].name.toLowerCase().includes("sha")){
        console.log("Index:", i+1, "Address:", users[i].address);       

        }
    }
    }


readJson(jsonData);
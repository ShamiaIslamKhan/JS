export class Parent{
    //  sum(a , b){
    //     const result = a + b;
    //     return result;
    // }

    // subs(a ,b){
    //     const result = a - b;
    //     return result;
    // }
    calculation(a, b){
        const result = a + b;
        return result;
    }

    sum(){
        this.calculation();
    }
}

// const parentObj = new Parent();
// console.log(parentObj.sum(10 , 5));
// console.log(parentObj.subs(10 , 5));
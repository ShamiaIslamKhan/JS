import { Parent } from "./parentclass.js";

const parentObj = new Parent();
export class Child extends Parent{
    calculation(a,b){
        const result = a * b;
        return result; //overriding
    }
}

    const childObj = new Child();
    console.log(childObj.equation());
    // calculation(type, numOne , numTwo){
    //     if(type === "sum"){
    //         result = parentObj.sum(numOne, numTwo);
    //     }else{
    //         result = parentObj.subs(numOne, numTwo);
    //     }
    //  calculation(a , b){
    //     const result = a - b;
    //        return result;

    // }

    // equation(a , b){
    //     this.calculation();
    // }

  

// }

// const childObj = new Child();
// console.log(childObj.calculation( 10, 5));
//console.log(childObj.calculation("subs", 10, 5));
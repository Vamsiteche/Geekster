function sum(a,b){
    return a+b;
}

const Sum1 = (a,b) => a+b;

const bioData = () =>({
    firstName:"Vamsi",
    lastName:"Krishna",
});

function bioData(){
    return {
        firstName:"Vamsi",
        lastName:"Krishna",
    };
}

function sum (a,b){
    console.log(a,b);
    return a+b;
}

const sum1 =(a,b) =>{
    console.log(a,b);
    return a+b;
}

function hello(){
    return "Hi";
}

const hello = ()=>{  // else const hello    //by default arrow function will return  what ever is there on right hand side
    return "Hi";    //for single statment
}

const hello1 =()=>"Hi";
const arr=['a','b','c'];
const arrCopy=arr.slice();
const arrCopy1=[...arr];//spread operator
console.log(arrCopy1);

//Rest operator
const [first, ...arr2] = ["a","b","c"] //... takes rest aa elements. we cant do [first, ...arr2, second] 
console.log("3.",first,arr2,last);
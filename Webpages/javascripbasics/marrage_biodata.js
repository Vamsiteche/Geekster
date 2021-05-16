const bioData{
    firstName: "Chirag",
    lastName: "Goel",
    dob: "",
    fullName: function(){
        return this.firstName+ " " +this.lastName;
    }};

console.log(bioData);
console.log(bioData,firstName);
console.log(bioData['lastName']);
console.log(bio.Data.fullName());
//extending the object with new key
bioData.company="Flipkart";
console.log(bioData);

//class 2nd way
function MyBioData(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;
    this.fullName=function(){
        return this.firstName+" "+this.lastName;
    }
}

var vamsiBioData=new MyBioData("Vamsi","Krishna");
console.log(vamsiBioData.firstName);
console.log(vamsiBioData.fullName());

//explore other ways
//cloning -its not a class it creats an object of the class and return it
var randomBioData=Object.create(bioData);
randomBioData.address="jagath";
console.log(randomBioData);

//using object.assign

const personalDetails={
    email:"anc@gmail.com",
    phone:"1231",
};

//merges two classes and returns merged object
//in case of common data then 2nd parameter will overide first else both will be created 
var enhancedBioData=object.assign({},bioData,personalDetail);

//in ES6 we can define class
class Person{
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    
    this.fullName=function(){
        return this.firstName+" "+this.lastName;
    }
}

var newPerson=new Person("vamsi","krishna");

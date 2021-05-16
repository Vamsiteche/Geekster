//7.create and array named coolors that contains five different names of colors as trings


var colors=['Red','Blue',"green",'Yellow','maroon'];
console.log(colors);

console.log(colors[2]);
colors[4]='ultraviolet';
console.log(colors[4]);

var fourthColor='Violet';
colors[3]='violet';
console.log(colors);

colors.push('white');
colors.unshift('grey');
console.log(colors);
console.log(colors.length);
colors.pop();
console.log(colors.length);
for(var i=0;i<colors.length;i++){
    console.log(colors[i]);
}
for(var i=0;i<colors.length;i++){
    console.log(i+':'+colors[i]);
}
 var last =colors.length-1;
 var lastColor=colors[last];
 console.log(lastColor);


 var myPenguin={
     character:"Penguin",
     origin:"Donald Duck",
     notes:"A military penguin"
 }

 console.log("Hello, Im a penguin and my name is"+myPenguin.character);
 myPenguin.canFly=false;

 console.log(myPenguin);

 myPenguin.chirp=function() {
     console.log('Hello');
}
myPenguin.sayHello=function() {
    console.log('Hello! Im powerful military penguin'+this.character);
}
myPenguin.sayHello();

myPenguin.character="Penguin McPenguinFace";
myPenguin.sayHello();
myPenguin.fly=function(){
    if(this.canFly)
    console.log("I can Fly");
    else
    console.log("I cannot Fly");
}
myPenguin.fly();
 myPenguin.canFly=true;
myPenguin.fly();

for(property in myPenguin){
    console.log(property);
}

for(var property in myPenguin){
    console.log(myPenguin[property]);
}

myPenguin.outfit={
    hat:"baseball cap",
    shirt:"Black Shirt",
    pants:"Shorts",
    shoes:"slippers"
}

var penguinHatType=myPenguin.outfit.hat;
console.log(penguinHatType);
myPenguin.outfit.accessory="pocket watch";
myPenguin.outfit.hat="top hat";
delete myPenguin.outfit.hat;

for(var property in myPenguin.outfit){
    console.log(myPenguin.outfit[property]);
}


myPenguin.favoriteFoods=["apple","Mango","grape"];
console.log(myPenguin.favoriteFoods[1]);
var firstFavFood="papaya";
myPenguin.favoriteFoods[0]=firstFavFood;
myPenguin.favoriteFoods.push("Goa");
console.log(myPenguin.favoriteFoods.length);
myPenguin.favoriteFoods[myPenguin.favoriteFoods.length-1]="pineapples";
lastFavfood=myPenguin.favoriteFoods.length-1;
for(i of myPenguin.favoriteFoods){
    console.log(i);
}


var gunter = {
    name: "Gunter",
    origin: "Adventure Time",
    canFly: false,
    sayHello: function () {
      console.log("QUACK!!!");
    }
  };
  
  var ramon = {
    name: "Ramón",
    origin: "Happy Feet",
    canFly: true,
    sayHello: function () {
      console.log("Estoy encantado de conocerle.");
    }
  };
  
  var fred = {
    name: "Fred",
    origin: "Sitting Ducks",
    canFly: false,
    sayHello: function () {
      console.log("Hi there!");
    }
  };
  
var ticketLine=["Ram","Tom","Child","Jerry","Mohit"];
//remove and return first element from array
var a= ticketLine.shift();
console.log(a,tickerLine);
//to add an element at last of the array return modified size of the array
var b=ticketLine.push("Amit");
console.log("Push",a,tickerLine);

//to add an element at start of the array return modified size of the array
var b=ticketLine.unshift("Amit");
console.log("Unshift",a,tickerLine);

//remove and return lasts element from array
var d= ticketLine.pop();//we can even pass value as arument but still does same task
console.log("Push",d,tickerLine);
//returns indexOf the passed value. if not present returns -1
var e=ticketLine.indexOf("Child");
console.log("IndexOf",e,tickerLine);
//removes n elements from e index and returns the removed elements inform of array
var f = ticketLine.splice(e,1);
console.log("Splice",f,tickerLine);
//copy from one index to other index exluding the passed last index
var f = ticketLine.slice(e,4);
console.log("Slice >",g,tickerLine);

//copy from one index to end index 
var f = ticketLine.slice(e);
console.log("Slice >",g,tickerLine);
//same as above but take elements consider from last but reverse n correct order but not like python last index is considered as 0
var f = ticketLine.slice(e,-1);
console.log("Slice >",g,tickerLine);

//strings
var myName="Chirag Goel";
var h = myName.split(" ");
//returns split in form of array
console.log("Split >", h);
//joined using passed identified
var i=h.join(",");
console.log("Split >", h,i);

//string functions-explore

/*
Task-1
play with string functions
*/
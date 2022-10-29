let colors=["Red", "Green", "Blue","Yellow", "White"];
// function f(e){
//     console.log(e);
// }

colors.forEach(e=>console.log(e));

var nums=[5,3,7,6];
var num2=[];
nums.forEach(e=>num2.push(e+10))
console.log(num2);

var nums3=nums.map(e=>e+10)

console.log(nums3);


//var numm=num2.find(e=>{ return true});
var numm=num2.find(e=> e%2);
var num5=num2.filter(e=> e%2!=0)
console.log(num5);

//every funciton returns true if all elements meet the conditon

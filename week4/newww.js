// // for(let i=0;i<10;i++){
// //     console.log(Math.floor(Math.random()*(188-105)+105));
// // }

// var person = {
//   first_name: "whoami",
//   last_name: " no-one",
//   "another name":"hahaha",
//   age: 132534624532,
//   dob: new Date(1994,6,22).toDateString(),
//   print: function(){
//     return `${this.first_name}`
//   }
// };

// console.log(person.first_name, person.last_name, person.age, person["another name"],person.dob);

// console.log(person.print)

// for(x in person){
//     console.log(person[x]);
// }


// function Point(a,b){
//     this.x=a;
//     this.y=b;
//     var z=6;
//     // this.display=()=>{
//     //     console.log(this.x+"  "+ this.y);
//     // }
// }

// // Point.prototype.display=()=>{
// //     console.log(this.x+"  "+ this.y);
// // }

// Point.prototype.display=function(){
//     console.log(this.x+"  "+ this.y);
// }
// var p1=new Point(4,55);

// p1.display();

function foo(a){
    var x=a;
    return {getX:function(){return x}};
}

var tt=new foo(4);

console.log(tt.getX());
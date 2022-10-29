

// var square=function (num){
//     return num*num;
// }

// console.log(square(3));
// console.log(square(2,3));
// var h=square;
// console.log(h(3));

// h=6;

// var greeting=function (num){
//     return "kida " + num;

// };

// var greeting1=function (num){
//     return `kida  ${num}`;

// };

// console.log(greeting("bai"))

// console.log(greeting1("chobbara"))


// var add=function(a,b){
//     return a+b+arguments[2];
// }

// console.log(add(2,3,6))

// var f1=(function(){
//     console.log("instantaneous function");
// })();
// // var d=prompt("enter a number")

// console.log(parseInt("3,4"))


// var x="11.111";
// var y=10;
// var z=Number(x)+y;
// console.log(z);
// var j="ncd ejopef ";

// console.log(encodeURI(j))

let g=6;

function foo(){
    var g=8;
    // let t=77;
    {
        let t=88;
    }
    console.log(t)
    g++;
    console.log(g)
}
foo()
console.log(g)
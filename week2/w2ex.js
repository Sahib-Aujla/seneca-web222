// const area=(r)=>{
// //const pi=3.14;
// return Math.PI*r*r;
// }
// console.log(area(4));


//q2
// var x=6;
// const roll=(x)=>{
//     return 1+Math.floor(Math.random()*x);
// }
// console.log(roll(66));

//q3
// const convert=(c)=>{
//     var num=(c* 9/5)+32;
//     return num+" F"
// }
// console.log(convert(5));

//q4
// const convert=(c,type)=>{
//     if(type==='C'){
//         var num=(c* 9/5)+32;
//     return num+" F"
//     }

    
//     var cel=(c-32)*5/9;
//     return cel+" C"
// }
// console.log(convert(41,"F"));


//another way
// const convert=(c,type)=>{
//     if(type==='C'){
//         var num=(c* 9/5)+32;
//     return num+" F"
//     }
//     else if(type==='F'){
    
//     var cel=(c-32)*5/9;
//     return cel+" C"}
//     else{ 
//         throw Error(" thik likhla");
//     }
// }
// console.log(convert(41,"g"));

//q5
// const isUnder50=(...args)=>{
//     for(var i=0;i<args.length;i++){
//         if(args[i]>50){
//             return false;
//         }
//     }

 
//     return true;
// }

// console.log(isUnder50(1,2,4,554));



//another way
function isUnder50(){
    for(let i=0;i<arguments.length;i++){
        if(arguments[i]>50){
            return false;
        }
    }
    return true;
}
console.log(isUnder50(1,2,4));


//q6
// const sum=(...args)=>{
//     let add=0;
//     for(var i=0;i<args.length;i++){
//                add+=args[i];
//             }
//         return add;
// }

// console.log(sum(1,2,3));


//q7

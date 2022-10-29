// var f=a=>  a+11;

// const f=(a)=>{
//     return a+111;
// }

// console.log(f(11))

// const multi=(a,b)=>{
//     a*=2;
//     b*=4;
//     return c=a*b;
// }
// console.log(multi(1,1));

// function ff(a){
//    x=11;
// }

// console.log(x)

const countt=()=>{
    let count=0;
    return ()=>{
        return ++count;
    }
}
const c=countt();

for(i=0;i<6;i++){
    console.log(c());
}
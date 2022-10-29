function log(s){
    s.forEach(element => {
        console.log(element);
    });
}

log(['red','blue','green']);

var num2=[]
const addItemToHistory=s=>{
    num2.push(s);
}

addItemToHistory("lol");
console.log(num2);

const buildArray=(num1,num2)=>{
    var arr=[];
    for(let i=num1;i<=num2;i++){
        arr.push(i);
    }
    return arr;
}

var arr2=buildArray();
console.log(arr2);


const addDollars=s=>{
    var j=s.map(e=> "$"+e);
    return j;
}

const lol=addDollars([1,2,3,4,]);
console.log(lol);


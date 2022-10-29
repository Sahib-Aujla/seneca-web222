var name1="vehla";
var lastName="banda";

var city="ganda toronto";
var country="bekar canada";

console.log(name1.length);

//creating new methods for the string object by using prototype we can add new methods or over ride the existing ones using
String.prototype.greeting=function (){
    return "hello "+this;
}

console.log(name1.greeting());

String.prototype.reverse=function(){
    let rev='';

    for(let i=this.length-1;i>=0;i--){
        rev+=this[i];
    }
    return rev;
}
console.log(name1.reverse());
var j=13214;
j=j.toString();
console.log(j.reverse());



//Reg Exps

var str="abbbcaabb";

var exp=new RegExp("a+b+");

console.log(/A+b+/i.test(str));


var x=12.45;
var y=1;
var z=x+y+NaN;
console.log(z);

var m="2"+"5";
var n=2+"5";
console.log(m===n)

var i=0;

for( ;i<6;i++ ){

 if (i+1==3)continue;

}

console.log(i);
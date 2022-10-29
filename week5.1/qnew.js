var person4={};
person4.name="Muath";
person4.age=25;
person4.age=42;
person4.print=function(){
    console.log(this.name + " " +this.age)
}

	
// console.log(Math.floor(Math.random()*11)+10)

		
// console.log(Math.random()*11+10)

	
// console.log(Math.floor(Math.random()*10)+10)

	
// console.log(Math.random()*10+10)


// var x=-2.5;
// console.log(Math.round(x));
// console.log(Math.ceil(x));
// console.log(Math.floor(x));

// var student={id:"2913",name:"sue","mark1":10,mark2:6};
// console.log(student.name + (student.mark1 + student.mark2)/2)

// var a=[{x:{z:1},y:2},{y:3,x:[1,3,4]},{x:5}]
// console.log(a[1].x[1]);


// var point1={x:24,y:45};
// var point2=Object.create(point1);
// point2.x=66;
// point2.y=37;
// console.log(point1.x)
// ;

var student={mark1:50,mark2:60,mark3:'C'};

var sum=0;
for(x in student){
    sum+=student[x];
    
}
console.log(sum);

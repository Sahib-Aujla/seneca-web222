function program(prog) {
    let school = "ICT";
//     function student(name) {
//         return "Student name: " + name + ", Program: " + prog + ", School of " + school;
//     }
//    // console.log(name)
//     return student;
    // return (name)=>{
    //    // let school="saffron city school"
    //     return "Student name: " + name + ", Program: " + prog + ", School of " + school;
    // }

    return function(name){
        return "Student name: " + name + ", Program: " + prog + ", School of " + school;
    }
}

var bsd_student = program("BSD"); // returns the inner function with an initial value
var cpa_student = program("CPA");
// console.log(bsd_student);
var john = bsd_student("John Smith");
var dave = cpa_student("Dave Lee");
var dave2 = program("CPD")("Jr. Dave Lee");

console.log(john);
console.log(dave);
console.log(dave2);
console.log(program("lol")("hahah"));



var coord={
    x:20,
    y:30
}

let newCoord=Object.create(coord);

console.log(coord);
console.log(newCoord);
newCoord.x=33;

console.log(coord);

console.log(newCoord);

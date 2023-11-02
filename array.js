//Node.js 10.14.0
//Plain Javascript and Node.js is supported
// html/css is not supported here 

console.log("Hello, Dcoder!")
console.log("Start");
//which has states & behaviour
let obj  = {
  //let obj1={key & value}
  Fname:"Mahesh",
  age:23,
  profession:"CT",
  location:"JNTU"
}
//console.log(Object.sesl(obj));
//console.log(Obj.gender="Homosapiens");
//console.log(Obj.profession="FED");
console.log(Object.values(obj));
console.log(Object.keys(obj));
console.log(Object.entries(obj));
console.log(obj);
// 
let likee ={
    adress:"AP",
    hobbies:"cricket",
}
console.log(likee);
Object.assign(obj,likee)
console.log(obj);
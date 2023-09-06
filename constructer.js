//constructor  functions
function person (name,age,company)
{
    this.name = name,
    this.age  = age,
    this.company = company,
    this.greet = function (){
            return 'Hello';
        }
    }
//create objects
var person1 = new person("Gangadhar",23,"Ekipit");
var person2 = new person("Sagar",24,"Wipro");
var person3 = new person("ravi",25,"ISB");
 
person1.greet = function(){
    return 'Hii';
}
//Access Properties
console.log(person1.name,person1.age,person1.company,person1.greet());
console.log(person2.name,person2.age,person2.company,person2.greet());
console.log(person3.name,person3.age,person3.company,person3.greet());
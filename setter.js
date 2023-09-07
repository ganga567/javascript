const student =
 {
    firstName: 'Gangadhar',
    secondName: 'Chandu',
    
    //accessor property(setter)
    set changeName(newName)
     {
        this.firstName = newName;
    }
};
// change(set) object property using a setter
student.changeName = 'Nikill';

console.log(student.firstName); //..output :- 

console.log(student.secondName); //..output....:-

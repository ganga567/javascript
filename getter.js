const student = 
{
    // data property
    firstName: 'Lakshmi',
    secondName:'Nandhu',
    
    // accessor property(getter)
    get getName() 
    {
        return this.secondName;
        
    }
};

// accessing data property
console.log(student.firstName); // Lakshmi

// accessing getter methods
console.log(student.getName); // Lakshmi

// trying to access as a method
console.log(student.secondName); // error
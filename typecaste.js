console.log(10+50);
console.log(10+'50');
console.log(10+'50a');
console.log(10-'50a');
console.log(20-20);
console.log(typeof NaN);
console.log(typeof number);
console.log(typeof Number);
console.log(typeof a);

// Explicit
console.log(10+Number("50"));
console.log(10+Number(50));
console.log(Boolean(1));
console.log(Boolean(0));

//-----Inplict-------
console.log(5-"1");
//The String is converted to a number,result is 4
console.log(5+'1');
//The String is converted to a number,result is 51
console.log(5-'a');//NaN
////The String is converted to a number the doe's not have a numeric value
//Hence it is converted to a special number NaN
//Note: Two NaN's neverconsidered as the same
console.log(NaN==NaN);//false
console.log(Number ("10b"));//is NaN is A method to checl weather the value is number or not gives in boolean





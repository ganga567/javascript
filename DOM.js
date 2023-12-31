document.write("This will print on UI browser")
document.write("This will print on UI browser")
document.writeln("and this will print on UI but ???")
document.writeln("and this will print on UI but ???")
console.log(typeof document);
console.log(typeof window);
// Direct
let d = document.title
console.log(d);
document.title= "MAHESH"
let d1 = document.links
console.log(d1);
let d2 = document.URL
console.log(d2);
let d3 = document.images
console.log(d3);
let d4 = document.domain
console.log(d4);
let d5 = document.body
console.log(d5);
//-----------------Indirect Methods---------------------------//
let a = document.getElementById("h")
console.log(a);
let c = document.getElementsByClassName("box")
console.log(c);
let p = document.getElementsByTagName("p")
console.log(p);
let q = document.querySelector("*")
console.log(q);
let q1 = document.querySelectorAll("*")
console.log(q1);
//Adding CSS From JS
let link=document.links
console.log(link);
link[2].style.border="5px dotted blue"
link[2].style.textDecoration="none"
link[0].style.backgroundColor="yellow"
link[1].style.border="solid 4px green"
link[1].style.borderRadius="10px"
link[2].style.borderRadius="10px"
for(let i=0;i<link.length;i++)
{
    console.log(link[i]);
    link[i].style.backgroundColor="hotpink"
    link[i].style.color="whitesmoke"
    link[i].style.border="3px ridge yellow"
    link[i].style.borderRadius="5px"
    link[i].style.textDecoration="none"
    link[i].style.fontSize="30px"

}




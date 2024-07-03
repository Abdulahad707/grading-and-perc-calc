function getperc() {
    
let name=prompt("enter your name");
let tm=document.getElementById("tm1").value;
let om=document.getElementById("om1").value;
let res =om/tm*100

if (res>=90) {
    document.getElementById("change").innerHTML=(`Dear ${name} your percentage is ${res} and grade is A+`)
}
else if(res>=80) {
    document.getElementById("change").innerHTML=(`Dear ${name} your percentage is ${res} and grade is A `)
}
else if (res>=70) {
    document.getElementById("change").innerHTML=(`Dear ${name} your  percentage is ${res} and grade is B `)
}
else if (res>=60) {
    document.getElementById("change").innerHTML=(`Dear ${name} your  percentage is ${res} and grade is C `)
}
else if (res>=50) {
    document.getElementById("change").innerHTML=(`Dear ${name} your  percentage is ${res} and grade is D `)
}
else if (res>=40) {
    document.getElementById("change").innerHTML=(`Dear ${name} your  percentage is ${res} and grade is E `)
}
else {
    document.getElementById("change").innerHTML=(`Dear ${name} your  percentage is ${res} and grade is F`)
}











}

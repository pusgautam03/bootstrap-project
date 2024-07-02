

/*document.write(" <h1>Piyush Gautam</h1>")
alert("hello")
console.log("piyushgautam03")*/

//variables=data store=var,const,let
/*var a ="<h1>piyush gautam</h1>";
var b="hello dosto";
let c="ehlehjql";
 let d="gerifojd";
document.write(a)
alert(b)
document.write(c)
document.write(d)
const e="rhiejfe";
document.write(e)*/
/*document.write("<h1>Assignment</h1>")
var a=10;
var b=10;
var c=a+b;
document.write("10+10=")
document.write(c)
document.write("<br>")

var a=100;
var b=10;
var c=a-b;
document.write("100-10=")
document.write(c)
document.write("<br>")

var a=10;
var b=10;
 a += b ;
document.write("10+10=")
document.write(a)
document.write("<br>")

var a=100;
var b=10;
 a -= b ;
document.write("100-10=")
document.write(a)
document.write("<br>")

document.write("<h1>Comparison Oprotor</h1>")
var a=100;
var b=70;
document.write(a==b)
document.write("<br>")

var a=70;
var b=70;
document.write(a===b)
document.write("<br>")

document.write("<h1>Logical Oprotor</h1>")*/
/*
var age=prompt("enter your pecent")
if (age<18){
    document.write("<h3>Young</h3>")

}else if(age<=44){
    document.write("<h3>Adult</h3>")
}else{
    document.write("<h3>Old</h3>")
}
    */

function check(){
    var a=document.getElementById("name").value;
    var b=document.getElementById("pass").value;
   

    if(a == b){
        document.getElementById("output").innerHTML ="correct";
    }
     else{
        document.getElementById("output").innerHTML ="incorrect";
     }


    }
     
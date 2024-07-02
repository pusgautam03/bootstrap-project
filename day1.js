/*
function check() {
    const nameInput = document.getElementById("nameInput").value;
    if (nameInput) {
        alert(" hi : "+ nameInput);
    } else {
        alert("Please enter a name to search");
    }
}
   */
  /*
  function check(){
    let a = parseInt(document.getElementById('nameInput').value);
    let b =  parseInt(document.getElementById('number').value);
    let c = a + b;

    document.write(c);
  }
     */
/*
  function plus(){
    let a =parseInt(document.getElementById("num1").value);
    let b =parseInt(document.getElementById("num2").value);
    let c =a + b;
    document.getElementById("ans").value = c;
}
function minus(){
    let a =(document.getElementById("num1").value);
    let b =(document.getElementById("num2").value);
    let c =a - b;
    document.getElementById("ans").value = c;
}
function multi(){
    let a =(document.getElementById("num1").value);
    let b =(document.getElementById("num2").value);
    let c =a * b;
    document.getElementById("ans").value = c;

}
function div(){
    let a =(document.getElementById("num1").value);
    let b =(document.getElementById("num2").value)
    let c =a / b;
    document.getElementById("ans").value = c;
}
function remove(){
    let a =(document.getElementById("num1").value);
    let b =(document.getElementById("num2").value)
    let c ="0";
    document.getElementById("num1").value =c;
    document.getElementById("num2").value =c;
    document.getElementById("ans").value =c;
}
    */
   
let a =prompt("Enter a Number From 1-7")
switch(a){
    case"1":
    document.write("Moday")
    break;
    case"2":
    document.write("Tuesday")
    break;
    case"3":
    document.write("Wednesday")
    break;
    case"4":
    document.write("Thursday")
    break;
    case"5":
    document.write("Friday")
    break;
    case"6":
    document.write("Saturday")
    break;
    case"7":
    document.write("Sunday")
    break;
    default:
    document.write("Invaild")
    break;
}
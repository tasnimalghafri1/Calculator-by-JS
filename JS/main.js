

var num1 = +prompt("Enter number 1 :")
var num2 = +prompt("Enter number 2 :")
var Operations = prompt("Choose what operation U want : + / * -")

function calclation( num1 , num2 , Operations) {
var final_resuls;
  if (Operations == "+"){final_resuls = num1 + num2}  
  else if (Operations == "/") {final_resuls = num1 / num2}
  else if (Operations == "*"){final_resuls = num1 * num2}
 else if (Operations == "-"){final_resuls = num1 - num2}
 else{
  final_resuls= "The operatatin unvalid"
 }
  return final_resuls
}
var final_resuls = calclation( num1 , num2 ,Operations)
console.log(" Result = " ,final_resuls) 
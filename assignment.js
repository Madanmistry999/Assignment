function addition(num1,num2){

    var sum=num1+num2;

    return document.getElementById('disp').innerHTML="Sum of two number is:"+sum;
}

var a=document.getElementById('num1');
var b=document.getElementById('num2');

addition(a,b);
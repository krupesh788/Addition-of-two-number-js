
function sum(){

    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    let sum = num1  + num2;


    document.getElementById("p1").innerHTML = `The sum of ${num1} and ${num2} is: ${sum}`;

}

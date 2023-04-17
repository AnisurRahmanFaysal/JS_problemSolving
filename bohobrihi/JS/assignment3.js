var number1,number2,menu,Case;

number1 = parseInt(prompt("Enter First Number:"));
number2 = parseInt(prompt("Enter First Number:"));

menu = ["1.Add","2.Sub","3.Mul","4.Dev"];

menu.forEach(element => {
    console.log(element);
});

Case = parseInt(prompt("What is your Choice:"))

var result;

switch(Case){
    case 1:
        result = number1+number2;
        break;

    case 2:
        result = number1-number2;
        break;
    case 3:
        result = number1*number2;
        break;

    case 4:
        result = number1/number2;
        break;
}

console.log(result);
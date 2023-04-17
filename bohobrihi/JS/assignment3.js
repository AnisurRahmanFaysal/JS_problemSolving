
//Solution1:
console.log("Select an Option\n1.Add\n2.Sub\n3.Mul\n4.Dev");

var number1, number2, option, C1, C2, C3,result;

number1 = parseInt(prompt("Enter Values:"));
number2 = parseInt(prompt("Enter Values:"));
option = parseInt(prompt("Enter Your Choice:"));

C1 = isNaN(number1);
C2 = isNaN(number2);
C3 = isNaN(option);

if(C1 || C2 || C3){
    console.log("Invalid Number");
}
else{
    switch(option){
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
}

//Solution2:
var number1,number2,menu,Case;

        menu = ["1.Add","2.Sub","3.Mul","4.Dev"];
        menu.forEach(element => {
            console.log(element);
        });
        
        number1 = parseInt(prompt("Enter First Number:"));
        number2 = parseInt(prompt("Enter First Number:"));
        
        
        
        var numberCon1 = isNaN(number1);
        var numberCon2 = isNaN(number2);
        
        Case = parseInt(prompt("What is your Choice:"));
        var CaseCon = isNaN(Case);
        
        
        if(numberCon1 || numberCon2 || CaseCon){
            console.log("Invalid Number");
        }
        else{
            switch(option){
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
        } 
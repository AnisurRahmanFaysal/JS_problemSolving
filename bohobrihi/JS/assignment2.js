var number = parseInt(prompt("Inpute Your Number"));

if(number >= 00 && number <33){
    console.log("Your Gread is 'F'");
}
else if(number >= 33 && number < 40){
    console.log("Your Gread is 'D'");
}
else if(number >= 40 && number < 50){
    console.log("Your Gread is 'C'");
}
else if(number >= 50 && number < 60){
    console.log("Your Gread is 'B'");
}
else if(number >= 60 && number < 70){
    console.log("Your Gread is 'A-'");
}
else if(number >= 70 && number < 80){
    console.log("Your Gread is 'A'");
}
else if(number >= 80 && number < 100){
    console.log("Your Gread is 'A+'");
}

else{
    console.log("Invalid Number");
}
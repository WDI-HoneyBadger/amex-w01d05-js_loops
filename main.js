//Write a Javascript program that will take a number (eg 28 or 1755 or 9, etc) and output the following:


//If the number contains 3 as a factor, output 'Pling'.
//If the number contains 5 as a factor, output 'Plang'.
//If the number contains 7 as a factor, output 'Plong'.
//If the number does not contain 3, 5, or 7 as a factor, output the number as a string.

/* for (i =0 ; i <= 10 ; i++) {
    if(i%3==0){
    console.log("pling")
} else if (i%5==0) {
    console.log("plang")
}else if (i%7==0) {
    console.log("plong")
}
else {
    console.log("i")
}
}
*/ 

/*
if (number % 3 == 0) && (number % 5 == 0)) {
    return "pling plang"
}
*/
var number

function any(number) {
    console.log(number);
} if (number % 3 == 0) {
 //   return "pling";
    console.log("pling")
} else if (number % 5 == 0) {
     //   return "plang";
    console.log("plang")
}else if (number % 7 == 0) {
    console.log("plong")
}
else {
    console.log("${number}")
}


any(1755);
//Examples

//28 has 7 as a factor.
//In raindrop-speak, this would be a simple "Plong".
//1755 has 3 and 5 as factors.
//In raindrop-speak, this would be a "PlingPlang".
//34 has neither 3, 5 nor 7 as a factor.
//Raindrop-speak doesn't know what to make of that, so it just goes with the straightforward "34".
function customAlert(){
    userBranch = prompt("What branch did you serve?")

    while (userBranch == ""){
    userBranch = prompt("Please enter branch you served in.");
}
    if (userBranch == "navy" || userBranch == "Navy") {
        alert("Welcome you salty sailor")
    } else if (userBranch == "army" || userBranch == "Army") {
        alert("Welcome Grunt")
    } else if (userBranch == "air force" || userBranch == "Air force") {
        alert("Welcome Airman")
    } else if (userBranch == "marines" || userBranch == "Marines") {
        alert("Welcome Devil dog")
    } else{
        alert("Hello Human")
    }
}


let userName = prompt("what is your name?")
while (userName == ""){
    userName = prompt('Please enter your name!')
}
let userVeteran = prompt ("Are you a veteran?");
if (userVeteran == "yes"){
    customAlert();
} else{
    alert("Hello " + userName)
}

document.write("Hi " + userName + ". Welcome to my page");

function rateMyPage(){
    let rating = prompt("How many stars would you rate my page 1-5?")
    console.log(rating);
    for (let i = 0; (i < rating & i < 5); i++){
        console.log(i);
        document.write("<img src='./img/Az-star.jpeg' alt='Arizona star'/>");
    }
}



// function customAlert(){
//     userBranch = prompt("What branch did you serve?")
// if (userBranch == ""){
//     userBranch = prompt("Please enter branch you served in.");
// }
//     if (userBranch == "navy" || userBranch == "Navy") {
//         alert("Welcome you salty sailor")
//     } else if (userBranch == "army" || userBranch == "Army") {
//         alert("Welcome Grunt")
//     } else if (userBranch == "air force" || userBranch == "Air force") {
//         alert("Welcome Airman")
//     } else if (userBranch == "marines" || userBranch == "Marines") {
//         alert("Welcome Devil dog")
//     }
// }


// let userName = prompt("what is your name?")
// let userVeteran = prompt ("Are you a veteran?");
// if (userVeteran == "yes"){
//     customAlert();
// } else{
//     alert("Hello " + userName)
// }

// document.write("Hi " + userName + ". Welcome to my page");







// let userName = prompt ("What is your name?");

// let userVeteran = prompt ("Are you a veteran?");
// if (userVeteran == "yes"){
//     let userBranch = prompt ("What branch did you serve?");
//     console.log(userBranch);
//     if(userBranch == "navy" || userBranch == "Navy"){
//         alert("Welcome you salty sailor")
//     } else if (userBranch == "army" || userBranch == "Army"){
//         alert("Welcome Grunt")
//     } else if (userBranch == "air force" || userBranch == "Air force"){
//         alert("Welcome Airman")
//     } else if (userBranch == "marines" || userBranch == "Marines"){
//         alert("Welcome Devil dog")
//     }
//     alert("Thank you for your service!")
// }
// else {
//     alert("Hello " + userName);
// }


// console.log("Hi " + userName + " welcome to my page")

// document.write("Hi " + userName + ". Welcome to my page");













// CLass work
// function functionName(parameters){Code to be exectue -steps;}

// Another way to see it
// function functionName(parameters){
//     Code to be exectue -steps;
// }

// declaring your function <- do it this way
// let userName;


// function greetUser(){
//     let userName = prompt ("What is your name?");
//     if (userName == ""){
//     prompt('Please enter your name!');
// }
// console.log(userName);
//     document.write("Hi " + userName + ". Welcome to my page");
// return userName;
// }
// greetuser();

// invoking/calling your function 
// console.log("This is the console log", greetUser();)
// let yourName = greetUser();
// console.log('Your name here ", yourName);


// function expression<-- not going to do this right now
// let newFunction = function()
// console.log(hello, this is inside your function expression)


// console.log(newFunction)
// newFunction():

// newFunction = 25;
// console.log(newFunction);



// userBranch = prompt("What branch did you serve?")
// if (userBranch == ""){
//     userBranch = prompt("Please enter branch you served in.");
// }
// console.log(userBranch);



// function customAlert(){
//     userBranch = prompt("What branch did you serve?")
// if (userBranch == ""){
//     userBranch = prompt("Please enter branch you served in.");
// }
//     if (userBranch == "navy" || userBranch == "Navy") {
//         alert("Welcome you salty sailor")
//     } else if (userBranch == "army" || userBranch == "Army") {
//         alert("Welcome Grunt")
//     } else if (userBranch == "air force" || userBranch == "Air force") {
//         alert("Welcome Airman")
//     } else if (userBranch == "marines" || userBranch == "Marines") {
//         alert("Welcome Devil dog")
//     }
// }
// let userName = prompt("what is your name?")
// let userVeteran = prompt ("Are you a veteran?");
// if (userVeteran == "yes"){
//     customAlert();
// } else{
//     alert("Hello " + userName)
// }
// document.write("Hi " + userName + ". Welcome to my page");




// customAlert();

// alert("Thank you for your service")
// }
// else {
//     alert("Hello")
// }


// else {
//         alert("Hello " + userName);
// }

// console.log("we'er out of the conditional logic now")


// customAlert();

// how to make the user input go to lower case to match prompt ansers
// let usersName = prompt("what is your name?");
// usersName = usersName.toLowerCase();

// console.log(usersName == "navy" || usersName == "army" || usersName == "air force" || usersName == "marines");

// function addNumbers(num1, num2){
//     console.log(num1 + num2);
//     return num1 + num2;
// }

// addNumbers(5, 10);


// let rating = prompt("How many stars would you rate my page?")
// console.log(rating)

// for (let i = 0; i < rating; i++){
//     console.log(i);
//     document.write("<img src='' alt=''/>);
// }

// function customAlert(){
//     userBranch = prompt("What branch did you serve?")

//     while (userBranch == ""){
//     userBranch = prompt("Please enter branch you served in.");
// }
//     if (userBranch == "navy" || userBranch == "Navy") {
//         alert("Welcome you salty sailor")
//     } else if (userBranch == "army" || userBranch == "Army") {
//         alert("Welcome Grunt")
//     } else if (userBranch == "air force" || userBranch == "Air force") {
//         alert("Welcome Airman")
//     } else if (userBranch == "marines" || userBranch == "Marines") {
//         alert("Welcome Devil dog")
//     } else{
//         alert("Hello Human")
//     }
// }


// let userName = prompt("what is your name?")
// let userVeteran = prompt ("Are you a veteran?");
// if (userVeteran == "yes"){
//     customAlert();
// } else{
//     alert("Hello " + userName)
// }

// document.write("Hi " + userName + ". Welcome to my page");

// function rateMyPage(){
//     let rating = prompt("How many stars would you rate my page 1-5?")
//     console.log(rating);
//     for (let i = 0; (i < rating & i < 5); i++){
//         console.log(i);
//         document.write("<img src='./img/Az-star.jpeg' alt='Arizona star'/>");
//     }
// }

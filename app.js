// let message = "Hello Class!";
let userName = prompt ("What is your name?");

let userVeteran = prompt ("Are you a veteran?");
if (userVeteran == "yes"){
    let userBranch = prompt ("What branch did you serve?");
    console.log(userBranch);
    if(userBranch == "navy" || userBranch == "Navy"){
        alert("Welcome you salty sailor")
    } else if (userBranch == "army" || userBranch == "Army"){
        alert("Welcome Grunt")
    } else if (userBranch == "air force" || userBranch == "Air force"){
        alert("Welcome Airman")
    } else if (userBranch == "marines" || userBranch == "Marines"){
        alert("Welcome Devil dog")
    }
    alert("Thank you for your service!")
}
else {
    alert("Hello " + userName);
}


console.log("Hi " + userName + " welcome to my page")
// alert(message);
document.write("Hi " + userName + ". Welcome to my page");



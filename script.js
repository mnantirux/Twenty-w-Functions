function Name() {
    var ask = prompt("Welcome to 'Twenty w/ Functions'! What is your name?")
    return ask
}
var n = Name()

greeting(n)

function greeting(a) {
    alert(`Hey ${a}!`)
}

alert(`This is a competition to see which player gets closer to the number 20. You are going to be playing against the computer.\n\n You will draw numbers from 1 to 10. The computer will stop at 16.\n\n Pay attention to the screen to see what your total is.`);
alert(`The computer will stop at or after 16 if the sum of the new draw is greater. \n\n While the user will stop at or after 19 if the sum of the new draw is greater.`)
alert(`Now, let's start! You will go first!`);

user = 0
computer = 0

function usernum() {
    var rannum = Math.floor(Math.random() * 11)
    return rannum
}

usernum()

function userran() {
    user = usernum() + user;
    do {
        var agree = prompt("The new number is '" + `${usernum()}` + "'. \n\n Your new total is '" + `${user}` + "' \n\n Would you like another number? 'y' for yes, 'n' for no.")

        if (agree == "y") {
            user = user + usernum();
        } else {
            alert(`The total is '${user}' for the user.`)
            break
        }
    } while (( user < 19));
    return user
}

userran()

function compran() {
    do {
        computer = computer + usernum();
    
        alert(`The new number is '${usernum()}'.\n\n Making the compter's total '${computer}'`);
    
    } while ( computer < 16)
    return computer
    alert(`The total is '${computer}' for the computer.`)
}

compran()

alert(`The final score is '${user}' for the user and '${computer}' for the computer.`)



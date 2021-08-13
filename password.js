const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question(`Howdy, what's your name?`, function(answer) {
    console.log(`Hi ${answer} welcome to the password validator.`)
    reader.question(`please enter your password.`, function(answer) {
        for (let i = 0; i < answer.length; i++) {
            if (answer[i] === `-` || `!` || `@` || `#` || `$` || `%` || `^` || `&` || `*` || `()` || `_` || `+`) {
                console.log(`Failure! you can't have special characters in your password.`)
                return
            }
        } 
        if (answer.length >= 10) {
            console.log(`Success!`)
        } else {
            console.log(`Failure`)
        }
    });
})

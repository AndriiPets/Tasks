

function getPassword():void {
    const promt = require('prompt-sync')();
    const password:string = promt('Please enter a valid password ');
    passwordValidator(password);
}
// password must - 6 chr long
//               - lowercase, uppercase letter
//               - has number
//               - alphanumeric
function passwordValidator(password:string):boolean{
    let errors:string[] = [];
    let validationClause: {[key: number]: [RegExp,string]} = {
        0 : [/.{6,}/,'Password musy be at least 6 characters long!'],
        1 : [/^[a-zA-Z0-9]+$/,'Password must contain only alphanumeric(letters,numbers)characters!'],
        2 : [/[a-z]+/,'Password shoud contain at least one lowercase letter!'],
        3 : [/[A-Z]+/,'Password shoud contain at least one Uppercase letter!'],
        4 : [/[0-9]+/,'Password shoud contain at least one number!']
    }
    for (const i in validationClause) {
        const clause = validationClause[i];
        const regex = new RegExp(clause[0]);
        if (!regex.test(password)) {
            errors.push(clause[1]);
        }
    }
    if (errors.length > 0) {
        const err:string = errors.join("\n");
        throw new Error(err);
    }else{
        console.log('Password is valid!');
        return true
    }
}

getPassword()
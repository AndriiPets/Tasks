
function getNumber(): void{
    const prompt = require('prompt-sync')()
    const num:number = Number(prompt('Enter a number '))
    if (num < 0) throw new Error('invalid input (number must be positive)')
    const sequence = fib(num)
    console.log(`Fbonacci of ${num} = ${sequence}`)
}

function fib(n:number, cash: Map<number,number> = new Map()): number{
    
    if (n <= 2) return 1
    if (cash.has(n)) return cash.get(n) as number
    
    const temp = fib(n - 1, cash) + fib(n - 2, cash)
    cash.set(n, temp)
    return temp
}

getNumber()
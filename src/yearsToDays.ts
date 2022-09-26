
function getYears():void{
    const prompt = require('prompt-sync')()
    const years:number = Number(prompt('Enter age in years '))
    if (years < 0) throw new Error('invalid input (number of years must be positive)')
    const days:number = yearsToDaysConverter(years)
    console.log(`${years} years is ${days} days!`)
}


function yearsToDaysConverter(years:number):number {
    
    let currYear:number = new Date().getFullYear()
    let leapYearCount:number = 0
    for (let i = currYear; i >= (currYear - years); --i){
        if ((i % 4 === 0) && (i % 100 !== 0) || (i % 400 === 0)){
            leapYearCount += 1
        }
    }
    return (years*365)+leapYearCount
    
}

getYears()
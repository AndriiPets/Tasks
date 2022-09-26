
function numberInput():void {
    const promt = require('prompt-sync')();
    const arr:number[] = [7,8,3,44,57,18,99,1,40,66,34,5,89,9];
    console.log(`Current array is ${arr}`);
    const find:number = Number(promt('insert number to find in the array '));
    const sortedArr = arr.sort((a,b) => a - b);
    const result:number = binarySearch(sortedArr, find);
    if (result >= 0) {
        console.log(`number ${find} was found at index ${result}\nin array ${sortedArr}`);
    }
    else {
        console.log(`number ${find} was not found in the array\n${sortedArr}`);
    }
}

function binarySearch(array:number[], value:number): number {
    let low = 0;
    let high = array.length - 1;
    let mid:number = 0;
    while (high >= low) {
        mid = Math.floor((low + high)/2);
        if (value === array[mid]) {
            return mid;
        }
        else if (value > array[mid]) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return -1;
}

numberInput()
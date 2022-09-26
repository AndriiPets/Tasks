


async function timer(wait:number):Promise<void> {
    for (let i = 0; i <= wait; ++i) {
        await new Promise(resolve => setTimeout(resolve, 1000))
        console.log(`${i} seconds elapsed`)
    }
    console.log('timer end')
}

timer(30)
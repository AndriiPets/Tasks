

function promiseExample():void {
    const task1:Promise<void> = new Promise(resolve => setTimeout(resolve, 3000, 'task1 done in 3 seconds!'));
    const task2:Promise<void> = new Promise(resolve => setTimeout(resolve, 4000, 'task2 done in 4 seconds!'));
    const task3:Promise<void> = new Promise(resolve => setTimeout(resolve, 5000, 'task3 done in 5 seconds!'));

    Promise.all([task1,task2,task3]).then(values => {
        console.log(`promise fulfilled when all tasks are done:\n${values.join('\n')}`);
    });

    Promise.race([task1,task2,task3]).then(values => {
        console.log(`promise fulfilled when first task is done:\n${values}`);
    });
}

promiseExample()

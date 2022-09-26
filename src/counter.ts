

class Counter {
    private static instance: Counter;
    private static value:number = 0;

    private constructor() { }

    public static getInstance():Counter {
        if (!Counter.instance) {
            Counter.instance = new Counter();
        }
        return Counter.instance;
    }

    public inc() {
        Counter.value += 1;
    }

    public dec() {
        Counter.value -= 1;
    }
    
    public get() {
        return Counter.value
    }
}


const num1 = Counter.getInstance()
console.log(num1.get())
num1.inc()
num1.inc()
num1.inc()
console.log(num1.get())
num1.dec()
console.log(num1.get())
const num2 = Counter.getInstance()
console.log(num1.get() === num2.get())


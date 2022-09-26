import {browser, element, by} from 'protractor'

export class DemoPage {
    first = element(by.model('first'));
    second = element(by.model('second'));
    operator = element(by.model('operator'));
    goButton = element(by.id('gobutton'));
    result = element(by.binding('latest'));
    history = element.all(by.repeater('result in memory'))

    async get() {
        await browser.get('http://juliemr.github.io/protractor-demo/');
    }

    async setOperator(operator: string) {
        await this.operator.sendKeys(operator);
    }

    calculate(number1: number, number2: number) {
        this.first.sendKeys(number1);
        this.second.sendKeys(number2);
        this.goButton.click()
    }

    getResult(): any {
        return this.result.getText()
    }

    getHistory(): any {
        return this.history
    }
}
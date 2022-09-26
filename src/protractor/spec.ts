import {DemoPage} from './protractorDemoPage';
import {logFile} from './logger'


describe('protractor demo app', function() {
    let page = new DemoPage();

    beforeEach(async function() {
        await page.get();
        await page.setOperator('/');
    });

    it('should divide 8 by 4', async function() {
        page.calculate(8, 4);
        logFile(await page.getHistory().first().getText())

        expect(await page.getResult()).toEqual('2');
        expect(await page.getHistory().first().getText()).toContain('8 / 4 2')
    });

    it('should not divide by zero', async function() {
        page.calculate(8, 0);
        logFile(await page.getHistory().first().getText())

        expect(await page.getResult()).toEqual('Infinity');
        expect(await page.getHistory().first().getText()).toContain('8 / 0 Infinity')
    })


})
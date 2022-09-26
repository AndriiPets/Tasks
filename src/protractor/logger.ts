import * as fs from 'fs/promises'

export async function logFile(text: string): Promise<void> {
    try {
        const content = `\n${text}`;
        await fs.writeFile('./protractor_logs.txt', content, {flag: 'a+'});
    } catch (err) {
        console.log(err)
    }
}


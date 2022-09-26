import * as fs from 'fs/promises'

export async function findText(fullPath:string, text:string):Promise<string> {
    let foundPaths:string[] = [];
    try {
        const files = await fs.readdir(fullPath);
        for (const file of files) {
            const realPath:string = fullPath + '\\' + file;
            const data:string = await fs.readFile(realPath, 'utf-8');
            if (data.includes(text)) {
                foundPaths.push(realPath);
            }
        }
    } catch(err) {
        console.log(err);
    }
    return foundPaths.join('\n');
}

// test foulder C:\Users\pezol\OneDrive\Рабочий стол\node projects\tasks\test_texts
async function getText():Promise<void> {
    const promt = require('prompt-sync')()
    const text = promt('Insert text to search ')
    const filepath = promt('What directory we are searching in?(full path) ')
    const result = await findText(filepath, text)
    if (result) {
        console.log(`text ${text} was found at:\n${result}`)
    } else {
        console.log(`text ${text} wasnt found in\n${filepath}`)
    }
}

getText()
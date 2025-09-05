import fs from 'fs';

export default class FileReader {
    static readFile(filename: string): number[] {
        try {
            const content = fs.readFileSync(filename, 'utf-8');
            return content.split(',').map((num: string) => parseInt(num.trim()));
        } catch (err) {
            console.error(err);
            return [];
        }
    }
}
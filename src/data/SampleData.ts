
import { SampleRow } from "./SampleRow";

export class SampleData {
    public data:SampleRow[] = [];

    constructor() {
        const now = new Date();
        let key = 0;
        for (let i = 1; i < 9; i++) {
            const adjDate = new Date();
            adjDate.setMonth(now.getMonth() - (8 - i));

            this.data.push(new SampleRow(key++, adjDate, 'linux', this.getRandomInt(100)));
            this.data.push(new SampleRow(key++, adjDate, 'macosx', this.getRandomInt(400)));
            this.data.push(new SampleRow(key++, adjDate, 'windows', this.getRandomInt(500)));
        }
    }

    private getRandomInt(max:number) {
        return Math.floor(Math.random() * Math.floor(max));
    }
}

export const sampleData:SampleData = new SampleData();
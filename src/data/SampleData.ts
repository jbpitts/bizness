
import { SampleRow } from "./SampleRow";

export class SampleData {
    public data:SampleRow[];
    private month:number = 0;
    private key:number = 0;

    constructor() {
        this.reset();
    }

    public reset():SampleRow[] {
        this.data = [];
        this.month = 0;
        this.key = 0;

        const now = new Date();
        for (let i = 1; i < 4; i++) {
            now.setSeconds(now.getSeconds() - ((3 - 1) * 10));
            this.addMonth(3 - i, now);
        }

        return this.data;
    }

    public add():SampleRow[] {
        this.month--;

        if (this.data.length > 8 * 3) {
            // remove three rows
            this.data.shift();
            this.data.shift();
            this.data.shift();
        }

        this.addMonth(this.month);
        return this.data;
    }

    private addMonth(month:number, now:Date = new Date()) {
        const adjDate = new Date();
        adjDate.setMonth(now.getMonth() - month);

        this.data.push(new SampleRow(this.key++, adjDate, now.getTime(), 'linux', this.getRandomInt(100)));
        this.data.push(new SampleRow(this.key++, adjDate, now.getTime(), 'macosx', this.getRandomInt(400)));
        this.data.push(new SampleRow(this.key++, adjDate, now.getTime(), 'windows', this.getRandomInt(500)));
    }

    private getRandomInt(max:number) {
        return Math.floor(Math.random() * Math.floor(max));
    }
}

export const sampleData:SampleData = new SampleData();
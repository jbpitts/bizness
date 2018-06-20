

export class SampleRow {
    public month:string;

    constructor(public key:number, public date:Date, public time:number, public prop:string, public value:number) {
        this.month = date.toLocaleDateString([], {month: 'short', year: '2-digit'});
    }

}
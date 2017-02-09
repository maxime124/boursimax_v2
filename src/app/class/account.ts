export class Payment {
    public type: string;
    public value: number;
    public date: string;
}

export class AccountValueType {
    public type: String;
    public percentage: number;
}

export class AccountValue {
    public date: string;
    public value: number;
    public composition: AccountValueType[];
}

export class Account {
    public _id: string;
    public name: string;
    public description: string;
    public value: AccountValue;
    public history: AccountValue[];
    public payment: Payment[];
    public percentage: number;


    constructor(name:string,value:number) {
        this.value = {
            value: value,
            date: "2016-05-12",
            composition: []
        };
        this.name = name;
    }
}
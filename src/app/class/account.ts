export class Payment {
    public type: string;
    public value: number;
    public date: string;
}

export class AccountValueType {
    public type: String;
    public percentage: number;
    public static VALUE_TYPE = ['monétaire','action','immobilier'];
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
            date: "",
            composition: [{
                type:AccountValueType.VALUE_TYPE[0],
                percentage:95
            },
                {
                    type:AccountValueType.VALUE_TYPE[1],
                    percentage:5
                }
            ]
        };
        this.name = name;
    }

    static getGraphOptionsFromAccounts(accounts:Account[]) {
        var xAxis = [];
        var data = [];
        accounts.forEach(function(account){
            xAxis.push(account.name);
            data.push(account.value.value);
        });

        var options = {
            title: {
                text: 'Répartition par valeur'
            },
            tooltip: {},
            legend: {
                data:['€']
            },
            /*xAxis: {
                data: xAxis
            },
            yAxis: {},*/
            series: [{
                name: '€',
                type: 'pie',
                data: data
            }]
        };
        return options;
    }
}
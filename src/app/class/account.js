"use strict";
var Payment = (function () {
    function Payment() {
    }
    return Payment;
}());
exports.Payment = Payment;
var AccountValueType = (function () {
    function AccountValueType() {
    }
    return AccountValueType;
}());
exports.AccountValueType = AccountValueType;
var AccountValue = (function () {
    function AccountValue() {
    }
    return AccountValue;
}());
exports.AccountValue = AccountValue;
var Account = (function () {
    function Account(name, value) {
        this.value = {
            value: value,
            date: "2016-05-12",
            composition: []
        };
        this.name = name;
    }
    return Account;
}());
exports.Account = Account;
//# sourceMappingURL=account.js.map
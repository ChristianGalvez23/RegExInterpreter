"use strict";
exports.__esModule = true;
var core_1 = require("./core");
var Test = /** @class */ (function () {
    function Test() {
        this._core = new core_1.Core();
    }
    Test.prototype.main = function () {
        var customRegEx = 'CX-{C}{C}-{N}';
        return this._core.transform(customRegEx);
    };
    return Test;
}());
var test = new Test();
console.log(test.main());

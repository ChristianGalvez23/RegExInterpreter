"use strict";
exports.__esModule = true;
var Core = /** @class */ (function () {
    function Core() {
        // Patterns
        this._patterns = ['[a-zA-Z]', '[0-9]'];
        // Friendly Patterns
        this._friendlyPatterns = ['{C}', '{N}'];
    }
    Core.prototype.transform = function (regex) {
        if (regex) {
            for (var i = 0; i < this._friendlyPatterns.length; i++) {
                var pattern = this._friendlyPatterns[i];
                while (regex.indexOf(pattern) > 0) {
                    regex = regex.replace(pattern, this._patterns[i]);
                }
            }
        }
        return regex;
    };
    return Core;
}());
exports.Core = Core;

import { Core } from './core';

class Test {
    private _core: Core;

    constructor() {
        this._core = new Core();
    }

    main(): string {
        let customRegEx = 'CX-{C}{C}-{N}';
        return this._core.transform(customRegEx);
    }
}

var test = new Test();
console.log(test.main());
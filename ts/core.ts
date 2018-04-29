export class Core {
    // Patterns
    private _patterns: Array<string> = ['[a-zA-Z]', '[0-9]'];

    // Friendly Patterns
    private _friendlyPatterns: Array<string> = ['{C}', '{N}'];

    transform(regex: string): string {
        if (regex) {
            for (let i = 0; i < this._friendlyPatterns.length; i++) {
                let pattern = this._friendlyPatterns[i];
                while (regex.indexOf(pattern) > 0) {
                    regex = regex.replace(pattern, this._patterns[i]);
                }
            }
        }
        return regex;
    }
}
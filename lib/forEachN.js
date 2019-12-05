"use strict";
Array.prototype.forEachN = function (n, callback, thisArg) {
    if (!this.length || typeof n !== 'number' || n < 1 || typeof callback !== 'function')
        return;
    if (!thisArg)
        thisArg = this;
    n >>>= 0;
    const S = Math.ceil(this.length / n);
    for (let i = 0; i < S; i++)
        callback.call(thisArg, this.slice(i * n, i * n + n));
};

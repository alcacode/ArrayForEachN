interface Array<T> {
        /** 
         * Passes all array members to a callback function, _n_ members at a time.
         * @param {number} n Number of members to pass at a time.
         * @param {function} callback Function to pass array members to.
         * @param {any} [thisArg] Value to bind `this` to. If not set, this refers to the `Array` instance.
         */
        forEachN: (n: number, callback: (...args: [T]) => void, thisArg?: any) => void;
}

Array.prototype.forEachN = function(n, callback, thisArg) {
        if (!this.length || typeof n !== 'number' || n < 1 || typeof callback !== 'function')
                return;

        if (!thisArg)
                thisArg = this;

        /** Cast to uint32 */
        n >>>= 0;

        const S = Math.ceil(this.length / n);

        for (let i = 0; i < S; i++)
                callback.call(thisArg, this.slice(i * n, i * n + n));
};

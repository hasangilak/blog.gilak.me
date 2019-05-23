function memois(fn) {
    let memoized = null;
    return function (...args) {
        if (memoized === null) {
            memoized = fn(...args);
        }

        return memoized;
    }
}

module.exports = {
    memois,
}

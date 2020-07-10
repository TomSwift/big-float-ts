"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eNegativeOf = void 0;
/**
 * Returns the negative of the given floating point expansion.
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 *
 * @param e a floating point expansion
 */
function eNegativeOf(e) {
    const m = e.length;
    const h = new Array(m);
    for (let i = 0; i < m; i++) {
        h[i] = -e[i];
    }
    return h;
}
exports.eNegativeOf = eNegativeOf;
//# sourceMappingURL=e-negative-of.js.map
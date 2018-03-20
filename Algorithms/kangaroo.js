// Brute Force
function kangaroo(x1, v1, x2, v2) {
    let max = 10000;
    // TODO input validation

    for (let n = 1; n < max; n++) {
        let dist1 = x1 + (v1 * n);
        let dist2 = x2 + (v2 * n);
        if (dist1 === dist2) return 'YES';        
    }

    return 'NO';
}
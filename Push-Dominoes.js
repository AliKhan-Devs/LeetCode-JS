var pushDominoes = function(dominoes) {


    const n = dominoes.length;
    const forces = new Array(n).fill(0);

    let force = 0;
    // Left to right pass
    for (let i = 0; i < n; i++) {
        if (dominoes[i] === 'R') {
            force = n; // Set a large force when we encounter 'R'
        } else if (dominoes[i] === 'L') {
            force = 0; // Reset force when we encounter 'L'
        } else {
            force = Math.max(force - 1, 0); // Decrease the force as we move right
        }
        forces[i] += force;
    }

    // Right to left pass
    force = 0;
    for (let i = n - 1; i >= 0; i--) {
        if (dominoes[i] === 'L') {
            force = n; // Set a large force when we encounter 'L'
        } else if (dominoes[i] === 'R') {
            force = 0; // Reset force when we encounter 'R'
        } else {
            force = Math.max(force - 1, 0); // Decrease the force as we move left
        }
        forces[i] -= force;
    }

    let result = '';
    for (let i = 0; i < n; i++) {
        if (forces[i] > 0) {
            result += 'R';
        } else if (forces[i] < 0) {
            result += 'L';
        } else {
            result += '.';
        }
    }
    return result;

}

console.log(pushDominoes(".L.R...LR..L..")); // Expected output: "LL.RR.LLRRLL.."
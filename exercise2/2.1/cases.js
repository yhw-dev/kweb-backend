function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

const permutation = (n, r) => {
    return factorial(n) / factorial(n - r);
};

const multiPermutation = (n, r) => {
    return n ** r;
};

const combination = (n, r) => {
    return factorial(n) / (factorial(n - r) * factorial(r));
}

const multiCombination = (n, r) => {
    return factorial(n + r - 1) / (factorial(n - 1) * factorial(r));
}

module.exports = {
    permutation: permutation,
    combination: combination,
    multiPermutation: multiPermutation,
    multiCombination: multiCombination,
};
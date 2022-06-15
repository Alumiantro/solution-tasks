function factorial(n) {
    if (typeof n !== 'number' || !Number.isInteger(n)) {
        return 'It is not number';
    }
    if (n <= 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

factorial(5)
factorial(4)

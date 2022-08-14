// Set Up Global Array
const PRIMES = [false, false, true];

// Function to check if number num is a prime
function isPrime(num) {
    if (PRIMES[num] !== undefined) return PRIMES[num];
    if (num%2==0) return false;
    const upperBound = Math.sqrt(num);
    for (let i=3;i<=upperBound;i+=2) {
        if (num%i===0) return PRIMES[num] = false;
    }
    return PRIMES[num] = true;
}
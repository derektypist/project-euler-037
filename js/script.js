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

// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the Value of the input field
    let num = document.getElementById("mynumber").value;
    // Check if input is valid
    if (isNaN(num) || num.toString().length == 0 || num<8 || num>11 || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 8 and 11.`
    } else {
        // Remove any leading zeros
        num = parseInt(num);
        txt += `You have requested ${num} primes. <p>`;
        txt += `Sum of ${num} primes that are both truncatable from left to right and from right to left is ${truncatablePrimes(num)}.`;
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}

// Function to check if n has an even digit (skip numbers with 4, 6, 8 or 0)
function hasEvenDigit(n) {
    return n.toString().split('').some(digit => digit%2===0 && digit !=='2');
}

// Function to check if the number n is a truncatable prime
function isTruncatable(n) {
    if (!isPrime(n)) return false;
    for (let i=10;i<n;i*=10) {
        if (!isPrime(n%i)) return false;
        if (!isPrime(Math.floor(n/i))) return false;
    }
    return true;
}

/* 
    Function to Return the Sum of Truncatable Primes
    truncatablePrimes(8)  returns 1986
    truncatablePrimes(9)  returns 5123
    truncatablePrimes(10) returns 8920
    truncatablePrimes(11) returns 748317
*/
function truncatablePrimes(n) {
    let numTruncatablePrimes = 0;
    let currentNum = 11;
    let sum = 0;
    while (numTruncatablePrimes < n) {
        if (isTruncatable(currentNum)) {
            sum += currentNum;
            numTruncatablePrimes++;
        }
        currentNum += 2;
        while (hasEvenDigit(currentNum)) {
            currentNum += 2;
        }
    }
    return sum;
}

// Function to Clear Information
function clearInfo() {
    let txt = "";
    document.getElementById("numinfo").innerHTML = txt;
}

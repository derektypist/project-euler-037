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
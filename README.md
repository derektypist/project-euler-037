# Project Euler 037 - Truncatable Primes

The number 3797 has an interesting property.  Being prime itself, it is possible to continuously remove digits from left to right and remain prime at each stage: 3797, 797, 97, and 7.  Similarly, we can work from right to left: 3797, 379, 37, and 3.

The aim is to find the sum of only `n` (8 <= `n` <=11) primes that are both truncatable from left to right and right to left.

**NOTE:** 2, 3, 5, and 7 are not considered to be truncatable primes.

Information at [Project Euler 037](https://projecteuler.net/problem=37)

## UX

**User Stories**

As a user, I expect the function `truncatablePrimes(8)` to return a number.

As a user, I expect the function `truncatablePrimes(8)` to return 1986.

As a user, I expect the function `truncatablePrimes(9)` to return 5123.

As a user, I expect the function `truncatablePrimes(10)` to return 8920.

As a user, I expect the function `truncatablePrimes(11)` to return 748317.

User Stories on function `truncatablePrimes(n)` taken from [FreeCodeCamp](https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-37-truncatable-primes)
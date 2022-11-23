/* Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

Example 1:

Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
Example 2:

Input: n = 2
Output: false


Constraints:

1 <= n <= 231 - 1
*/

/**
 * @param {number} n
 * @return {boolean}
 * */

var isHappy = function (n) {
    // 1. create a set to store the numbers
    const set = new Set();
    // 2. while n is not equal to 1
    while (n !== 1) {
        // 3. convert n to a string
        // 4. split the string into an array
        // 5. map over the array
        // 6. convert each element to a number
        // 7. square each number
        // 8. reduce the array to a sum
        n = n.toString().split('').map(Number).map(num => num * num).reduce((a, b) => a + b);
        // 9. if the set has n
        if (set.has(n)) {
            // 10. return false
            return false;
        }
        // 11. add n to the set
        set.add(n);
    }
    // 12. return true
    return true;
}

;

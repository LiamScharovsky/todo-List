/* 
Given an integer x, return true if x is palindrome integer.
An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.
Example 1:
Input: x = 121
Output: true
Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Example 4:
Input: x = -101
Output: false 
*/
function isPalindrome(x) {
    let myFunc = num => Number(num);
    var arr = Array.from(String(x), myFunc);

    let j = x.toString().length - 1
    for (let i = 0; i < x.toString().length - 1 ; i ++, j--){
        console.log(arr[i])
        console.log(arr[j])
        if (arr[i] === arr [j]){
        }
        else{
            return false
        }
    }
    return true

    console.log(j)

}

console.log(isPalindrome(121)) // True
console.log(isPalindrome(-121)) // False
console.log(isPalindrome(10)) // False
console.log(isPalindrome(-101)) // False
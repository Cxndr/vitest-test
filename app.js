// write function 
// @param = string
// @return = true/false (boolean)
// ask if its a palindrome

export function isPalindrome(string) {
    let inputArray = [...string];
    let inputLen = inputArray.length;

    for (let i=0; i < inputLen/2; i++) {
        if (inputArray[i] != inputArray[(inputArray.length-1)-i]) {
            return false;
        }
    }
    return true;

}

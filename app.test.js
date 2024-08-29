import {test, expect} from "vitest";

import { isPalindrome } from "./app";

// takes 2 argument:
// @string - name you want to give test
// @function - callback function running test
test("check if palindrome works", function(){
    expect(isPalindrome('racecar')).toBe(true);
    expect(isPalindrome('oppo')).toBe(true);
    expect(isPalindrome('oiteghwo')).toBe(false);
})


// to run tests go to package.json and in scripts section change the 'test' script to be 'vitest'
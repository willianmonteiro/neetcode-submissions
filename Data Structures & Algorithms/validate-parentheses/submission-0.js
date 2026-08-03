class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
         const stack = [];
         const closingChar = {
            ')': '(',
            ']': '[',
            '}': '{',
         }

         for (let c of s) {
            if (closingChar[c]) {
                if (
                    stack.length > 0 &&
                    stack[stack.length - 1] === closingChar[c]
                ) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(c);
            }
         }
         return stack.length === 0;
    }
}

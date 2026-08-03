class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const rules = ['+', 'D', 'C'];
        const output = [];

        for (const op of operations) {
            if (!rules.includes(op)) output.push(Number(op));
            if (op === 'C') output.pop()
            if (op === 'D') {
                const score = (Number(output[output.length-1]) * 2);
                output.push(score);
            }
            if (op === '+') {
                const score = (Number(output[output.length-1]) + Number(output[output.length-2]));
                output.push(score);
            }
        }
        return output.reduce((sum, n) => sum + n, 0);
    }
}

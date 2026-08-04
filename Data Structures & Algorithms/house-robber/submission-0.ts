class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        let prev1 = 0;
        let prev2 = 0;
        for (const n of nums) {
            const curr = Math.max(prev1, prev2+n);
            prev2 = prev1;
            prev1 = curr;
        }
        return prev1
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        const memo = new Map();

        const dfs = (i) => {
            if (i >= nums.length) return 0;
            if (memo.has(i)) return memo.get(i);

            const res = Math.max(dfs(i + 1), nums[i] + dfs(i+2));

            memo.set(i, res);
            return res;
        }

        return dfs(0)
    }
}

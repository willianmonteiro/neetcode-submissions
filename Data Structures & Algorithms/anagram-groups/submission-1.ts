class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let anagrams = {}

        for (const s of strs) {
            const sortedS = s.split('').sort().join('');

            if (!(sortedS in anagrams)) {
                anagrams[sortedS] = [s]
            } else {
                anagrams[sortedS].push(s);
            }
        }

        return Object.values(anagrams);
    }

}

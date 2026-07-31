class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let maxSoFar = -1;

        for (let i = arr.length - 1; i >= 0; i--) {
            const curr = arr[i];
            arr[i] = maxSoFar;
            if (curr > maxSoFar) maxSoFar = curr;
        }

        return arr;
    }
}
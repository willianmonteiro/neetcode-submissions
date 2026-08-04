class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        if (!grid) return 0;

        const rows = grid.length;
        const cols = grid[0].length;

        const visited = new Set();
        let islands = 0;

        const key = (r,c) => `${r},${c}`;

        const dfs = (r, c) => {
            if (
                visited.has(key(r,c)) ||
                Math.min(r, c) < 0 ||
                r >= rows ||
                c >= cols ||
                grid[r][c] === '0'
            ) {
                return;
            }

            visited.add(key(r,c));
            dfs(r+1, c);
            dfs(r-1, c);
            dfs(r, c+1);
            dfs(r, c-1);
        }

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === '1' && !visited.has(key(r,c))) {
                    dfs(r, c);
                    islands++;
                }
            }
        }

        return islands;
    }
}

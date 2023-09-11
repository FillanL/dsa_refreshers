// Problem Description:
// You are trapped in a maze and need to find the shortest path to escape. The maze is represented as an N x M grid where each cell can be either empty (denoted by '0') or blocked (denoted by '1'). You start at the top-left corner (cell [0][0]) and need to reach the bottom-right corner (cell [N-1][M-1]). You can move in four directions: up, down, left, and right. You cannot move through blocked cells.

// Write a function or method shortestPath that takes the maze grid as input and returns the length of the shortest path from the top-left corner to the bottom-right corner. If there is no path to the exit, return -1.

// export function escapeMaze(maze: number[][]): number {
// 	const visited = new Set<string>();
// 	return explore(maze, visited, 0, 0);
// }
// function explore(
// 	grid: number[][],
// 	visited: Set<string>,
// 	row: number,
// 	col: number
// ): number {
// 	const cords = `${row},${col}`;
// 	if (isOutofBounds(grid, row, col)) return 0;
// 	if (visited.has(cords)) return 0;
// 	visited.add(cords);
// 	if (grid[row][col] !== 0) return 0;
// 	if (row === grid.length - 1 && col === grid[0].length - 1) return 1;

// 	const up = explore(grid, visited, row + 1, col);
// 	const down = explore(grid, visited, row - 1, col);
// 	const right = explore(grid, visited, row, col + 1);
// 	const left = explore(grid, visited, row, col - 1);
//     const nums = [up, down, left, right].filter(num=> num !== 0)
// 	const min = Math.min(...nums);
// 	return min !== 0 ? min + 1 : 0;
// }
// function isOutofBounds(grid: number[][], row: number, col: number): boolean {
// 	if (row >= 0 && row < grid.length && col >= 0 && col < grid[0].length)
// 		return false;
// 	return true;
// }

type Cell = {
	x: number;
	y: number;
	count: number;
};
export function escapeMaze(maze: number[][]) {
	const rows = maze.length;
	const cols = maze[0].length;
	const seen = new Set<string>();

	const q: Cell[] = [{ x: 0, y: 0, count: 1 }];
	const holder = [];

	while (q.length > 0) {
		const { x, y, count } = q.shift()!;
		const cords = `${x},${y}`;
		if (x === rows - 1 && y === cols - 1)holder.push(count)
		if (isOutOfBound(x, y, maze) || maze[x][y] === 1 || seen.has(cords))continue;
        seen.add(cords);
        console.log(cords)

		q.push(
			{ x: x + 1, y: y, count: count + 1 },
			{ x: x - 1, y: y, count: count + 1 },
			{ x: x, y: y + 1, count: count + 1 },
			{ x: x, y: y - 1, count: count + 1 }
		);
	}
    return Math.min(...holder)
}
function isOutOfBound(row: number, col: number, grid: number[][]): boolean {
	if (row >= 0 && col >= 0 && row < grid.length && col < grid[0].length)
		return false;
	return true;
}

// const maze = [
//     [0, 1, 0, 0, 0],
//     [0, 0, 0, 1, 0],
//     [1, 1, 0, 1, 0],
//     [1, 1, 0, 0, 0],
//     [0, 0, 0, 1, 0]
// ]

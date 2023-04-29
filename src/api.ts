export const calculateStatus = (
	winner: any,
	squares: any[],
	nextValue: any
) => {
	return winner
		? `Winner: ${winner}`
		: squares.every(Boolean)
		? `Scratch: Cat's game`
		: `Next player: ${nextValue}`;
};

export const calculateNextValue = (squares: any[]) => {
	return squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O';
};

export const calculateWinner = (squares: any[]) => {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}
	return null;
};

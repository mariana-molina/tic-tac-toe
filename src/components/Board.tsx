type BoardProps = {
	squares: string[];
	onClick: (squares: number) => void;
};

function Board({ squares, onClick }: BoardProps) {
	function renderSquare(i: number) {
		return (
			<button className="square" onClick={() => onClick(i)}>
				{squares[i]}
			</button>
		);
	}
	return (
		<div style={{ marginTop: '1em' }}>
			<div className="board-row">
				{renderSquare(0)}
				{renderSquare(1)}
				{renderSquare(2)}
			</div>
			<div className="board-row">
				{renderSquare(3)}
				{renderSquare(4)}
				{renderSquare(5)}
			</div>
			<div className="board-row">
				{renderSquare(6)}
				{renderSquare(7)}
				{renderSquare(8)}
			</div>
		</div>
	);
}

export { Board };

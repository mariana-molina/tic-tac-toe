import { useLocalStorageState } from '../utils';
import { calculateNextValue, calculateStatus, calculateWinner } from '../api';
import { Board } from './Board';

function Game() {
	const [history, setHistory] = useLocalStorageState('history', [
		Array(9).fill(null),
	]);
	const [currentStep, setCurrentStep] = useLocalStorageState('step', 0);
	const currentSquares = history[currentStep];

	const nextValue = calculateNextValue(currentSquares);
	const winner = calculateWinner(currentSquares);
	const status = calculateStatus(winner, currentSquares, nextValue);

	function selectSquare(square: number) {
		if (winner || currentSquares[square]) {
			return;
		}
		const newHistory = history.slice(0, currentStep + 1);

		const squaresCopy = [...currentSquares];
		squaresCopy[square] = nextValue;
		setHistory([...newHistory, squaresCopy]);
		setCurrentStep(newHistory.length);
	}

	function restart() {
		setHistory([Array(9).fill(null)]);
		setCurrentStep(0);
	}

	const moves = history.map((stepSquares: string[], step: number) => {
		const buttonDescription = step === 0 ? 'game start' : `move #${step}`;
		const isCurrentStep = step === currentStep;
		return (
			<li style={{ marginBottom: '3px' }} key={step}>
				<button
					className="button-8"
					disabled={isCurrentStep}
					onClick={() => setCurrentStep(step)}
				>
					Go to {buttonDescription} {isCurrentStep && '(current)'}
				</button>
			</li>
		);
	});

	return (
		<div className="game">
			<div className="game-board">
				<div>{status}</div>
				<Board onClick={selectSquare} squares={currentSquares} />
				<button name="restart" className="restart button-8" onClick={restart}>
					Restart
				</button>
			</div>
			<div className="game-info">
				<div>Game history</div>
				<ol>{moves}</ol>
			</div>
		</div>
	);
}

export { Game };

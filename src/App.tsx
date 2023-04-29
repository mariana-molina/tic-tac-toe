import './App.css';
import { Game } from './components/Game';
import { PortfolioBton } from './components/PortfolioBton';

function App() {
	return (
		<div className="main">
			<h1 className="main__title">Tic-Tac-Toe</h1>
			<Game />
			<PortfolioBton />
		</div>
	);
}

export default App;

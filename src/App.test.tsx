import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('can play a game of tic tac toe', async () => {
	render(<App />);
	// prettier-ignore
	const [
    s1, s2, s3,
    s4, s5, s6,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    s7, s8, s9 
  ] = Array.from(screen.queryAllByRole('button'))
	expect(screen.getByText('Next player: X')).toBeInTheDocument();

	await userEvent.click(s1);
	expect(s1).toHaveTextContent('X');

	expect(screen.getByText('Next player: O')).toBeInTheDocument();
	await userEvent.click(s5);
	expect(s5).toHaveTextContent('O');

	expect(screen.getByText('Next player: X')).toBeInTheDocument();
	await userEvent.click(s9);
	expect(s9).toHaveTextContent('X');

	expect(screen.getByText('Next player: O')).toBeInTheDocument();
	await userEvent.click(s7);
	expect(s7).toHaveTextContent('O');

	expect(screen.getByText('Next player: X')).toBeInTheDocument();
	await userEvent.click(s3);
	expect(s3).toHaveTextContent('X');

	expect(screen.getByText('Next player: O')).toBeInTheDocument();
	await userEvent.click(s2);
	expect(s2).toHaveTextContent('O');

	expect(screen.getByText('Next player: X')).toBeInTheDocument();
	await userEvent.click(s6);
	expect(s6).toHaveTextContent('X');

	// game is over so no more moves may be played
	expect(screen.getByText('Winner: X')).toBeInTheDocument();
	await userEvent.click(s4);
	expect(s4).toHaveTextContent('');
});

test('does not change square value when it is clicked multiple times', async () => {
	render(<App />);
	const [square1] = Array.from(screen.queryAllByRole('button'));

	await userEvent.click(square1);
	await userEvent.click(square1);
	expect(square1).toHaveTextContent('X');
});

test('can reset game and start from beginning', async () => {
	render(<App />);
	const [square1, square2] = Array.from(screen.queryAllByRole('button'));
	const reset = screen.getByRole('button', { name: /restart/i });

	await userEvent.click(square1);
	expect(square1).toHaveTextContent('X');
	await userEvent.click(square2);
	expect(square2).toHaveTextContent('O');

	await userEvent.click(reset);

	await userEvent.click(square2);
	expect(square2).toHaveTextContent('X');
});

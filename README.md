# Tic tac toe with local storage and history

This is a simple Tic Tac Toe game built using React. It has an additional feature that allows users to save the game state in local storage.

## Installation

To install the project, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run the following command to install the dependencies: `npm install`

## Usage

To run the project, use the following command: `npm start`

The game will launch in your default browser. You can start playing by clicking on the squares in the game board. The game will automatically save your progress in local storage, so you can continue playing later even if you close the browser or refresh the page.

To restart the game, click the "restart" button.

You can also use the history feature to view your previous moves. Simply click on the move you want to go back to, and the game will update to that state.

## Test

This project includes some tests to ensure that the game logic is working as expected. To run the tests, follow these steps:

1. Install the project dependencies by running npm install in the project directory.
2. Run the tests using the command `npm test`.
3. The test results should appear in the console.

The tests cover the following scenarios:

- calculateNextValue function returns the correct next value based on the number of occupied squares.
- calculateWinner function correctly identifies the winner based on the squares occupied.
- calculateStatus function returns the correct status message based on the game state.
- User can not change square value when it is clicked multiple times.
- User can restart the game, and the board is reset to its initial state.

If you find any issues or bugs in the game, please feel free to report them by opening an issue on this repository.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.

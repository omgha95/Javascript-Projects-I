﻿# Javascript-Projects-I

# Age Calculator, Simple Calculator, and Tic Tac Toe Game in JavaScript

This document outlines three web applications built with JavaScript: an Age Calculator, a Simple Calculator, and a Tic Tac Toe Game. Each application showcases various programming concepts and user interactions.

## Age Calculator

The Age Calculator allows users to input their birthdate and calculate their age in years, months, and days.

### Features

- **User Input**: Users can enter their birthdate using an HTML date input field.
- **Age Calculation**: The application calculates the age by comparing the current date with the provided birthdate.
- **Output**: The result is displayed dynamically on the webpage, showing the user's age in a clear and concise format.

### Code Overview

The core logic involves:
1. **Getting the Current Date**: Using `new Date()` to fetch the current date.
2. **Parsing the Input Date**: Converting the user's input into a date object.
3. **Calculating Differences**: Using date methods to determine the difference in years, months, and days.

## Simple Calculator

The Simple Calculator allows users to perform basic arithmetic operations: addition, subtraction, multiplication, and division.

### Features

- **User Input**: Users can enter two numbers and select an operation.
- **Operations**: Supports addition, subtraction, multiplication, and division.
- **Dynamic Output**: The result is displayed on the webpage as soon as the user clicks the operation button.

### Code Overview

The core functionality involves:
1. **Getting User Input**: Capturing values from HTML input fields.
2. **Performing Calculations**: Using conditional statements to execute the chosen operation.
3. **Displaying Results**: Outputting the result to the webpage.

## Tic Tac Toe Game

The Tic Tac Toe Game is a classic two-player game where users can take turns placing their symbols (X or O) on a 3x3 grid. The game detects winning conditions and allows players to reset the game once it concludes.

### Features

- **Interactive Grid**: Users can click on grid cells to place their symbols.
- **Turn-Based Gameplay**: Alternates between players, ensuring a fair game.
- **Win Detection**: Automatically checks for winning combinations and announces the winner or if the game ends in a draw.

### Code Overview

The game logic involves:
1. **Grid Creation**: Dynamically generating a 3x3 grid using HTML and CSS.
2. **Event Handling**: Capturing user clicks to update the grid and track player turns.
3. **Win Logic**: Implementing checks for horizontal, vertical, and diagonal wins.

## Conclusion

The Age Calculator, Simple Calculator, and Tic Tac Toe Game are engaging web applications that demonstrate basic programming concepts in JavaScript, including user input handling, arithmetic operations, and game logic. Each project provides a hands-on approach to learning web development.

# SudokuSolver

#### By Scott Bergler

## Table of contents

**[Description](#description)**<br>
**[Resources](#resources)**<br>
**[Installation Instructions](#setup/installation)**<br>
**[Specifications](#specifications)**<br>
**[Known Bugs](#known-bugs)**<br>
**[Technologies Used](#technologies-used)**<br>
**[License](#license)**<br>

## Description

## Planning

1. Configuration/dependencies
  * This should include ALL dependencies.
  As listed in package.json
  Development Dependencies:
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.3",
    "babel-preset-es2015": "^6.24.1",
    "clean-webpack-plugin": "^0.1.18",
    "css-loader": "^0.28.10",
    "eslint": "^4.18.2",
    "eslint-loader": "^2.0.0",
    "html-webpack-plugin": "^3.0.6",
    "jasmine": "^3.1.0",
    "jasmine-core": "^2.99.0",
    "karma": "^2.0.0",
    "karma-chrome-launcher": "^2.2.0",
    "karma-cli": "^1.0.1",
    "karma-jasmine": "^1.1.1",
    "karma-jasmine-html-reporter": "^0.2.2",
    "karma-jquery": "^0.2.2",
    "karma-sourcemap-loader": "^0.3.7",
    "karma-webpack": "^2.0.13",
    "style-loader": "^0.20.2",
    "uglifyjs-webpack-plugin": "^1.2.2",
    "webpack": "^4.0.1",
    "webpack-cli": "^3.1.2",
    "webpack-dev-server": "^3.1.14"

  Production Dependencies:
    "bootstrap": "^4.2.1",
    "jquery": "^3.3.1",
    "popper.js": "^1.14.6"

  * Dependency Purpose:
  Babel: ES6 transpilation  
  ESLint: JS linter  
  Jasmine: JS testing framework  
  Karma: JS test runner  
  UglifyJS: File minification  
  Webpack: Module bundler


2. Specs
  ### Musts
  * Spec: Create game array, a 1D array that has 81 indicies representing the locations on the board.
      Input: new Sudoku();
      Output:     
          this.board = [
            0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0
          ]

  * Spec: Creates arrays representing Rows, from indicies on game board array.
      Input: Row 3
      Output: Array [ this.board[18], this.board[19], this.board[20], this.board[21], this.board[22], this.board[23], this.board[24], this.board[25], this.board[26] ].

  * Spec: Creates arrays representing Columns, from indicies on game board array.
      Input: Column 3
      Output: Array [ this.board[2], this.board[11], this.board[20], this.board[29], this.board[38], this.board[47], this.board[56], this.board[65], this.board[74] ].

  * Spec: Creates arrays representing Nonet, from indicies on game board array. Nonets represented alphabetically.
      Input: 2
      Output: Array [
      this.board[3], this.board[4], this.board[5], this.board[12], this.board[13], this.board[14], this.board[21], this.board[22], this.board[23] ].

  * Spec: Checks for duplicates in array: [1, 4, 6, 5, 7, 4, 9, 2, 8], false.
      Input: Column Set, Row Set, or Nonet set
      Output: True or False

  ### Notes
  * Any given index belongs to a single nonet.
  
  ### Stretch
  * Spec: Gets user input to create a playable game
  * Spec: Solve the game layout immediately, so that it can be checked that the game is even playable.
  * Spec: Log potential plays (pencil marks) on a square

3. Integration
  * Index page will have a table set up for user input to start the game
  * A submit button will initiate the game, routing to a new page with the game solved on the back end for verification

4. UX/UI
  * Bootstrap
  * JQuery/Javascript

5. Polish
  * Refactor minor portion of...
  * Delete unused...
  * Make README awesome

## Resources
    - For reference:  https://sudoku9x9.com/

## Setup/Installation
Clone the code from [GitHub](https://github.com/skillitzimberg/SudokuSolver).

## Specifications:
##### Spec 1: Do a thing:
- [ ] **Expect:**  
Input: some input;  
Output: some output;

## Known Bugs

## Support and contact details
Scott Bergler :: commandinghands@gmail.com
Charley McGowan

## Technologies Used

HTML, CSS, Json, dotnet.

### License

Licensed under the MIT license.

Copyright (c) 2018 ** Scott Bergler && Charley McGowan **

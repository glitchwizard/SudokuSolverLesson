// import { Cell } from './Cell.js';

export class Sudoku {
  constructor() {
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
    ];
    this.nonetPencilMarkArray = [
      0, 0, 0,
      0, 0, 0,
      0, 0, 0
    ]; // this will be a 3x3 array that will represent the nonet that is in play at the current moment to check matches against.
    this.indexArray =
      [ 0, 1,  2,  3,  4,  5,  6,  7,  8,
        9, 10, 11, 12, 13, 14, 15, 16, 17,
       18, 19, 20, 21, 22, 23, 24, 25, 26,
       27, 28, 29, 30, 31, 32, 33, 34, 35,
       36, 37, 38, 39, 40, 41, 42, 43, 44,
       45, 46, 47, 48, 49, 50, 51, 52, 53,
       54, 55, 56, 57, 58, 59, 60, 61, 62,
       63, 64, 65, 66, 67, 68, 69, 70, 71,
       72, 73, 74, 75, 76, 77, 78, 79, 80];
    this.currentNonet = [];
  }

  findArrayOfRowFromRowNumber(rowNumber, inputArray) {
    let i = (rowNumber *  9) - 9;
    let j = i + 8;
    let rowOutput = [];
    for (i; i <= j; i++) {
      rowOutput.push(inputArray[i]);
    }
  return rowOutput;
  }

  findArrayOfColumnFromColumnNumber(columnNumber, inputArray) {
    let columnOutput = [];
    for (let i = columnNumber - 1; i <= 80; i+=9) {
      columnOutput.push(inputArray[i]);
    }
  return columnOutput;
  }

  findArrayOfNonetFromNonetNumber(nonetNumber, inputArray) {
    const startIndices = [ 0, 3, 6, 27, 30, 33, 54, 57, 60 ];
    let i = startIndices[nonetNumber-1];
    let nonetOutput = [];
    let j = i + 3;
    let kk = i + 20;

    for (let k = i; k <= kk; k += 9) {
      for (i ; i < j; i++) {
        nonetOutput.push(inputArray[i]);
      }
      i+=6;
      j=i+3;
    }
  return nonetOutput;
  }

  findGameIndexFromNonetNumberAndNonetIndex(nonetNumber, nonetIndex) {
    const startIndices = [ 0, 3, 6, 27, 30, 33, 54, 57, 60 ];
    let i = startIndices[nonetNumber-1];
    let nonetOutput = [];
    let j = i + 3;
    let kk = i + 20;
    for (let k = i; k <= kk; k += 9) {
      for (i ; i < j; i++) {
        nonetOutput.push(i);
      }
      i+=6;
      j=i+3;
    }
  return nonetOutput[nonetIndex];
  }

  isThereAMatchInTheRow(rowNumber, numberToFindInRow, inputArray) {
    let matchArray = this.findArrayOfRowFromRowNumber(rowNumber, inputArray);
    let isMatch = matchArray.indexOf(numberToFindInRow);
    return isMatch;
  }

  isThereAMatchInTheColumn(columnNumber, numberToFindInColumn, inputArray) {
    let matchArray = this.findArrayOfColumnFromColumnNumber(columnNumber, inputArray);
    let isMatch = matchArray.indexOf(numberToFindInColumn);
    return isMatch;
  }

  isThereAMatchInTheNonet(nonetNumber, numberToFindInNonet, inputArray) {
    let matchArray = this.findArrayOfNonetFromNonetNumber(nonetNumber, inputArray);
    let isMatch = matchArray.indexOf(numberToFindInNonet);
    return isMatch;
  }

  findRowNumberFromGameArrayIndex(gameArrayIndexNumber){
    for (let rowNumber = 1; rowNumber <= 9; rowNumber++){
      if (this.isThereAMatchInTheRow(rowNumber, gameArrayIndexNumber, this.indexArray) >= 0) {
        return rowNumber;
      }
    }
  }

  findColumnNumberFromGameArrayIndex(gameArrayIndexNumber){
    for (let columnNumber = 1; columnNumber <= 9; columnNumber++){
        if (this.isThereAMatchInTheColumn(columnNumber, gameArrayIndexNumber, this.indexArray) >= 0) {
          return columnNumber;
        }
    }
  }

  findNonetNumberFromGameArrayIndex(gameArrayIndexNumber){
    for (let nonetNumber = 1; nonetNumber <= 9; nonetNumber++){
        if (this.isThereAMatchInTheNonet(nonetNumber, gameArrayIndexNumber, this.indexArray) >= 0) {
          return nonetNumber;
        }
    }
  }

  findFirstPlayableCell(nonetNumber, inputArray) {
    let nonetInPlay = this.findArrayOfNonetFromNonetNumber(nonetNumber, inputArray);
    let currentCell = nonetInPlay.indexOf(0);
    return currentCell;
  }



  playGameWithNumber(numberInPlay) {
    let pencilMarks = 0;
    let gameIndexOutput;

    for (let nonetNumberInPlay = 1; nonetNumberInPlay <= 9; nonetNumberInPlay++){ // Get Nonet
      let isThisPlayableIndexReturn = this.isThereAMatchInTheNonet(nonetNumberInPlay, numberInPlay, this.board); // Check nonet for numberInPlay, returns nonet index of playable number
      if (isThisPlayableIndexReturn >= 0) {
        //break out of if statement.
      } else {

        let firstPlayableCell = this.findFirstPlayableCell(nonetNumberInPlay, this.board); //We have a playable number, check the rows and columns for each playable cell
        let currentGameIndex = this.findGameIndexFromNonetNumberAndNonetIndex(nonetNumberInPlay, firstPlayableCell);
        let currentRow = this.findRowNumberFromGameArrayIndex(currentGameIndex);
        isThisPlayableIndexReturn = this.isThereAMatchInTheRow(currentRow, numberInPlay, this.board);
        if (isThisPlayableIndexReturn >= 0) {
          // break out of if statement
        } else {
          let currentColumn = this.findColumnNumberFromGameArrayIndex(currentGameIndex);
          isThisPlayableIndexReturn = this.isThereAMatchInTheColumn(currentColumn, numberInPlay, this.board);
          if (isThisPlayableIndexReturn >= 0){
            // break out of if statement;
          } else {
            //replace game array index with whatever number is in play.
            gameIndexOutput = currentGameIndex;
            pencilMarks++;
          }
        }
      }
      debugger;
      if (pencilMarks === 0 && nonetNumberInPlay === 9){
        // break;
      } else if (pencilMarks === 1 && nonetNumberInPlay === 9) {
        this.board[gameIndexOutput] = numberInPlay;
        debugger;
        console.log("This is the board after a change: " + this.board);
      }
      pencilMarks = 0;
    }
  }

  PlayGameWithAllNumbers() {
    let gameComplete = this.board.indexOf(0);
    if (gameComplete < 0){
      console.log("Congratulations, it's solved,");
      console.log("here's the answer: " + this.board);
    } else {
      for (let numberInPlay = 1 ; numberInPlay < 9; numberInPlay++) {
        this.playGameWithNumber(numberInPlay);
      }
    }

  }
}

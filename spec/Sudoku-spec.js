import { Sudoku } from './../src/Sudoku.js';

describe('Sudoku Solver', function() {
  let testSudoku;
  beforeEach(function() {
    testSudoku = new Sudoku();
    testSudoku.board = [
      5,3,0,0,7,0,0,0,0,
      6,0,0,1,9,5,0,0,0,
      0,9,8,0,0,0,0,6,0,
      8,0,0,0,6,0,0,0,3,
      4,0,0,8,0,3,0,0,1,
      7,0,0,0,2,0,0,0,6,
      0,6,0,0,0,0,2,8,0,
      0,0,0,4,1,9,0,0,5,
      0,0,0,0,8,0,0,7,9];
  });

  it('should create an array of length 81', function() {
    expect(testSudoku.board.length).toEqual(81);
  });

  it('function findArrayOfRowFromRowNumber should return an array representing a single row of length 9', function() {
    let rowResult = [];
    rowResult = testSudoku.findArrayOfRowFromRowNumber(3, testSudoku.board);
    expect(rowResult.length).toEqual(9);
  });

  it('function findArrayOfColumnFromColumnNumber should return an array representing a single column of length 9', function() {
    let columnResult = [];
    columnResult = testSudoku.findArrayOfColumnFromColumnNumber(4, testSudoku.board);
    expect(columnResult.length).toEqual(9);
  });

  it('function findArrayOfNonetFromNonetNumber should return an array representing a single nonet of length 9', function() {
    let nonetResult = testSudoku.findArrayOfNonetFromNonetNumber(5, testSudoku.board);
    expect(nonetResult.length).toEqual(9);
  });

  it('function findArrayOfRowFromRowNumber should return true if row array values match expected row values', function() {
    let foundArray = testSudoku.findArrayOfRowFromRowNumber(1, testSudoku.board);
    expect(foundArray).toEqual([ 5, 3, 0, 0, 7, 0, 0, 0, 0 ]);
  });

  it('function findArrayOfColumnFromColumnNumber should return true if column array values match expected values', function() {
    let foundArray = testSudoku.findArrayOfColumnFromColumnNumber(1, testSudoku.board);
    expect(foundArray).toEqual([ 5, 6, 0, 8, 4, 7, 0, 0, 0 ]);
  });

  it('function findArrayOfNonetFromNonetNumber should return true if nonet array values match expected nonet values', function() {
    let foundArray = testSudoku.findArrayOfNonetFromNonetNumber(1, testSudoku.board);

    expect(foundArray).toEqual([ 5, 3, 0, 6, 0, 0, 0, 9, 8 ]);
  });

  it('function findGameIndexFromNonetNumberAndNonetIndex should return the game board index number when given a nonet nubmer and nonet index', function(){
    let gameIndexNumberResult = testSudoku.findGameIndexFromNonetNumberAndNonetIndex(5,0);
    expect(gameIndexNumberResult).toEqual(30);
  })

  it('function isThereAMatchInTheRow should return true when there is a match of a particular number if the row has a matching value in it', function() {
    let result = testSudoku.isThereAMatchInTheRow(1,5, testSudoku.board);
    expect(result).toBeGreaterThan(-1);
  })

  it('function isThereAMatchInTheColumn should return true when there is a match of a particular number if the column has a matching value in it', function() {
    let result = testSudoku.isThereAMatchInTheColumn(1,5, testSudoku.board);
    expect(result).toBeGreaterThan(-1);
  })

  it('function isThereAMatchInTheNonet should return true when there is a match of a particular number if the nonet has a matching value in it', function() {
    let result = testSudoku.isThereAMatchInTheNonet(1,5, testSudoku.board);
    expect(result).toBeGreaterThan(-1);
  })

  it('function findRowNumberFromGameArrayIndex should return the row number when given an index number from the game array', function() {
    let indexToCheck = 59;
    let result = testSudoku.findRowNumberFromGameArrayIndex(indexToCheck);

    expect(result).toEqual(7);
  })

  it('function findColumnNumberFromGameArrayIndex should return the column number when given an index number from the game array', function() {
    let indexToCheck = 52;
    let result = testSudoku.findColumnNumberFromGameArrayIndex(indexToCheck);
    expect(result).toEqual(8);
  })

  it('function findNonetNumberFromGameArrayIndex should return the nonet number when given an index number from the game array', function(){
    let indexToCheck = 3;
    // let firstPlayableCell = testSudoku.findFirstPlayableCell(5);
    let result = testSudoku.findNonetNumberFromGameArrayIndex(indexToCheck);
      expect(result).toEqual(2);
  })


  it('function findFirstPlayableCell should return the index of the first playable cell in a given nonet', function(){
    let playableCell = testSudoku.findFirstPlayableCell(1, testSudoku.board);
    expect(playableCell).toEqual(2);
  })

  it('function playGameWithNumber should play first possible number on game board', function() {
    let result = [
      5,3,0,0,7,0,0,0,0,
      6,0,0,1,9,5,0,0,0,
      0,9,8,0,0,0,0,6,0,
      8,0,0,0,6,0,0,0,3,
      4,0,0,8,0,3,0,0,1,
      7,0,0,0,2,0,0,0,6,
      0,6,0,0,0,0,2,8,0,
      0,0,0,4,1,9,0,0,5,
      0,0,0,0,8,0,1,7,9];
      // debugger;
    let firstUpdate = testSudoku.playGameWithNumber(1);
    expect(testSudoku.board).toEqual(result);
  })

});

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

  it('should return an array representing a single row of length 9', function() {
    let rowResult = [];
    rowResult = testSudoku.findRow(3);
    expect(rowResult.length).toEqual(9);
  });

  it('should return an array representing a single column of length 9', function() {
    let columnResult = [];
    columnResult = testSudoku.findColumn(4);
    expect(columnResult.length).toEqual(9);
  });

  it('should return an array representing a single nonet of length 9', function() {
    let nonetResult = testSudoku.findNonet(5);
    expect(nonetResult.length).toEqual(9);
  });

  it('should return true if row array values match expected row values', function() {
    let foundArray = testSudoku.findRow(1);
    expect(foundArray).toEqual([ 5, 3, 0, 0, 7, 0, 0, 0, 0 ]);
  });

  it('should return true if column array values match expected values', function() {
    let foundArray = testSudoku.findColumn(1);
    expect(foundArray).toEqual([ 5, 6, 0, 8, 4, 7, 0, 0, 0 ]);
  });

  it('should return true if nonet array values match expected nonet values', function() {
    let foundArray = testSudoku.findNonet(1);
    expect(foundArray).toEqual([ 5, 6, 0, 3, 0, 9, 0, 0, 8 ]);
  });

  it('should return true when there is a match of a particular number if the row has a matching value in it', function() {
    let result = testSudoku.isThereAMatchInTheRow(1,5);
    expect(result).toBeGreaterThan(-1);
  })

  it('should return true when there is a match of a particular number if the column has a matching value in it', function() {
    let result = testSudoku.isThereAMatchInTheColumn(1,5);
    expect(result).toBeGreaterThan(-1);
  })

  it('should return true when there is a match of a particular number if the nonet has a matching value in it', function() {
    let result = testSudoku.isThereAMatchInTheNonet(1,5);
    expect(result).toBeGreaterThan(-1);
  })

  it('should return the index of the first playable cell in a given nonet', function(){
    let playableCell = testSudoku.findFirstPlayableCell(1);
    expect(playableCell).toEqual(2);
  })

  it('should return the column number and row number based on the nonet number and first playable cell in that nonet', function(){
    let nonetNumber = 5;
    let firstPlayableCell = testSudoku.findFirstPlayableCell(5);
    let result = testSudoku.findRowAndColumnNumbers(5,firstPlayableCell);
  })


});

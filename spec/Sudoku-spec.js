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

  it('should return true if array values match expected values', function() {
    let foundArray = testSudoku.findRow(1);
    expect(foundArray).toEqual([ 5, 3, 0, 0, 7, 0, 0, 0, 0 ]);
  });

  it('should return true if array values match expected values', function() {
    let foundArray = testSudoku.findColumn(1);
    expect(foundArray).toEqual([ 5, 6, 0, 8, 4, 7, 0, 0, 0 ]);
  });

  it('should return true if array values match expected values', function() {
    let foundArray = testSudoku.findNonet(1);
    expect(foundArray).toEqual([ 5, 6, 0, 3, 0, 9, 0, 0, 8 ]);
  });

});

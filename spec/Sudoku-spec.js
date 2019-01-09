import { Sudoku } from './../src/Sudoku.js';
describe('Sudoku Solver', function() {

  it('should create an array of length 81', function() {
    let testSudoku = new Sudoku();
    expect(testSudoku.board.length).toEqual(81);
  });
});

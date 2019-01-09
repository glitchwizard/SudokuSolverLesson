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
    ]
  }

  findRow(rowNumber) {
    let i = (rowNumber *  9) - 9;
    let j = i + 8;
    let rowOutput = [];
    for (i; i <= j; i++) {
      rowOutput.push(this.board[i]);
    }
  return rowOutput;
  }

  findColumn(columnNumber) {
    let columnOutput = [];
    for (let i = columnNumber - 1; i <= 80; i+=9) {
      columnOutput.push(this.board[i]);
    }
  return columnOutput;
  }

  findNonet(nonetNumber) {
    const startIndices = [ 0, 3, 6, 27, 30, 33, 54, 57, 60 ];
    let i = startIndices[nonetNumber-1];
    let nonetOutput = [];
    let j = i + 3;
    for (i; i < j; i++) {
      let kk = i + 20;
      for (let k = i; k <= kk; k += 9) {
        nonetOutput.push(this.board[k]);
      }
    }
  return nonetOutput;
  }

}

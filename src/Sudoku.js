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

  gameIndexArray(){
    const IndexArray =
     [ 00, 01, 02, 03, 04, 05, 06, 07, 08,
       09, 10, 11, 12, 13, 14, 15, 16, 17,
       18, 19, 20, 21, 22, 23, 24, 25, 26,
       27, 28, 29, 30, 31, 32, 33, 34, 35,
       36, 37, 38, 39, 40, 41, 42, 43, 44,
       45, 46, 47, 48, 49, 50, 51, 52, 53,
       54, 55, 56, 57, 58, 59, 60, 61, 62,
       63, 64, 65, 66, 67, 68, 69, 70, 71,
       72, 73, 74, 75, 76, 77, 78, 79, 80];
    return IndexArray;
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

  isThereAMatchInTheRow(rowNumber, numberToFindInRow) {
    let matchArray = this.findRow(rowNumber);
    let isMatch = matchArray.indexOf(numberToFindInRow);
    return isMatch;
  }

  isThereAMatchInTheColumn(columnNumber, numberToFindInColumn) {
    let matchArray = this.findColumn(columnNumber);
    let isMatch = matchArray.indexOf(numberToFindInColumn);
    return isMatch;
  }

  isThereAMatchInTheNonet(nonetNumber, numberToFindInNonet) {
    let matchArray = this.findNonet(nonetNumber);
    let isMatch = matchArray.indexOf(numberToFindInNonet);
    return isMatch;
  }

  findFirstPlayableCell(nonetNumber) {
    let nonetInPlay = this.findNonet(nonetNumber);
    let currentCell = nonetInPlay.indexOf(0);
    return currentCell;
  }

  findRowNumberFromGameArrayIndex(gameArrayIndex){

  }

  // findRowAndColumnNumbers(nonetNumber, firstPlayableCell){
  //   const startIndices = [ 0, 3, 6, 27, 30, 33, 54, 57, 60 ];
  //   const nonetNumbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9]
  //
  //   let rowNumber;
  //   let columnNumber;
  //
  //   if (nonetNumber >= 1 && nonetNumber < 4) {
  //     if (firstPlayableCell >= 0 && firstPlayableCell < 3){
  //       rowNumber = 1;
  //     } else if (firstPlayableCell >= 3 && firstPlayableCell < 6) {
  //       rowNumber = 2;
  //     } else if (firstPlayableCell >= 6) {
  //       rowNumber = 3;
  //     }
  //   } else if (nonetNumber >= 4 && nonetNumber < 7) {
  //     if (firstPlayableCell >= 0 && firstPlayableCell < 3){
  //       rowNumber = 4;
  //     } else if (firstPlayableCell >= 3 && firstPlayableCell < 6) {
  //       rowNumber = 5;
  //     } else if (firstPlayableCell >= 6) {
  //       rowNumber = 6;
  //     }
  //   } else if (nonetNumber >= 7) {
  //     if (firstPlayableCell >= 0 && firstPlayableCell < 3){
  //       rowNumber = 7;
  //     } else if (firstPlayableCell >= 3 && firstPlayableCell < 6) {
  //       rowNumber = 8;
  //     } else if (firstPlayableCell >= 6) {
  //       rowNumber = 9;
  //     }
  //   }
  //
  //   if (nonetNumber >= 1 && nonetNumber < 4) {
  //     if (firstPlayableCell >= 0 && firstPlayableCell < 3){
  //       columnNumber = firstPlayableCell + startIndices[nonetNumber];
  //     } else if (firstPlayableCell >= 3 && firstPlayableCell < 6) {
  //       columnNumber = firstPlayableCell + startIndices[nonetNumber] + 6
  //     } else if (firstPlayableCell >= 6) {
  //       columnNumber = firstPlayableCell + startIndices[nonetNumber] + 12 ;
  //     }
  //   } else if (nonetNumber >= 4 && nonetNumber < 7) {
  //     if (firstPlayableCell >= 0 && firstPlayableCell < 3){
  //       columnNumber = 4;
  //     } else if (firstPlayableCell >= 3 && firstPlayableCell < 6) {
  //       columnNumber = 5;
  //     } else if (firstPlayableCell >= 6) {
  //       columnNumber = 6;
  //     }
  //   } else if (nonetNumber >= 7) {
  //     if (firstPlayableCell >= 0 && firstPlayableCell < 3){
  //       columnNumber = 7;
  //     } else if (firstPlayableCell >= 3 && firstPlayableCell < 6) {
  //       columnNumber = 8;
  //     } else if (firstPlayableCell >= 6) {
  //       columnNumber = 9;
  //     }
  //   }


    let foundColumnAndRow = []; // Array of length 2
    let parentRowNumber = ;
    let parentColumnNumber = ;

  }

}

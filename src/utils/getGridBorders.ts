// returns array: [top, right, bottom, left]: boolean[]
//          e.g.: [true, false, true, false]
export const getGridBorders = (index: number, cells: number) => {
  const top = index >= 1 && index <= 7;
  const right = !(index % 8 === 7);

  return [top, right, true, false];
};

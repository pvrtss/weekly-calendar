const letters = ["S", "M", "T", "W", "T", "F", "S"];
export const getWeekdayLetter = (d: Date) => letters[d.getDay()];

const hourStrings = [
  "00:00",
  "01:00",
  "02:00",
  "03:00",
  "04:00",
  "05:00",
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00",
];

function getMonday(date: Date) {
  let weekday = date.getDay();
  // to Europe format (1st is Monday)
  weekday = weekday === 0 ? 7 : weekday;

  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() - (weekday === 1 ? 0 : weekday - 1)
  );
}

export function getWeekMatrix(initialDate: Date) {
  let monday = getMonday(initialDate);
  let result = [];
  for (let i = 0; i < hourStrings.length; i++) {
    let row: Array<string | Date> = [hourStrings[i]];
    for (let j = 0; j < 7; j++) {
      let day = new Date(monday.getTime());
      day.setDate(monday.getDate() + j);
      day.setHours(i % 24);
      row.push(day);
    }
    result.push(row);
  }
  result.push("00:00");
  return result;
}

export function getWeek(initialDate: Date) {
  let monday = getMonday(initialDate);
  let result = [];
  for (let i = 0; i < 7; i++) {
    let day = new Date(
      monday.getFullYear(),
      monday.getMonth(),
      monday.getDate() + i
    );
    result.push(day);
  }
  return result;
}

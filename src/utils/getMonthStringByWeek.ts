const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "Semptember",
  "October",
  "November",
  "December",
];

export function getMonthStringByWeek(week: Date[]) {
  let imonths: number[] = [];
  week.forEach((day) => {
    if (!imonths.includes(day.getMonth())) {
      imonths.push(day.getMonth());
    }
  });
  if (imonths.length > 1) {
    return (
      months[imonths[0]] +
      " - " +
      months[imonths[1]] +
      " " +
      week[6].getFullYear().toString()
    );
  } else {
    return months[imonths[0]] + " " + week[6].getFullYear().toString();
  }
}

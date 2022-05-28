export const getDay = (n: number) => {
  const day = new Date();
  day.setDate(day.getDate() + n);
  const year = day.getFullYear();
  const month = day.getMonth() + 1;
  const date = day.getUTCDate();

  return `${year}-${month}-${date}`;
};

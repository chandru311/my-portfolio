export const calculateExp = () => {
  const joinedDate = new Date("2023-07-01");
  const today = new Date();

  let totalMonths = (today.getFullYear() - joinedDate.getFullYear()) * 12;
  totalMonths += today.getMonth() - joinedDate.getMonth();

  if (today.getDate() < joinedDate.getDate()) {
    totalMonths -= 1;
  }
  const exp = totalMonths / 12;
  const wholeNumber = Math.floor(exp);
  const decimal = exp - wholeNumber;

  let modifiedExp;
  if (decimal >= 0.5) {
    modifiedExp = `${wholeNumber}.5+`;
  } else if (decimal > 0) {
    modifiedExp = `${wholeNumber}+`;
  } else {
    modifiedExp = `${wholeNumber}`;
  }

  return modifiedExp;
};

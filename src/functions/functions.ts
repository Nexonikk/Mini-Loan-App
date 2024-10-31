import { IState, IValues } from "../model";

export const calculatePayment = (values: IValues): IState => {
  const { loanTermInMonths, interestRate, principal } = values;

  const rateInDecimal = interestRate / 100;
  const interestRatePerMonth = rateInDecimal / 12;

  const topExp =
    principal *
    interestRatePerMonth *
    Math.pow(1 + interestRatePerMonth, loanTermInMonths);
  const bottomExp = Math.pow(1 + interestRatePerMonth, loanTermInMonths) - 1;

  const weeklyPayment = (topExp / loanTermInMonths) * 4;
  const monthlyPayment = topExp / bottomExp;
  const totalAmountToPay = monthlyPayment * loanTermInMonths;
  const totalInterestToPay = totalAmountToPay - principal;

  return {
    principalAmount: principal,
    interestAmount: totalInterestToPay,
    totalAmount: totalAmountToPay,
    monthlyPayment,
    weeklyPayment,
  };
};

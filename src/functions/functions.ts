import { IState, IValues } from "../model";

export const calculatePayment = (values: IValues): IState => {
  const { loanTermInMonths, interestRate, principal } = values;

  const rateInDecimal = interestRate / 100;

  const interestRatePerMonth = rateInDecimal / 12;

  const numerator =
    principal *
    interestRatePerMonth *
    Math.pow(1 + interestRatePerMonth, loanTermInMonths);
  const denominator = Math.pow(1 + interestRatePerMonth, loanTermInMonths) - 1;
  const monthlyPayment = numerator / denominator;
  const weeklyPayment = (monthlyPayment * 12) / 52;

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

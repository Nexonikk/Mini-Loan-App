import { Dispatch, SetStateAction } from "react";

export interface IValues {
  principal: number;
  loanTermInYears: number;
  loanTermInMonths: number;
  interestRate: number;
}

export interface IState {
  principalAmount: number;
  interestAmount: number;
  totalAmount: number;
  monthlyPayment: number;
  weeklyPayment: number;
  currency?: string;
}

export interface IContext {
  state: IState;
  dispatch: Dispatch<SetStateAction<IState>>;
}

import { ChangeEvent, useContext, useEffect, useState } from "react";
import { AppContext } from "../context";
import { calculatePayment } from "../functions/functions";
import { IValues } from "../model";

export const Form = () => {
  const { dispatch, state } = useContext(AppContext);

  const [principal, setPrincipal] = useState<number>(0);
  const [loanTermInYears, setLoanTermInYears] = useState<number>(0);
  const [loanTermInMonths, setLoanTermInMonths] = useState<number>(0);
  const [interestRate, setInterestRate] = useState<number>(0);

  const handleLoanTermInYears = (e: ChangeEvent<HTMLInputElement>) => {
    const termInYears: number = Number(e.target.value);
    const termInMonths: number = termInYears * 12;
    setLoanTerms(termInYears, termInMonths);
  };

  const handleLoanTermInMonths = (e: ChangeEvent<HTMLInputElement>) => {
    const termInMonths: number = Number(e.target.value);
    const termInYears: number = termInMonths / 12;
    setLoanTerms(termInYears, termInMonths);
  };

  const setLoanTerms = (termInYears: number, termInMonths: number) => {
    setLoanTermInYears(termInYears);
    setLoanTermInMonths(termInMonths);
  };

  const calculateMonthlyPayment = () => {
    const values: IValues = {
      principal,
      loanTermInYears,
      loanTermInMonths,
      interestRate,
    };

    const {
      principalAmount,
      interestAmount,
      totalAmount,
      monthlyPayment,
      weeklyPayment,
    } = calculatePayment(values);

    dispatch((prevState) => ({
      ...prevState,
      principalAmount,
      interestAmount,
      totalAmount,
      monthlyPayment,
      weeklyPayment,
    }));
  };
  useEffect(() => {
    calculateMonthlyPayment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col mt-10 p-12 md:p-20">
      <div className="p-10 m-auto text-lg rounded-2xl  bg-gradient-to-b from-[#2a56fe] to-[#7a24fa]">
        <div className="">
          <label htmlFor="loanAmount" className="text-white">
            Loan amount
          </label>
          <input
            className="p-2  border-none rounded-lg"
            type="number"
            id="loanAmount"
            placeholder="E.g 5000"
            value={principal}
            onChange={(e) => setPrincipal(Number(e.target.value))}
          />
          <select
            className="p-1 m-0.5 bg-white rounded-lg "
            value={state.currency}
            onChange={(e) =>
              dispatch((prevState) => ({
                ...prevState,
                currency: e.target.value,
              }))
            }
          >
            <option value="INR">INR</option>
            <option value="$">$</option>
            <option value="£">£</option>
            <option value="€">€</option>
          </select>
        </div>
        <div>
          <label htmlFor="loanTermYears" className="text-white">
            Loan term in years
          </label>
          <input
            className="p-2 border-none rounded-lg"
            type="number"
            id="loanTermYears"
            placeholder="E.g 4"
            value={loanTermInYears}
            onChange={handleLoanTermInYears}
          />
        </div>
        <div>
          <label htmlFor="loanTermMonths" className="text-white">
            Loan term in months
          </label>
          <input
            className="p-2 border-none rounded-lg"
            type="number"
            id="loanTermMonths"
            placeholder="E.g 48"
            value={loanTermInMonths}
            onChange={handleLoanTermInMonths}
          />
        </div>
        <div className="">
          <label htmlFor="interest" className="text-white">
            Interest rate per year
          </label>
          <input
            className="p-2 border-none rounded-lg"
            type="number"
            id="interest"
            placeholder="E.g 6.5"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
          />
        </div>
        <div className="mt-5">
          <button
            className="bg-white text-black rounded-lg px-3 py-1"
            onClick={calculateMonthlyPayment}
          >
            Calculate
          </button>
        </div>
      </div>
    </div>
  );
};

import { useContext } from "react";
import { AppContext } from "../context";

export const Results = () => {
  const { state } = useContext(AppContext);

  const getFormattedNumber = (value: number): string => {
    return value.toLocaleString(undefined, { maximumFractionDigits: 2 });
  };

  return (
    <div className="p-10 md:m-0 m-5 md:p-24 text-lg rounded-2xl bg-gradient-to-b from-[#7a24fa] to-[#2a56fe]">
      <div className="flex justify-between mb-2">
        <div className="text-white">Total principal amount to pay</div>
        <div className="text-white">
          {state.currency} {getFormattedNumber(state.principalAmount)}
        </div>
      </div>

      <div className="flex gap-5 mb-4 ">
        <div className="text-white">Total interest to pay</div>
        <div className="text-white">
          {state.currency} {getFormattedNumber(state.interestAmount)}
        </div>
      </div>
      <hr className="size-1 bg-slate-500 w-full"></hr>
      <div className="flex gap-5">
        <div className="text-white">Total Loan amount to pay</div>
        <div className="text-white">
          {state.currency} {getFormattedNumber(state.totalAmount)}
        </div>
      </div>

      <div className="m-5 flex flex-col items-center">
        <div className="text-md text-white">Monthly payment</div>
        <div className="">
          <span className="font-bold text-white">{state.currency}</span>{" "}
          <span className="text-4xl text-white">
            {getFormattedNumber(state.monthlyPayment)}
          </span>
        </div>
      </div>
      {/* ------------------------------------------- */}
      <div className="m-5 flex flex-col items-center">
        <div className="text-md text-white">Monthly payment</div>
        <div className="">
          <span className="font-bold text-white">{state.currency}</span>{" "}
          <span className="text-4xl text-white">
            {getFormattedNumber(state.weeklyPayment)}
          </span>
        </div>
      </div>
    </div>
  );
};

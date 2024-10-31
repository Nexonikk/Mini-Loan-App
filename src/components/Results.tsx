import { useContext } from "react";
import { AppContext } from "../context";

export const Results = () => {
  const { state } = useContext(AppContext);

  const getFormattedNumber = (value: number): string => {
    return value.toLocaleString(undefined, { maximumFractionDigits: 2 }); 
  };

  return (
    <div
      className="p-10 md:m-0 m-5 md:p-24 text-lg rounded-2xl border-black border-2
    bg-slate-100"
    >
      <div className="flex justify-between mb-2 ">
        <div>Total principal amount to pay</div>
        <div className="text-[#2a56fe]">
          {state.currency} {getFormattedNumber(state.principalAmount)}
        </div>
      </div>

      <div className="flex gap-5 mb-4 ">
        <div>Total interest to pay</div>
        <div className="text-[#2a56fe]">
          {state.currency} {getFormattedNumber(state.interestAmount)}
        </div>
      </div>
      <hr className="size-1 bg-slate-500 w-full"></hr>
      <div className="flex gap-5">
        <div>Total Loan amount to pay</div>
        <div className="text-[#2a56fe]">
          {state.currency} {getFormattedNumber(state.totalAmount)}
        </div>
      </div>

      <div className="m-5 flex flex-col items-center">
        <div className="text-md">Monthly payment</div>
        <div className="">
          <span className="font-bold text-[#2a56fe]">{state.currency}</span>{" "}
          <span className="text-4xl text-[#2a56fe]">
            {getFormattedNumber(state.monthlyPayment)}
          </span>
        </div>
      </div>
      {/* ------------------------------------------- */}
      <div className="m-5 flex flex-col items-center">
        <div className="text-md">Monthly payment</div>
        <div className="">
          <span className="font-bold text-[#2a56fe]">{state.currency}</span>{" "}
          <span className="text-4xl text-[#2a56fe]">
            {getFormattedNumber(state.weeklyPayment)}
          </span>
        </div>
      </div>
    </div>
  );
};

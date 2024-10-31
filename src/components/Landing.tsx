import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col items-center gap-3">
        <h2 className="text-2xl md:text-4xl text-[#18181bcc] font-semibold font-satoshi-medium">
          Introducing the #1 Loan-App
        </h2>
        <h1 className="text-7xl md:text-9xl animate-gradient Home-text font-main">
          Debt
        </h1>
        <p className="max-w-[350px] text-lg md:max-w-[600px] text-center">
          Your Trusted Partner for Smart Borrowing!
        </p>
        <Link to="/app">
          <button className="bg-[#2a56fe] text-white px-3 py-1">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;

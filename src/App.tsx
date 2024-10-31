import { useState } from "react";
import { Form } from "./components/Form";
// import { Header } from "./components/Header";
import { Results } from "./components/Results";
import { AppContext } from "./context";
import { IState } from "./model";

const initialState: IState = {
  principalAmount: 0,
  interestAmount: 0,
  totalAmount: 0,
  monthlyPayment: 0,
  weeklyPayment: 0,
  currency: "INR",
};

function App() {
  const [state, dispatch] = useState(initialState);

  return (
    <div>
      {/* <header>
        <Header />
      </header> */}
      <AppContext.Provider value={{ state, dispatch }}>
        <main>
          <section>
            <div className="md:flex  items-center justify-center w-auto m-auto">
              <div className="w-2/6">
                <Form />
              </div>
              <div>
                <Results />
              </div>
            </div>
          </section>
        </main>
      </AppContext.Provider>
    </div>
  );
}

export default App;

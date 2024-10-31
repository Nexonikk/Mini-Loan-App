import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import App from "./App";

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/app" element={<App />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Root;

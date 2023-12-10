import { useReducer } from "react";
import "./App.css";
import Button from "./components/Button";
import Main from "./components/Main";

const initialState = {
  balance: 0,
  isDisabled: true,
};

const reducer = function (state, action) {
  //
  switch (action.type) {
    case "openAccount":
      return { ...state, balance: 500, isDisabled: false };
    case "hola":
      return { ...state, balance: 5000 };

    default:
      return {};
  }
};

function App() {
  const [{ balance, isDisabled }, dispatch] = useReducer(reducer, initialState);

  console.log(balance);

  return (
    <Main>
      <h1>Simple Bank</h1>
      <p>Balance: {balance}</p>
      <p>Loan: X</p>

      <button
        disabled={isDisabled ? false : true}
        onClick={() => dispatch({ type: "openAccount" })}
      >
        Open account
      </button>

      <button disabled={isDisabled}>Deposit</button>
      <button disabled={isDisabled}>withdraw</button>
      <button disabled={isDisabled}>request a loan of 5000</button>
      <button disabled={isDisabled}>pay loan</button>
      <button disabled={isDisabled}>close account</button>
    </Main>
  );
}

export default App;

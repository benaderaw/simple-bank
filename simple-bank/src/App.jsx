import { useReducer } from "react";
import "./App.css";
// import Button from "./components/Button";
import Main from "./components/Main";

const initialState = {
  balance: 0,
  isDisabled: true,
  loanBalance: 0,
};

const DEPOSIT_AMOUNT = 150;
const WITHDRAW_AMOUNT = 50;
const LOAN_AMOUNT = 5000;

const reducer = function (state, action) {
  //
  switch (action.type) {
    case "openAccount":
      return { ...state, balance: 500, isDisabled: false };
    case "deposit":
      return { ...state, balance: state.balance + DEPOSIT_AMOUNT };
    case "withdraw":
      return { ...state, balance: state.balance - WITHDRAW_AMOUNT };

    case "loanRequest":
      return {
        ...state,
        balance: state.balance + LOAN_AMOUNT,
        loanBalance: LOAN_AMOUNT,
      };
    case "payLoan": {
      const remainingLoanBalance =
        state.balance < LOAN_AMOUNT ? state.balance : LOAN_AMOUNT;

      return {
        ...state,
        balance: state.balance - remainingLoanBalance,
        loanBalance: 0,
      };
    }

    case "closeAccount":
      return { ...state, ...initialState };

    default:
      return {};
  }
};

function App() {
  const [{ balance, isDisabled, loanBalance }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <Main>
      <h1>Simple Bank</h1>
      <p>Balance: {balance}</p>
      <p>Loan: {loanBalance}</p>

      <button
        disabled={isDisabled ? false : true}
        onClick={() => dispatch({ type: "openAccount" })}
      >
        Open account
      </button>

      <button
        disabled={isDisabled}
        onClick={() => dispatch({ type: "deposit" })}
      >
        Deposit {isDisabled ? "" : DEPOSIT_AMOUNT}
      </button>

      <button
        disabled={isDisabled}
        onClick={() => {
          if (balance === 0) return;

          dispatch({ type: "withdraw" });
        }}
      >
        withdraw {isDisabled ? "" : WITHDRAW_AMOUNT}
      </button>

      <button
        disabled={isDisabled}
        onClick={() => {
          if (loanBalance > 0) return;
          dispatch({ type: "loanRequest" });
        }}
      >
        request a loan {isDisabled ? "" : "of " + LOAN_AMOUNT}
      </button>

      <button
        disabled={isDisabled}
        onClick={() => {
          if (loanBalance === 0) return;

          dispatch({ type: "payLoan" });
        }}
      >
        pay loan
      </button>

      <button
        disabled={isDisabled}
        onClick={() => dispatch({ type: "closeAccount" })}
      >
        close account
      </button>
    </Main>
  );
}

export default App;

import "./App.css";
import Button from "./components/Button";
import Main from "./components/Main";

function App() {
  return (
    <Main>
      <h1>Simple Bank</h1>
      <p>Balance: X</p>
      <p>Loan: X</p>

      <Button>Open account</Button>
      <Button>Deposit</Button>
      <Button>withdraw</Button>
      <Button>request a loan of 5000</Button>
      <Button>pay loan</Button>
      <Button>close account</Button>
    </Main>
  );
}

export default App;

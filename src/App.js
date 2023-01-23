import Result from "./Result"
import Select from "./Select"
import { useState } from "react"
import { currencies } from "./currency";
import {Button} from "./styled"





function App() {

  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies.find(({ short }) => short === currency).rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  };

  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const onButtonClick = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };





  return (
    <>
      <form className="js-form">
        <div className="container">
          <div className="container__title">VOID</div>
          <fieldset className="fieldset">
            <legend className="fieldset_legend">Currency Convert</legend>
            <div className="fieldset__currencyPlace">
              <label className="fieldset__label ">Zloty</label>
              <input
              type="number"
                value={amount}
                onChange={({ target }) => setAmount(target.value)}
                className="fieldset__input js-amount"
              />
            </div>
            <Select
              currency={currency}
              currencies={currencies}
              setCurrency={setCurrency}
            />
            <Button className="submitButton"
              onClick={onButtonClick}

            > Submit </Button>
            <Result
              result={result} />
          </fieldset>
        </div>
      </form>
    </>
  );
};

export default App;

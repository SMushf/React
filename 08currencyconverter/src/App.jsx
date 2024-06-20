/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import Inputs from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState()
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState()

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }
  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen bg-cover bg-[url('./src/assets/bgTechnical.jpg')]">
        <div className="w-1/2 h-4/6 border-2 bg-opacity-60 rounded-2xl backdrop-blur-md bg-gray-100 flex gap-4 flex-col items-center justify-center">
          <form onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}>
            <div className="w-full mb-1">
              <Inputs label="From" amount={amount} selectCurrency={from} currencyOptions={options} onCurrencyChange={(currency) => {setFrom(currency)}} onAmountChange={(amount) => setAmount(amount)}/>
            </div>
            <div className="relative w-full h-0.5">
              <button type="button" className="absolute left-64 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5" onClick={swap}>
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <Inputs label="To" amount={convertedAmount} currencyOptions={options} onCurrencyChange={(currency) => setTo(currency)} selectCurrency={to} amountDisable/>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-xl" onClick={convert}>
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>    
    </>
  );
}

export default App
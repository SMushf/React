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

// Get Data from custom hook useCurrencyInfo functionality
  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

// Swap button functionality
  const swap = () => {
    setFrom(to)
    setTo(from)
  }

// Convert button functionality
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
              <Inputs label="From" amount={amount} selectCurrency={from} currencyOptions={options} onCurrencyChange={(currency) => {setFrom(currency)}} onAmountChange={(amount) => setAmount(amount)} placerHolder="Enter Amount"/>
            </div>
            <div className="relative w-full h-9">
              <button type="button" className="absolute left-64 top-1 border-none
               rounded-lg bg-blue-600 text-white px-5 py-0.5 active:bg-purple-700" onClick={swap}>
                swap ⇅
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <Inputs label="To" amount={convertedAmount} currencyOptions={options} onCurrencyChange={(currency) => setTo(currency)} selectCurrency={to} amountDisable/>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-xl hover:bg-blue-700 hover:drop-shadow-md active:bg-purple-700" onClick={convert}>
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>    
    </>
  );
}

export default App
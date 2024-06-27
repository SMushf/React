/* eslint-disable react/prop-types */
import {useId} from "react"

function Inputs({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    placerHolder,
    className = ""
}) {
  const amountInputId = useId()

  return (
    <div className={` shadow-xl shadow-purple-500 backdrop-blur-sm p3 rounded-md w-4/3 text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 m-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          type="number"
          className="outline-none w-full bg-transparent p-1.5 m-2 mt-1 bg-purple-100 drop-shadow-md rounded-md"
          value={amount}
          disabled={amountDisable}
          min={0}
          placeholder={placerHolder}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 m-2 w-full">Currency Type</p>
        <select
          className="px-1 py-1 m-2 bg-gray-100 rounded-md cursor-pointer outline-none"
          value={selectCurrency}
          disabled={currencyDisable}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}>
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
}

export default Inputs

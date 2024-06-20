import { useState, useCallback, useEffect, useRef} from 'react'

function App() {
  //Use useState Hook to act on click
  const [length, setLength] = useState(6)
  const [withNumber, setWithNumber] = useState(false)
  const [withSymbols, setWithSymbols] = useState(false)
  const [password, setPassword] = useState("")

  //Use useRef Hook to provide referance of text input
  const passwordRef = useRef(null)
 
  //Use useCallback Hook to generate password with different sources i.e. with string, numbers and symbols
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABDEFGHIJKLMNOPQRSTUWXYZabcdefghijklmnopqrstuvwxyz";
    if (withNumber) str += "1234567890";
    if (withSymbols) str += "!@#$%*+=?/";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, withNumber, withSymbols, setPassword]);

  // Use useCallback Hook to copied the password from text input
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password);
  }, [password]);

  //Use useEffect Hook to run the callback function 
  useEffect(() => {
    passwordGenerator();
  }, [length, withNumber, withSymbols, passwordGenerator]);

  return (
    <>
      <div className="grid justify-items-center flex items-center h-screen w-full bg-gray-900">
        <div className="h-80 w-2/5 bg-white rounded-xl grid justify-items-center ">
          <div className="text-gray-600 font-serif text-4xl mt-5 ">
            Password Generator
          </div>
          <div className="">
            <input
              type="text"
              className="bg-gray-200 h-10 w-80 rounded-xl my-6 mr-4 outline-0 pl-5"
              value={password}
              ref={passwordRef}
              readOnly
            />
            <button
              className="bg-blue-400 h-10 w-20 rounded-xl my-6 mr-4 text-white hover:bg-blue-600"
              onClick={copyPasswordToClipboard}
            >
              copy
            </button>
          </div>
          <div className="space-x-12 flex items-start">
            <div>
              <input
                type="range"
                min="6"
                max="15"
                className="w-40 outline-none cursor-pointer"
                value={length}
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <br />
              <label>Characters: {length}</label>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="numbers"
                name="numbers"
                className="w-6 h-6 mr-1"
                defaultChecked={withNumber}
                onChange={() => {
                  setWithNumber((prevPass) => !prevPass);
                }}
              />
              <label htmlFor="numbers">Numbers</label>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="symbols"
                name="symbols"
                className="w-6 h-6 mr-1"
                defaultChecked={withSymbols}
                onChange={() => {
                  setWithSymbols((prev) => !prev);
                }}
              />
              <label htmlFor="symbols">Symbols</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App

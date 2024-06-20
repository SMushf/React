import { useState } from 'react'

function App() {
  let [bgChanger, setBg] = useState("transparent")

  return (
    <>
      <div id='bgColor' className='h-screen width-full grid grid-cols-0 gap-4 place-items-center h-56 flex space-x-10' style={{backgroundColor: bgChanger}}>

        <div className='flex space-x-10'>
          <button className='rounded-md hover:bg-white hover:text-black bg-violet-400 p-2 w-40 text-white font-sans text-xl ' onClick= {() => setBg('#A78BFA')}>violet</button>
          <button className='rounded-md hover:bg-white hover:text-black bg-indigo-700 p-2 w-40 text-white font-sans text-xl ' onClick= {() => setBg('#4338CA')}>indigo</button>
          <button className='rounded-md hover:bg-white hover:text-black bg-blue-400 p-2 w-40 text-white font-sans text-xl ' onClick= {() => setBg('#60A5FA')}>blue</button>
          <button className='rounded-md hover:bg-white hover:text-black bg-green-400 p-2 w-40 text-white font-sans text-xl ' onClick= {() => setBg('#4ADE80')}>green</button>
          <button className='rounded-md hover:bg-white hover:text-black bg-yellow-400 p-2 w-40 text-white font-sans text-xl ' onClick= {() => setBg('#FACC15')}>yellow</button>
          <button className='rounded-md hover:bg-white hover:text-black bg-orange-400 p-2 w-40 text-white font-sans text-xl ' onClick= {() => setBg('#FB923C')}>orange</button>
          <button className='rounded-md hover:bg-white hover:text-black bg-red-400 p-2 w-40 text-white font-sans text-xl ' onClick= {() => setBg('#F87171')}>red</button>
          <button className='rounded-md hover:bg-white hover:text-black bg-black p-2 w-40 text-white font-sans text-xl ' onClick= {() => setBg('black')}>black</button>
        </div>
        
      </div>
    </>
  )
}

export default App

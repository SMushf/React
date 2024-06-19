import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

let objInfo ={
  Musharraf: {
    userName: "Musharraf",
    age: 23,
    image: "./src/assets/profilePic.jpg"
  },
  Saher: {
    userName: "Saher",
    age: 20,
    image: "./src/assets/logo.png"
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App userName={objInfo.Musharraf.userName} image={objInfo.Musharraf.image} age={objInfo.Musharraf.age}/>
    <App userName={objInfo.Saher.userName} image={objInfo.Saher.image} age={objInfo.Saher.age}/>
    <App />
  </React.StrictMode>,
)

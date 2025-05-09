import { useState, useEffect } from 'react'
import axios from "axios"
import Card from "./components/Card"

function App() {

  const [politici, setPolitici] = useState([])

  useEffect(() => {
    axios("http://localhost:5001/politicians")
      .then(response => {
        setPolitici(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        console.error("Errore durante il fetch:", error)
      })
  }, [])




  return (
    <>
      <div className="container">
        <Card politici={politici}/>
      </div>
    </>
  )
}

export default App

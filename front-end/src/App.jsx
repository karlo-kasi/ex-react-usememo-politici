import { useState, useEffect, useMemo } from 'react'
import axios from "axios"
import Card from "./components/Card"

function App() {

  const [politici, setPolitici] = useState([])
  const [input, setInput] = useState("")

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

  const filteredPolitici = useMemo(() => {
    return politici.filter((politico) => {
      const nomeP = politico.name.toLowerCase().includes(input.toLowerCase())
      const bioP = politico.biography.toLowerCase().includes(input.toLowerCase())
      return nomeP || bioP
    })
  }, [politici, input])





  return (
    <>

      <div className='container'>
        <div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>



        <div className="container">
          <div className="row">
            {
              filteredPolitici.map((politici) => {
                return (
                  <Card key={politici.id} {...politici} />
                )
              })
            }
          </div>
        </div>
      </div>

    </>
  )
}

export default App

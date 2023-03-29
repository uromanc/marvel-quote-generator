import { useState } from 'react';
import './App.css';
import { NotQuote } from './NotQuote';
import { Quote } from './Quote';

function App() {
  const [quote, setQuote] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const fetchQuoteData = async () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'ccf972d791mshef51cf2041643d2p16d1b5jsn1dc8c9053fe9',
        'X-RapidAPI-Host': 'marvel-quote-api.p.rapidapi.com'
      }
    }
    fetch('https://marvel-quote-api.p.rapidapi.com/', options).then(resp => {
      return resp.json()
    }).then(data => {
      setQuote(data)
      setIsLoading(false)
    })
  }
  return (
    <div className='container'>
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg" alt="marvel logo" />
      <h1 className='title'>Random Quote Generator</h1>
      {
        isLoading ? <NotQuote /> : <Quote quote={quote.Quote} speaker={quote.Speaker} title={quote.Title}/>
      }
      <button onClick={fetchQuoteData} className='btn'>Generate Quote</button>
    </div>
  )
}

export default App

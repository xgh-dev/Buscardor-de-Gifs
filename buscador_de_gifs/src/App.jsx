import { useState } from 'react'
import AddCategory from './components/AddCategory'
import DisplayGifs from './components/DisplayGifs';
import './App.css'

//api key: jtnJKSoEW38w7R1CRZVz5WUkpTxUldKg
//gif url: api.giphy.com/v1/gifs/search	


function App() {
  const [category,setCategory] = useState('');

  return (
    <>
      <div className='App'>
        <h2>Main component</h2>
        <AddCategory setCategory={setCategory}/>
        <DisplayGifs category={category}/>
      </div>
    </>
  )
}

export default App

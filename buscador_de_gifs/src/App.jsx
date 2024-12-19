import { useState } from 'react'
import AddCategory from './components/AddCategory'
import DisplayGifs from './components/DisplayGifs';
import './App.css'

//api key: jtnJKSoEW38w7R1CRZVz5WUkpTxUldKg
//gif url: api.giphy.com/v1/gifs/search	


function App() {
  const [category,setCategory] = useState('');

  const apiKey = 'VDrT08ZDURrHK9LuQk59v4j00tVgJf5c'
  //definir el endPoint de la api
  const urlApi = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=5`;


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

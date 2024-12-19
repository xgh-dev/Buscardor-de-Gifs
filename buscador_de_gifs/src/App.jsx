import { useState } from "react";
import AddCategory from "./components/AddCategory";
import DisplayGifs from "./components/DisplayGifs";
import "./App.css";

function App() {
  const [category, setCategory] = useState("");

  return (
    <>
      <div className="App">
        <h2>Buscardor de Gifs</h2>
        <AddCategory setCategory={setCategory} />
        {/* Llama a la función en lugar de pasarla directamente */}
        {/* category !== "" && <DisplayGifs category={category} /> */}
        {category !== '' ? (<DisplayGifs category={category} />):null}
      </div>
    </>
  );
}

export default App;



/*


*/
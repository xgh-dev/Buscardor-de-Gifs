import { useState } from "react";


const AddCategory = ({setCategory}) => {
    const [value,setValue] = useState('')
    const [error,setError] = useState(false)

    const buscarGif = (e) => {
        e.preventDefault()
        //validacion
        if (value === ''){
            setError(true);
            return;
        }
       // console.log(value)
        setError(false)
        setCategory(value)
        setValue('')
    }

    return (
        <>
        <form onSubmit={buscarGif}>
            <input type="text" placeholder="Buscar..." onChange={e => setValue(e.target.value)} value={value}/>
            <input type="submit" className="buscarInput" value='Enviar'/>
        </form>
        {error ? <p className="error">El campo no puede estar vacio</p>:''}
        </>
    )
}

export default AddCategory;

//Ejercicio #3 Crea un formulario donde
// puedas manejar eventos y estados
//ustp


import { useState } from "react"

//Se crea el componente con tres estados
const OneForm = () => {
    const [firstName, setfirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState(0)

    //Se crea las tre funciones que estarán en cada evento onChange
    const handleFirstNameChange = (event)=>{
        setfirstName(event.target.value)
        
    }

    const handleLastNameChange = (event)=>{
        setLastName(event.target.value)
        
    }

    const handleSetAgeChange = (event)=>{
        setAge(event.target.value)
        
    }



    //Se crea la función para quitar el refresh por defecto de l formulario
    const handleSubmitForm = (event)=>{
        event.preventDefault()
        console.log(firstName,lastName,age)

    }
   // Se crea la función que limpia los inputs
    const handleCleanInputClick = ()=>{
        setfirstName('')
        setLastName('')
        setAge('')

    }

  return (
    <form onSubmit={handleSubmitForm}>
        <label>
            Nombre(s)
            <input value={firstName} onChange={handleFirstNameChange} />
        </label>
        <br />
        <label>
            Apellido
            <input value={lastName}  onChange={handleLastNameChange}/>
        </label>
        <br />
        <label>
            Edad
            <input value={age}  onChange={handleSetAgeChange}/>
        </label>
        <br />
        <button type="submit">Enviar datos</button>
        <button type="reset" onClick={handleCleanInputClick}>Reset</button>
            
    </form>
  )
}

export default OneForm
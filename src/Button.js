import React, { useState } from 'react'

const Button = () => {

    const [name,setName] = useState("")
    const [inputName, setInputName] = useState("")

    const handleInputChange = (e) => {
        setInputName(e.target.value)
    }

    const handleSubmit = (e) => {
        setName(e.target.value)
    }
  return (
    <div>
        Name:
        <input type="text"
        onChange={handleSubmit}/>
        <button type="submit" onClick={handleSubmit}>Submit</button>
        <br/>
        YOur name is: <label>{name}</label>

    </div>
  )
}

export default Button

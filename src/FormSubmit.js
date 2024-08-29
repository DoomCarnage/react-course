import React,{useState} from 'react'

const FormSubmit = () => {

    const [inputBox, setInputBox] = useState("")
    const [name, setName] = useState("")

    const handleFormSubmit = (e) => {
        setInputBox(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert("There will be a browser reload once the alert box is closed.")
        setName(inputBox)
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
            Name:
            <input type="text" value={inputBox} onChange={handleFormSubmit} />
        </label>
        <input type="submit" value="Submit" />
        <br/>
        <label>{name}</label>
      </form>
    </div>
  )
}

export default FormSubmit

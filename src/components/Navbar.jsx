import React, { useState } from 'react'

const Navbar = ({ input }) => {
  
  const [data, setData] = useState('')
  
  const submit = (event) => {

    event.preventDefault()
    input(data)
    setData('')
  }
  
  return (
    <nav>
      <form onSubmit={(event) =>submit(event)}>
          <input type="text" placeholder='enter city' name='input' autoComplete='off' value={data} onChange={(event) => setData(event.target.value)} />          
      </form>
    </nav>
  )
}

export default Navbar
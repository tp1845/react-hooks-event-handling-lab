import React from 'react'

function Keypad() {

  function handleChange() {
    console.log("Entering password...")
  }

  return (
    <input type="password" onChange={handleChange} />
  )
}

export default Keypad
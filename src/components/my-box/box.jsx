import React from 'react'
import './box.css'

export const Box = ({ placeholder, handleChanges, handleSubmit }) => (

  <div>
    <input type="search"
      className="search color"
      placeholder={placeholder}
      onChange={handleChanges}

    />
    <button onClick={handleSubmit}>Submit</button>

  </div>

)






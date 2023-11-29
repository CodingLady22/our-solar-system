import React from 'react'

function Moon(props) {
  return (
    <div className='moon' id='moonComponent'>
        <h3>{props.name}</h3>
        <small>{props.diameter}</small>
        <p>{props.history}</p>
    </div>
  )
}

export default Moon
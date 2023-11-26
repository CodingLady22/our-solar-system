import React from 'react'
import "../../App.css"

function Footer() {

    let year = new Date().getFullYear()
  return (
    <div className='footer'>
        &copy; Our Solar System {year}
    </div>
  )
}

export default Footer
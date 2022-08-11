import React from 'react' 

const Footer = ({descripcion}) => {
  return (
    <div className='footer'>
        <p>&copy; {descripcion}</p>
    </div>
  )
}

export default Footer
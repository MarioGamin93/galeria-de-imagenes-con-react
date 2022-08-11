import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button"; 

const Card = ({direccion, titulo, descripcion}) => {
  return (
    <div className='card'>
       <img src={direccion} alt="imgen" />
       <h2> {titulo} </h2>
       <p> {descripcion} </p>
       <Button variant="secondary">Ver más</Button>
    </div>
  )
}

export default Card
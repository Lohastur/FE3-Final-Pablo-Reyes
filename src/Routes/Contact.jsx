import React from 'react'
import Form from '../Components/Form'
import { useContextGlobal } from '../Components/utils/global.context'

const Contact = () => {
  const {theme} = useContextGlobal();
  return (
    <div className='container-form' id={theme.theme}>
      <h2>¿Quieres saber más?</h2>
      <p>Envíanos tu pregunta y te contactaremos a la brevedad</p>
      <Form/>
    </div>
  )
}

export default Contact
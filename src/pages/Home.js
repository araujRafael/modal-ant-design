import { Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { useModalContext } from '../context/Modal.context'
import Modal from './Modal'

function Home() {
  // const [visibleModal , setVisibleModal] = useState(false)
  const { openModal, isConfirm, setIsConfirm } = useModalContext()
  const [send, setSend] = useState(false)

  // Event
  // const displayModal = () => setVisibleModal(!visibleModal)
  const testModal = () => openModal({ message: 'Aperter em ok para confirmar' })

  // Auxiliary
  useEffect(() => {
    if (isConfirm) {
      console.log('Modal Confirmado', isConfirm);
      setSend(!send)
      setIsConfirm(false)
    }
  })

  return (
    <div style={{width:'100vw',height:'100vh' ,display: 'flex', flexDirection:'column' , justifyContent: 'center' , alignItems:'center'}}>
      <h1>Olá mundo</h1>
      <Button onClick={testModal} type='primary'>
        Clicar
      </Button>

      {send ? (<h1>Confirmado</h1>) : ''}

      {<Modal />}
    </div>
  )
}

export default Home

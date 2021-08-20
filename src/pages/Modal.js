import React from 'react'
import { Modal as ModalComponent } from 'antd'
import { useModalContext } from '../context/Modal.context'


function Modal(){
 const { modalState: {message , visible}, closeModal,confirmModal } = useModalContext()

  return (
    <ModalComponent onCancel={closeModal} onOk={confirmModal} visible={visible}>
      <p>{message}</p>
    </ModalComponent>
  )
}

export default Modal

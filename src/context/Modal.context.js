import React, { createContext, useContext, useState } from 'react'


// Context
const ModalContext = createContext({})
// Provider
function ModalContextProvider({ children }) {
  const [modalState, setState] = useState({ visible: false })
  const [isConfirm, setIsConfirm] = useState(false)

  const openModal = (payload) => setState({ ...payload, visible: true })
  const closeModal = () => setState({ visible: false })
  const confirmModal = () => { 
    setIsConfirm(modalState.visible)
    closeModal()
  }

  return (
    <ModalContext.Provider value={{ modalState, openModal, closeModal, confirmModal,isConfirm , setIsConfirm }}>
      {children}
    </ModalContext.Provider>
  )
}
// Hook
const useModalContext = () => {
  const context = useContext(ModalContext)
  return context
}

export { ModalContextProvider , useModalContext }
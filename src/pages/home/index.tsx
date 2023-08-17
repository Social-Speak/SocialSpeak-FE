import Modal from '@/components/shared/modal'
import React, { useState } from 'react'

export default function index() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [openModal, setOpenModal] = useState(false)

  return (
    <div>
        <Modal setShowModal={() => setOpenModal(false)} showModal={openModal}>
                <h1>heloo</h1>
                <h1>heloo</h1>
                <h1>heloo</h1>
                <h1>heloo</h1>
                <h1>heloo</h1>
                <h1>heloo</h1>
        </Modal>

        <button className='border p-2 rounded-md' onClick={() => setOpenModal(true)}>
            Open Modal
        </button>
    </div>
  )
}

import React, { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import api from '../services/api';

function Example({ id }) {
    const [show, setShow] = useState(false);
    const [userData, setUserData] = useState()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        if (id) {
            api.get(`users/${id}`).then((res) => {
                setUserData(res.data)
                handleShow()
            })
        }
    }, [id])

    // useEffect(() => {
    //     if(userData) console.log(userData)
    // }, [userData])

    return (
        <>

            {userData &&
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Informações do Usuário</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><b>Nome:</b> {userData.name}</Modal.Body>
                    <Modal.Body><b>Email:</b> {userData.email}</Modal.Body>
                    <Modal.Body><b>whatsapp:</b> {userData.whatsapp}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                
                    </Modal.Footer>
                </Modal>}
        </>
    );
}

export default Example;
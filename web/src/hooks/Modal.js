import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import api from '../services/api';
import useFlashMessage from './useFlashMessage';


const ModalApp = ({ id, setData }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [userData, setUserdata] = useState()
    const [formData, setFormData] = useState({})
    const { setFlashMessage } = useFlashMessage()


    function handleInputChange(event) {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    }

    async function handleSubmit(event) {
        event.preventDefault()
        try {
            await api.put(`users/edit/${id}`, formData)
            setFlashMessage("Usuário Ataulizado com sucesso", "alert alert-success")

            api.get('users').then((res) => {
                setData(res.data[0])
            })

        } catch (err) {
            setFlashMessage(`Erro ao cadastrar, ${err}`, "alert alert-danger")

        }
    }

    useEffect(() => {
        if (id) {
            setShow(true)
            api.get(`users/${id}`).then((res) => {
                setUserdata(res.data)
            })
        }

    }, [id])


    return (
        <>

            {userData &&

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edição de Usuário: {userData.name} </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit} id='update'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name" placeholder="digite seu nome"
                                    defaultValue={userData.name}
                                    onChange={handleInputChange}
                                    autoFocus
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email" placeholder="name@example.com"
                                    defaultValue={userData.email}
                                    onChange={handleInputChange}
                                    autoFocus
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>whatsapp</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="whatsapp"
                                    placeholder="insira seu número"
                                    defaultValue={userData.whatsapp}
                                    onChange={handleInputChange}
                                    autoFocus
                                    required
                                />
                            </Form.Group>

                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button type='submit' form='update' variant="dark" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>

            }
        </>
    )
}

export default ModalApp
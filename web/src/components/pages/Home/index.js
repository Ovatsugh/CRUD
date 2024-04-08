import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../../../services/api"
import ListGroup from 'react-bootstrap/ListGroup';
import useFlashMessage from "../../../hooks/useFlashMessage"
import ModalApp from '../../../hooks/Modal.js'
import ModalInfo from '../../../hooks/ModalsInfo.js'

const Home = () => {
    const [dataUsers, setData] = useState([])
    const navigate = useNavigate()
    const { setFlashMessage } = useFlashMessage()
    const [userId, setuserId] = useState();
    const [key, setKey] = useState(0)
    const [userIdInfo, setuserIdInfo] = useState();
    const [keyInfo, setKeyInfo] = useState(1)


    // functions
    async function handleShow(id) {
        setKey((k) => k + 1)
        setuserId(id)

    }

    async function handleShowUserInfo(id) {
        setKeyInfo((k) => k + 1)
        setuserIdInfo(id)

    }

    function handleGoToAbout() {
        navigate('/cadastrar')
    }

    function handleDelete(id) {
        api.delete(`users/${id}`).then(() => {
            setFlashMessage("Usuário deletado com sucesso", "alert alert-success")
        }).catch((err) => {
            setFlashMessage(`Erro ao excluir, ${err}`, "alert alert-danger")
            return
        })
        const updatedUsuarios = dataUsers.filter(user => user._id !== id)
        setData(updatedUsuarios);
    }


    useEffect(() => {
        api.get('users').then((res) => {
            setData(res.data[0])
        })
    }, [])


    return (
        <>  
            <ModalInfo key={keyInfo} id={userIdInfo} />
            <ModalApp key={key} id={userId} setData={setData} />

            <div className="home-container">
                <h1 className="title">
                    Lista de Usuários
                </h1>

                {dataUsers.map(data => (
                    <ListGroup key={data._id} as="ol">
                        <ListGroup.Item as="li" id="list">
                            {data.name}
                            <div className="listcontainer">
                                <button id="actions" type="button" className="btn btn-danger" onClick={() => handleDelete(data._id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                                    </svg>
                                </button>
                                <button id="actions" type="button" className="btn btn-secondary" onClick={() => handleShowUserInfo(data._id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                                    </svg>
                                </button>
                                <button onClick={() => handleShow(data._id)} id="actions" type="button" className="btn btn-warning">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                                    </svg>
                                </button>
                            </div>

                        </ListGroup.Item>

                    </ListGroup>
                ))}
                <button id="createUser" onClick={handleGoToAbout} className="btn btn-dark">Cadastre um usuário</button>

            </div>

        </>
    )
}

export default Home
import React from "react"
import { useNavigate } from "react-router-dom"
import useFlashMessage from "../../../hooks/useFlashMessage"
import { useState } from "react"
import api from '../../../services/api.js'

const Cadastrar = () => {
    const navigate = useNavigate()
    const { setFlashMessage } = useFlashMessage()
    const [formData, setFormData] = useState({})

    //functions
    function handleInputChange(event) {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    }

    async function handleSubmit(event) {
        event.preventDefault();
        api.post('users/create', formData).then(() => {
            setFlashMessage("Usuário Cadastrado com sucesso", "alert alert-success")
            navigate('/')
        }).catch((err) => {
            setFlashMessage(`Erro ao cadastrar, ${err}`, "alert alert-danger")
        })

    }


    return (
        <>
            <div className="form-container">
                <h1 className="title">Cadastro do Usuário</h1>
                <form className=".form-container" onSubmit={handleSubmit} >
                    <div className="form-group">
                        <label required htmlFor="Nome">Nome</label>
                        <input name="name" onChange={handleInputChange} type="text" className="form-control" id="Nome" placeholder="insira seu nome" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input name="email" onChange={handleInputChange} type="email" className="form-control" id="email" placeholder=" digite seu email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="whatsapp">Whatsapp</label>
                        <input name="whatsapp" onChange={handleInputChange} type="number" className="form-control" id="whatsapp" placeholder="digite seu whatsapp" required />
                    </div>

                    <button id="buttonCreate" type="submit" className="btn btn-dark">Cadastrar</button>
                </form>
            </div>


        </>
    )
}

export default Cadastrar
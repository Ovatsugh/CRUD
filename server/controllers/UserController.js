import User from '../models/UserModel.js'

export default class UserController {
    static async showUsers(req, res) {
        const Allusers = []
        try {
            const users = await User.find()
            Allusers.push(users)
        } catch (err) {
            return res.status(400).json({ message: `Erro: ${err}` })
        }
        res.status(200).json(Allusers)
    }

    static async createUser(req, res) {
        const { name, email, whatsapp } = req.body

        try {
            await User.create({ name, email, whatsapp })
        } catch (err) {
            return res.status(400).json({ message: `Erro: ${err}` })
        }

        res.status(200).json({ message: "Usuário criado com sucesso" })
    }

    static async editUser(req, res) {
        const id = req.params.id
        const { name, email, whatsapp } = req.body
        try {
            await User.findByIdAndUpdate(id, { name, email, whatsapp })
        } catch (err) {
            return res.status(400).json({ message: `Erro: ${err}` })

        }
        return res.status(200).json({ message: "Usuário editado com sucesso", name, email, whatsapp })

    }

    static async deleteUser(req, res) {
        const id = req.params.id
        try {
            await User.findByIdAndDelete(id)
        } catch (err) {
            return res.status(400).json({ message: `Erro: ${err}` })

        }

        return res.status(200).json({ message: "Usuário deletado com sucesso" })
    }

    static async showOneUser(req, res) {
        const id = req.params.id

        try {
            const user = await User.findById({ _id: id })
            res.status(200).json({id: user._id, name: user.name, email: user.email, whatsapp: user.whatsapp })
        } catch (err) {
            return res.status(400).json({ message: `Erro: ${err}` })
        }
    }
}
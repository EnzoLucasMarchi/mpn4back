import jwt from 'jsonwebtoken'
import { SECRET_KEY } from '../config/config.js'
import bcrypt from 'bcrypt'
import User from '../models/User.js'

export const register = async (req, res) => {
  try {
    const { email, pass } = req.body

    if (!email || !pass) {
      return res.status(400).json({ message: 'Rellene todos los campos' })
    }

    const passwordValidation = /^(?=.*[A-Z]).{8,}$/
    if (!passwordValidation.test(pass)) {
      return res.status(400).json({ message: 'La contraseña debe tener al menos 8 caracteres y al menos una letra mayúscula' })
    }

    const existingUser = await User.userLog(email)

    if (existingUser.length > 0) {
      return res.status(400).json({ message: 'Este correo electronico ya esta registrado' })
    }

    const result = await User.create(email, pass)

    if (result.affectedRows === 1) {
      return res.status(201).json({ message: 'Registro exitoso' })
    }

    res.status(500).json({ message: 'Error al registrarse' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const login = async (req, res) => {
  try {
    const { email, pass } = req.body

    if (!email || !pass) return res.status(400).json({ message: 'Rellene todos los campos' })

    const result = await User.userLog(email)

    if (result.length === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' })
    }

    const user = result[0]

    const isValid = await bcrypt.compare(pass, user.pass)

    if (isValid) {
      const token = jwt.sign({ userId: user.userId }, SECRET_KEY, {
        expiresIn: '1h'
      })
      return res.json({ message: 'Login exitoso', token })
    } else {
      return res.status(400).json({ message: 'Credenciales inválidas' })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const myProfile = async (req, res) => {
  try {
    const { authorization } = req.headers
    const decoded = jwt.verify(authorization, SECRET_KEY)

    const user = await User.getUser(decoded.userId)

    res.json(user[0])
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

import jwt from 'jsonwebtoken'
import { SECRET_KEY } from '../config/config.js'

export const verifyToken = (req, res, next) => {
  try {
    const { authorization } = req.headers
    if (!authorization) return res.status(401).json({ message: 'Token no encontrado' })

    jwt.verify(authorization, SECRET_KEY)
    next()
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({ message: 'Token expirado' })
    }

    res.status(500).json({ message: 'Error en el token' })
  }
}

export const corsAuth = (req, res, next) => {
  const { origin } = req.headers
  const allowedOrigins = ['http://localhost:5173','http://localhost:5173/','http://localhost:3000', 'http://localhost:3000/']

  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin)
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    next()
  } else {
    res.status(401).json({ message: 'No admitido' })
  }
}

import { pool } from '../config/db.js'
import bcrypt from 'bcrypt'

class User {
  async getUser(id) {
    try {
      const [user] = await pool.execute(
        'SELECT * FROM users WHERE userId = ?',
        [id]
      )
      return user
    } catch (error) {
      throw new Error('Error al obtener datos')
    }
  }

  async userLog(email) {
    try {
      const [user] = await pool.execute(
        'SELECT * FROM users WHERE email = ?',
        [email]
      )
      return user
    } catch (error) {
      throw new Error('Error al obtener datos')
    }
  }

  async create(email, pass) {
    try {
      const hashedPassword = await bcrypt.hash(pass, 10)
      const [result] = await pool.execute(
        'INSERT INTO users(email, pass) VALUES (?, ?)',
        [email, hashedPassword]
      )
      return result
    } catch (error) {
      throw new Error('Error al registrarse')
    }
  }
}

export default new User()
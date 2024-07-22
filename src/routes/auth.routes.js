import { Router } from 'express'
import { login, myProfile, register } from '../controllers/userController.js'
import { verifyToken } from '../middlewares/auth.middleware.js'

const router = Router()

router.post('/register', register)
router.post('/login', login)
router.post('/', login)
router.get('/profile', verifyToken, myProfile)

export default router

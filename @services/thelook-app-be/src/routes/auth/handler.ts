import { FastifyRequest, FastifyReply } from 'fastify'
import { IQuerystring, IHeaders, IReply } from './types'
import { validateAuthInput } from '../../utils/validator'
import { AuthService } from '../../services/auth-service'

const authService = new AuthService()

export async function authHandler(
  request: FastifyRequest<{
    Querystring: IQuerystring,
    Headers: IHeaders
  }>,
  reply: FastifyReply
): Promise<void> {
  try {
    const { username, password } = request.query
    const customHeader = request.headers['h-custom']
    
    // Log request untuk debugging (bisa dihapus di production)
    request.log.info({ username, customHeader }, 'Auth request received')
    
    // Validasi input
    const validationError = validateAuthInput(username, password)
    if (validationError) {
      reply.code(400).send({
        success: false,
        error: validationError
      })
      return
    }
    
    // Cek autentikasi
    const user = authService.findUser(username!, password!)
    if (!user) {
      reply.code(401).send({
        success: false,
        error: 'Invalid username or password'
      })
      return
    }
    
    // Verifikasi header jika diperlukan
    if (!authService.validateAdminAccess(user, customHeader)) {
      reply.code(403).send({
        success: false,
        error: 'Missing or invalid custom header for admin access'
      })
      return
    }
    
    // Sukses - kembalikan data user (tanpa password)
    reply.code(200).send({
      success: true,
      user: authService.sanitizeUser(user)
    })
    return
  } catch (err) {
    request.log.error(err, 'Error processing auth request')
    reply.code(500).send({
      success: false,
      error: 'Internal server error'
    })
    return
  }
}
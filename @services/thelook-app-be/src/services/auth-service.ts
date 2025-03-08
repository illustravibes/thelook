import { User } from '../routes/auth/types'
import { users } from '../models/user'

export class AuthService {
  findUser(username: string, password: string): User | undefined {
    return users.find(u => u.username === username && u.password === password)
  }

  sanitizeUser(user: User) {
    const { password, ...userWithoutPassword } = user
    return userWithoutPassword
  }

  validateAdminAccess(user: User, customHeader?: string): boolean {
    return !(user.role === 'admin' && customHeader !== 'secret-admin-key')
  }
}

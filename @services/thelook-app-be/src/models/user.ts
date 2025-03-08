import { User } from '../routes/auth/types'

// Mock database untuk contoh
export const users: User[] = [
  { id: 1, username: 'admin', password: 'admin123', role: 'admin' },
  { id: 2, username: 'user', password: 'user123', role: 'user' }
]

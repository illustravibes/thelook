export const validateAuthInput = (username?: string, password?: string): string | null => {
    if (!username) return 'Username is required'
    if (!password) return 'Password is required'
    if (username.length < 3) return 'Username must be at least 3 characters'
    if (password.length < 6) return 'Password must be at least 6 characters'
    return null
  }
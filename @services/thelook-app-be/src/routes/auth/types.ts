export interface IQuerystring {
    username?: string
    password?: string
  }
  
  export interface IHeaders {
    'h-custom'?: string
  }
  
  export interface IReply {
    success: boolean
    user?: {
      id: number
      username: string
      role: string
    }
    error?: string
  }
  
  export interface User {
    id: number
    username: string
    password: string
    role: string
  }
  
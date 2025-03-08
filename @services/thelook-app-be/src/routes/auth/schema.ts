export const authSchema = {
    querystring: {
      type: 'object',
      properties: {
        username: { type: 'string' },
        password: { type: 'string' }
      }
    },
    response: {
      200: {
        type: 'object',
        properties: {
          success: { type: 'boolean' },
          user: {
            type: 'object',
            properties: {
              id: { type: 'number' },
              username: { type: 'string' },
              role: { type: 'string' }
            }
          }
        }
      },
      400: {
        type: 'object',
        properties: {
          success: { type: 'boolean' },
          error: { type: 'string' }
        }
      },
      401: {
        type: 'object',
        properties: {
          success: { type: 'boolean' },
          error: { type: 'string' }
        }
      },
      403: {
        type: 'object',
        properties: {
          success: { type: 'boolean' },
          error: { type: 'string' }
        }
      },
      500: {
        type: 'object',
        properties: {
          success: { type: 'boolean' },
          error: { type: 'string' }
        }
      }
    }
  }
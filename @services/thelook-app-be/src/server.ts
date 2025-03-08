import { buildApp } from './app'

async function start() {
  const server = buildApp({
    logger: {
      level: process.env.LOG_LEVEL || 'info'
    }
  })
  
  try {
    await server.listen({ port: 3000, host: '0.0.0.0' })
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()
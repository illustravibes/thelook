import Fastify, { FastifyInstance } from 'fastify'
import authPlugin from './plugins/auth-plugin'

export function buildApp(options = {}): FastifyInstance {
  const fastify = Fastify(options)
  
  // Register plugins
  fastify.register(authPlugin)
  
  return fastify
}
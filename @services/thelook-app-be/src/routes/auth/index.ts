import { FastifyInstance } from 'fastify'
import { authHandler } from './handler'
import { authSchema } from './schema'
import { IQuerystring, IHeaders, IReply } from './types'

export default async function authRoutes(fastify: FastifyInstance) {
  fastify.route({
    method: 'GET',
    url: '/auth',
    schema: authSchema,
    handler: authHandler
  })
}
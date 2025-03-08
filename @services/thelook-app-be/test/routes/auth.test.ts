// test/routes/auth.test.ts
import { test } from 'tap'
import { buildApp } from '../../src/app'

test('Auth Route Tests', async (t) => {
  // Test 1: Sukses login sebagai user biasa
  t.test('Successful login as user', async (t) => {
    const app = buildApp({ logger: false })
    
    const response = await app.inject({
      method: 'GET',
      url: '/auth',
      query: {
        username: 'user',
        password: 'user123'
      }
    })
    
    t.equal(response.statusCode, 200)
    const payload = JSON.parse(response.payload)
    t.equal(payload.success, true)
    t.equal(payload.user.username, 'user')
    t.equal(payload.user.role, 'user')
    t.notOk(payload.user.password, 'Password should not be included in response')
  })
  
  // Test 2: Sukses login sebagai admin dengan header yang benar
  t.test('Successful login as admin with correct header', async (t) => {
    const app = buildApp({ logger: false })
    
    const response = await app.inject({
      method: 'GET',
      url: '/auth',
      query: {
        username: 'admin',
        password: 'admin123'
      },
      headers: {
        'h-custom': 'secret-admin-key'
      }
    })
    
    t.equal(response.statusCode, 200)
    const payload = JSON.parse(response.payload)
    t.equal(payload.success, true)
    t.equal(payload.user.username, 'admin')
    t.equal(payload.user.role, 'admin')
  })
  
  // Implementasi test lainnya seperti di contoh sebelumnya
})
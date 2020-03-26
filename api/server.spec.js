const request = require('supertest')
const server = require('./server')

describe('server.js', () => {
  describe('GET /', () => {
    // Status code check
    it('should return 200 OK', async () => {
      const response = await request(server).get('/')

      expect(response.status).toBe(200)
    })
    // Content type check
    it('should return JSON', () => {
      return request(server)
        .get('/')
        .then(res => {
          expect(res.type).toMatch(/json/i)
        })
    })

    it('should respond with {api: "up"}', () => {
      return request(server)
        .get('/')
        .then(res => {
          expect(res.body.api).toBe('up')
        })
    })
  })
})
// describe('server.js', () => {})
// describe('server.js', () => {})
// describe('server.js', () => {})
// describe('server.js', () => {})
// describe('server.js', () => {})

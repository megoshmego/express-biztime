const request = require('supertest');
const app = require('../app');

describe('Company Routes', () => {
    describe('GET /companies', () => {
        test('should respond with an array of companies', async () => {
          const response = await request(app).get('/companies');
          expect(response.status).toBe(200);
          expect(Array.isArray(response.body.companies)).toBe(true);
        });
      });
      
});

describe('Invoice Routes', () => {
  describe('GET /invoices', () => {
    test('should respond with an array of invoices', async () => {
        const response = await request(app).get('/invoices');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body.invoices)).toBe(true);
    });
  });
});

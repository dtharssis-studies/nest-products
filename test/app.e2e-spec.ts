import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { randomUUID } from 'node:crypto';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/tudor/products (GET) TRUE', async () => {
    const response = await request(app.getHttpServer()).get('/tudor/products');

    expect(response.status).toBe(200);
    expect(response.status).toBeTruthy;

    return response;
  });

  it('/tudor/products (POST) TRUE', async () => {
    const response = await request(app.getHttpServer())
      .post('/tudor/products')
      .send({
        id: randomUUID(),
        name: 'Product 1',
        family: 'Tudor',
        tmc: 'SKU 123',
        currencyCode: 'USD',
        callToAction: 'Add To Cart',
        price: '100',
      });

    expect(response.status).toBe(201);
    expect(response.status).toBeTruthy;

    return response;
  });

  it('/tudor/products (POST) FALSE', async () => {
    const response = await request(app.getHttpServer())
      .post('/tudor/products')
      .send({
        id: '',
        name: '',
        family: '',
        tmc: '',
        currencyCode: '',
        callToAction: '',
        price: '',
      });

    expect(response.status).toBe(500);
    expect(response.status).toBeFalsy;

    return response;
  });
});

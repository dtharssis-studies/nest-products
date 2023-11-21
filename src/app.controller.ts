import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CreateProductsBody } from './dtos/create-products-body';
import { getProductBody } from './dtos/get-product-body';
import { ProductRepository } from './repositories/products-repository';
import { UpdateProductsBody } from './dtos/update-products-body';

@Controller('nest')
export class AppController {
  constructor(private productRepository: ProductRepository) {}

  @Post('products')
  async setProducts(@Body() body: CreateProductsBody) {
    const { name, family, tmc, currencyCode, callToAction, price } = body;

    await this.productRepository.create(
      name,
      family,
      tmc,
      currencyCode,
      callToAction,
      price,
    );
  }

  @Get('products')
  async getProducts() {
    return await this.productRepository.getAll();
  }

  @Get('product')
  async getProduct(@Body() body: getProductBody) {
    const { id } = body;
    return await this.productRepository.getProduct(id);
  }

  @Put('product')
  async updateProduct(@Body() body: UpdateProductsBody) {
    const { id, name, family, tmc, currencyCode, callToAction, price } = body;

    await this.productRepository.updateProduct(
      id,
      name,
      family,
      tmc,
      currencyCode,
      callToAction,
      price,
    );
  }

  @Delete('product')
  async deleteProduct(@Body() body: getProductBody) {
    const { id } = body;

    await this.productRepository.deleteProduct(id);
  }
}

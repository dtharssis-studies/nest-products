import { PrismaService } from '../../database/prisma.service';
import { ProductRepository } from '../products-repository';
import { Decimal } from '@prisma/client/runtime/library';
import { randomUUID } from 'node:crypto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaProductsRepository implements ProductRepository {
  constructor(private prisma: PrismaService) {}

  async create(
    name: string,
    family: string,
    tmc: string,
    currencyCode: string,
    callToAction: string,
    price: Decimal,
  ): Promise<void> {
    await this.prisma.products.create({
      data: {
        id: randomUUID(),
        name,
        family,
        tmc,
        currencyCode,
        callToAction,
        price,
      },
    });
  }

  async getAll() {
    return await this.prisma.products.findMany({});
  }

  async getProduct(id: string) {
    return await this.prisma.products.findUnique({
      where: { id: id },
    });
  }

  async updateProduct(
    id: string,
    name: string,
    family: string,
    tmc: string,
    currencyCode: string,
    callToAction: string,
    price: Decimal,
  ): Promise<void> {
    await this.prisma.products.update({
      data: {
        id: id,
        name,
        family,
        tmc,
        currencyCode,
        callToAction,
        price,
      },
      where: { id: id },
    });
  }

  async deleteProduct(id: string) {
    await this.prisma.products.delete({
      where: { id: id },
    });
  }
}

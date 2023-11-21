import { Decimal } from '@prisma/client/runtime/library';

export abstract class ProductRepository {
  abstract create(
    name: string,
    family: string,
    tmc: string,
    currencyCode: string,
    callToAction: string,
    price: Decimal,
  ): Promise<void>;

  abstract getAll();

  abstract getProduct(id: string);

  abstract updateProduct(
    id: string,
    name: string,
    family: string,
    tmc: string,
    currencyCode: string,
    callToAction: string,
    price: Decimal,
  ): Promise<void>;

  abstract deleteProduct(id: string);
}

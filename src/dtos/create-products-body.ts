import { Injectable } from '@nestjs/common';
import { Decimal } from '@prisma/client/runtime/library';

@Injectable()
export class CreateProductsBody {
  name: string;
  family: string;
  tmc: string;
  currencyCode: string;
  callToAction: string;
  price: Decimal;
}

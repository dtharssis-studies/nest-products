import { Decimal } from '@prisma/client/runtime/library';

export class UpdateProductsBody {
  id: string;
  name: string;
  family: string;
  tmc: string;
  currencyCode: string;
  callToAction: string;
  price: Decimal;
}

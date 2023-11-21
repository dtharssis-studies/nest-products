import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { ProductRepository } from './repositories/products-repository';
import { PrismaProductsRepository } from './repositories/prisma/prisma-products-repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: ProductRepository,
      useClass: PrismaProductsRepository,
    },
  ],
})
export class AppModule {}

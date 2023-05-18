import { Module } from '@nestjs/common';
import { ProductsModule } from 'src/products/products.module';
import { AuthModule } from 'src/auth/auth.module';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';

@Module({
  imports: [ProductsModule, AuthModule],
  controllers: [SeedController],
  providers: [SeedService]
})
export class SeedModule { }

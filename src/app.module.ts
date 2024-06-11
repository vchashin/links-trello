import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TYPEORM_CONFIG } from './common/config';
import { LinksModule } from './links/links.module';

@Module({
  imports: [TypeOrmModule.forRoot(TYPEORM_CONFIG), LinksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

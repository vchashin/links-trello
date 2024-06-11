import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TYPEORM_CONFIG } from './db/db.config';
import { RecordsModule } from './records/records.module';

@Module({
  imports: [TypeOrmModule.forRoot(TYPEORM_CONFIG), RecordsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

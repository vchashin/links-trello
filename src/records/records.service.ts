import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Record } from './entities/records.entity';
import * as process from 'node:process';
import { CreateRecordRequestDto } from './dto/request/create-record.request.dto';

@Injectable()
export class RecordsService {
  constructor(
    @InjectRepository(Record)
    private readonly recordRepository: Repository<Record>,
  ) {}

  async findOne(id: Record['id']): Promise<Record['value']> {
    const record: Record = await this.recordRepository.findOne({
      where: { id },
    });

    if (!record.viewed) {
      await this.recordRepository.update(id, { viewed: true });

      return record.value;
    }

    throw new HttpException('Record already viewed!', HttpStatus.FORBIDDEN);
  }

  async create(data: CreateRecordRequestDto): Promise<string> {
    const record: Record = await this.recordRepository.save(data);

    return `http://localhost:${process.env.PORT}/api/links/${record.id}`;
  }
}

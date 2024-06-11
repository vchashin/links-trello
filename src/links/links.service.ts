import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Link } from './entities/links.entity';
import * as process from 'node:process';
import { CreateLinkDto } from './dto/request/create-link.dto';

@Injectable()
export class LinksService {
  constructor(
    @InjectRepository(Link)
    private readonly linkRepository: Repository<Link>,
  ) {}

  async findOne(id: Link['id']): Promise<Link> {
    return this.linkRepository.findOne({ where: { id } });
  }

  async create(data: CreateLinkDto): Promise<string> {
    const link: Link = await this.linkRepository.create(data);

    return `http://localhost:${process.env.PORT}/api/links/${link.id}`;
  }
}

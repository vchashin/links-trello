import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { LinksService } from './links.service';
import { CreateLinkDto } from './dto/request/create-link.dto';

@ApiTags('Links')
@Controller('links')
export class LinksController {
  @Inject(LinksService)
  private tasksService: LinksService;

  @Get(':id')
  findOne(@Param() id: string) {
    return this.tasksService.findOne(id);
  }

  @Post()
  create(@Body() data: CreateLinkDto): Promise<string> {
    return this.tasksService.create(data);
  }
}

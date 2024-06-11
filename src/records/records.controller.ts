import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';

import { RecordsService } from './records.service';
import { CreateRecordRequestDto } from './dto/request/create-record.request.dto';
import { Record } from './entities/records.entity';
import { CreateRecordResponseDto } from './dto/response/create-record.response.dto';
import { GetRecordByIdResponseDto } from './dto/response/get-record-by-id.response.dto';

@ApiTags('Records')
@Controller('records')
export class RecordsController {
  @Inject(RecordsService)
  private tasksService: RecordsService;

  @ApiOperation({
    summary: 'Создание записи',
  })
  @ApiOkResponse({
    status: 200,
    type: CreateRecordResponseDto,
  })
  @Post()
  create(@Body() data: CreateRecordRequestDto): Promise<string> {
    return this.tasksService.create(data);
  }

  @ApiOperation({
    summary: 'Получение записи',
  })
  @ApiParam({ name: 'id', required: true })
  @ApiOkResponse({
    status: 200,
    type: GetRecordByIdResponseDto,
  })
  @Get(':id')
  findOne(@Param('id') id: Record['id']): Promise<Record['value']> {
    return this.tasksService.findOne(id);
  }
}

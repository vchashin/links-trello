import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateRecordRequestDto {
  @ApiProperty({ example: 'Test data', description: 'String data' })
  @IsString()
  value: string;
}

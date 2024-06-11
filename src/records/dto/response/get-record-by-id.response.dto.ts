import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class GetRecordByIdResponseDto {
  @ApiProperty({
    example: 'Example value of record',
    description: 'String data',
  })
  @IsString()
  value: string;
}

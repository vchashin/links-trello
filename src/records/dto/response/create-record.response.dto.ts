import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateRecordResponseDto {
  @ApiProperty({
    example:
      'http://localhost:3000/api/links/2660a659-fea9-4641-9d1f-529cfc40f15f',
    description: 'String data',
  })
  @IsString()
  link: string;
}

import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsBoolean,
  MaxLength,
  MinLength,
  IsNotEmpty,
} from 'class-validator';

export class CreateTodoDto {
  @ApiProperty({
    example: '강의 자료 만들기',
    description: '할 일 제목',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  title!: string;

  @ApiProperty({
    example: 'GDSC KOREA UNIV. BackEnd STUDY',
    description: '할 일 설명',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  description!: string;

  @ApiProperty({
    example: false,
    description: '할 일 완료 여부',
  })
  @IsNotEmpty()
  @IsBoolean()
  isDone!: boolean;
}

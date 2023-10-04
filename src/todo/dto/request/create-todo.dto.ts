import { ApiProperty, PickType } from '@nestjs/swagger';
import {
  IsString,
  IsBoolean,
  MaxLength,
  MinLength,
  IsNotEmpty,
} from 'class-validator';
import { Todo } from 'src/todo/entities/todo.entity';

export class CreateTodoRequestDto extends PickType(Todo, [
  'title',
  'description',
  'isDone',
]) {
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  title!: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  description!: string;

  @IsNotEmpty()
  @IsBoolean()
  isDone!: boolean;
}

import { IsString, IsBoolean, MaxLength, MinLength } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  title: string;

  @IsString()
  @MinLength(1)
  @MaxLength(100)
  description: string;

  @IsBoolean()
  done: boolean;
}

import { PartialType } from '@nestjs/swagger';
import { CreateTodoRequestDto } from './create-todo.dto';

export class UpdateTodoRequestDto extends PartialType(CreateTodoRequestDto) {}

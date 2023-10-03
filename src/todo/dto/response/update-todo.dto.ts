import { OmitType } from '@nestjs/swagger';
import { Todo } from 'src/todo/entities/todo.entity';

export class UpdateTodoResponseDto extends OmitType(Todo, ['deletedAt']) {}

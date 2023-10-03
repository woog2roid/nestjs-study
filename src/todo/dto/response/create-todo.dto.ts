import { OmitType } from '@nestjs/mapped-types';
import { Todo } from 'src/todo/entities/todo.entity';

export class CreateTodoResponseDto extends OmitType(Todo, ['deletedAt']) {}

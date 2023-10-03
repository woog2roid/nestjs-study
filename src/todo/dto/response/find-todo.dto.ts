import { OmitType } from '@nestjs/mapped-types';
import { Todo } from 'src/todo/entities/todo.entity';

export class FindTodoResponseDto extends OmitType(Todo, ['deletedAt']) {}

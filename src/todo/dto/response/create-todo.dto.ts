import { OmitType } from '@nestjs/swagger';
import { Todo } from 'src/todo/entities/todo.entity';

export class CreateTodoResponseDto extends OmitType(Todo, ['deletedAt']) {
  static fromEntity(entity: Todo): CreateTodoResponseDto {
    const { deletedAt, ...properties } = entity;
    return {
      ...properties,
    };
  }
}

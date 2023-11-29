import { OmitType } from '@nestjs/swagger';
import { Todo } from 'src/todo/entities/todo.entity';

export class FindTodoResponseDto extends OmitType(Todo, ['deletedAt']) {
  static fromEntity(entity: Todo): FindTodoResponseDto {
    const { deletedAt, ...properties } = entity;
    return {
      ...properties,
    };
  }

  static fromEntities(entities: Todo[]): FindTodoResponseDto[] {
    return entities.map((entity) => FindTodoResponseDto.fromEntity(entity));
  }
}

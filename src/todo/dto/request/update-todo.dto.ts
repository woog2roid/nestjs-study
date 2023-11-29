import { PartialType } from '@nestjs/swagger';
import { CreateTodoRequestDto } from './create-todo.dto';
import { BadRequestException } from '@nestjs/common';

export class UpdateTodoRequestDto extends PartialType(CreateTodoRequestDto) {
  static validateEmptyObject(dto: UpdateTodoRequestDto): void {
    if (Object.keys(dto).length === 0)
      throw new BadRequestException('빈 객체는 요청할 수 없습니다.');
    return;
  }
}

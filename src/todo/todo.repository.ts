import { Repository } from 'typeorm';
import { Todo } from './entities/todo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoRepository extends Repository<Todo> {
  constructor(
    @InjectRepository(Todo) private readonly repository: Repository<Todo>,
  ) {
    super(repository.target, repository.manager);
  }

  async findById(id: number): Promise<Todo> {
    return await this.repository.findOne({ where: { id } });
  }
}

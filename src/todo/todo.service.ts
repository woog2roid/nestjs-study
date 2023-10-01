import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoRepository } from './todo.repository';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(private readonly todoRepository: TodoRepository) {}

  create(createTodoDto: CreateTodoDto) {
    const todo = new Todo();
    todo.title = createTodoDto.title;
    todo.description = createTodoDto.description;
    todo.isDone = createTodoDto.isDone;
    return this.todoRepository.save(todo);
  }

  findAll() {
    return this.todoRepository.find();
  }

  findById(id: number) {
    return this.todoRepository.findById(id);
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return this.todoRepository.update(id, updateTodoDto);
  }

  remove(id: number) {
    return this.todoRepository.delete(id);
  }
}

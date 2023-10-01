import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoRepository } from './todo.repository';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(private readonly todoRepository: TodoRepository) {}

  /* Todo를 생성 */
  create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const todo = new Todo();
    todo.title = createTodoDto.title;
    todo.description = createTodoDto.description;
    todo.isDone = createTodoDto.isDone;
    return this.todoRepository.save(todo);
  }

  /* 모든 Todo 목록을 조회 */
  findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  /* id를 통해 특정 Todo를 조회 */
  async findById(id: number): Promise<Todo> {
    const todo: Todo = await this.todoRepository.findById(id);
    if (todo == null) {
      throw new NotFoundException(`id가 ${id}인 todo가 없습니다.`);
    }
    return todo;
  }

  /* id를 통해 특정 Todo를 수정 */
  async update(id: number, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    const { title, description, isDone } = updateTodoDto;
    const todo: Todo = await this.findById(id);

    todo.title = title ? title : todo.title;
    todo.description = description ? description : todo.description;
    todo.isDone = isDone ? isDone : todo.isDone;

    return this.todoRepository.save(todo);
  }

  /* id를 통해 특정 Todo를 삭제 */
  async deleteById(id: number): Promise<void> {
    await this.findById(id);
    this.todoRepository.delete(id);
    return;
  }
}

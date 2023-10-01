import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Todo } from './entities/todo.entity';

@ApiTags('todo')
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @ApiOperation({ summary: '할 일 생성하기' })
  @Post()
  create(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todoService.create(createTodoDto);
  }

  @ApiOperation({ summary: '할 일 목록 조회하기' })
  @Get()
  findAll(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @ApiOperation({ summary: 'id로 할 일 조회하기' })
  @Get(':id')
  findById(@Param('id') id: string): Promise<Todo> {
    return this.todoService.findById(+id);
  }

  @ApiOperation({ summary: '할 일 수정하기' })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTodoDto: UpdateTodoDto,
  ): Promise<Todo> {
    return this.todoService.update(+id, updateTodoDto);
  }

  @ApiOperation({ summary: '할 일 삭제하기' })
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.todoService.deleteById(+id);
  }
}

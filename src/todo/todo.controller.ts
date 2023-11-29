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
import { CreateTodoRequestDto } from './dto/request/create-todo.dto';
import { UpdateTodoRequestDto } from './dto/request/update-todo.dto';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CreateTodoResponseDto } from './dto/response/create-todo.dto';
import { FindTodoResponseDto } from './dto/response/find-todo.dto';
import { UpdateTodoResponseDto } from './dto/response/update-todo.dto';
import { Todo } from './entities/todo.entity';

@ApiTags('todo')
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @ApiOperation({ summary: '할 일 생성하기' })
  @ApiCreatedResponse({
    description: '생성된 할 일',
    type: CreateTodoResponseDto,
  })
  @Post()
  async create(
    @Body() createRequestTodoDto: CreateTodoRequestDto,
  ): Promise<CreateTodoResponseDto> {
    return CreateTodoResponseDto.fromEntity(
      await this.todoService.create(createRequestTodoDto),
    );
  }

  @ApiOperation({ summary: '할 일 목록 조회하기' })
  @ApiOkResponse({
    description: '검색 요청한 할 일 목록',
    type: [FindTodoResponseDto],
  })
  @Get()
  async findAll(): Promise<FindTodoResponseDto[]> {
    return FindTodoResponseDto.fromEntities(await this.todoService.findAll());
  }

  @ApiOperation({ summary: 'id로 할 일 조회하기' })
  @ApiOkResponse({
    description: '검색 요청한 할 일',
    type: FindTodoResponseDto,
  })
  @Get(':id')
  async findById(@Param('id') id: string): Promise<FindTodoResponseDto> {
    // await this.todoService.validateExistenceById(+id);
    const todo: Todo = await this.todoService.findById(+id);
    return FindTodoResponseDto.fromEntity(todo);
  }

  @ApiOperation({ summary: '할 일 수정하기' })
  @ApiOkResponse({
    description: '수정된 할 일 결과물',
    type: UpdateTodoResponseDto,
  })
  @Patch(':id')
  async updateById(
    @Param('id') id: string,
    @Body() updateTodoRequestDto: UpdateTodoRequestDto,
  ): Promise<UpdateTodoResponseDto> {
    UpdateTodoRequestDto.validateEmptyObject(updateTodoRequestDto);
    // await this.todoService.validateExistenceById(+id);
    const updatedTodo: Todo = await this.todoService.updateById(
      +id,
      updateTodoRequestDto,
    );
    return UpdateTodoResponseDto.fromEntity(updatedTodo);
  }

  @ApiOperation({ summary: '할 일 삭제하기' })
  @ApiOkResponse()
  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<void> {
    // await this.todoService.validateExistenceById(+id);
    return this.todoService.deleteById(+id);
  }
}

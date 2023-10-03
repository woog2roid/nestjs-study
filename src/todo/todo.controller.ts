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

@ApiTags('todo')
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @ApiOperation({ summary: '할 일 생성하기' })
  @ApiCreatedResponse({
    description: '생성 성공',
    type: CreateTodoResponseDto,
  })
  @Post()
  async create(
    @Body() createTodoDto: CreateTodoRequestDto,
  ): Promise<CreateTodoResponseDto> {
    return CreateTodoResponseDto.fromEntity(
      await this.todoService.create(createTodoDto),
    );
  }

  @ApiOperation({ summary: '할 일 목록 조회하기' })
  @ApiOkResponse({
    description: '조회 성공',
    type: [FindTodoResponseDto],
  })
  @Get()
  async findAll(): Promise<FindTodoResponseDto[]> {
    return FindTodoResponseDto.fromEntities(await this.todoService.findAll());
  }

  @ApiOperation({ summary: 'id로 할 일 조회하기' })
  @ApiOkResponse({
    description: '조회 성공',
    type: FindTodoResponseDto,
  })
  @Get(':id')
  async findById(@Param('id') id: string): Promise<FindTodoResponseDto> {
    return FindTodoResponseDto.fromEntity(await this.todoService.findById(+id));
  }

  @ApiOperation({ summary: '할 일 수정하기' })
  @ApiOkResponse({
    description: '수정 성공',
    type: UpdateTodoResponseDto,
  })
  @Patch(':id')
  async updateById(
    @Param('id') id: string,
    @Body() updateTodoDto: UpdateTodoRequestDto,
  ): Promise<UpdateTodoResponseDto> {
    return UpdateTodoResponseDto.fromEntity(
      await this.todoService.updateById(+id, updateTodoDto),
    );
  }

  @ApiOperation({ summary: '할 일 삭제하기' })
  @ApiOkResponse({ description: '삭제 성공' })
  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<void> {
    return this.todoService.deleteById(+id);
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { JoinRequestDto } from './dto/request/join.dto';
import { ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: '회원가입' })
  @ApiCreatedResponse({})
  @Post()
  async join(@Body() joinRequestDto: JoinRequestDto): Promise<void> {
    return this.userService.join(joinRequestDto);
  }

  /*
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
  */
}

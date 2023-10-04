import { ConflictException, Injectable } from '@nestjs/common';
import { JoinRequestDto } from './dto/request/join.dto';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async join(joinRequestDto: JoinRequestDto): Promise<void> {
    const { id, name, password } = joinRequestDto;

    if (await this.isDuplicateId(id)) {
      throw new ConflictException('이미 존재하는 아이디입니다.');
    }

    const user = new User();
    user.id = id;
    user.name = name;
    user.password = await bcrypt.hash(password, 12);
    this.userRepository.save(user);
    return;
  }

  async isDuplicateId(id: string): Promise<boolean> {
    const user = await this.userRepository.findById(id);
    return user ? true : false;
  }

  /*
  remove(id: number) {
    return `This action removes a #${id} user`;
  }
  */
}

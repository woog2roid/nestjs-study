import { PickType } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength } from 'class-validator';
import { User } from 'src/user/entities/user.entity';

export class JoinRequestDto extends PickType(User, ['name', 'id', 'password']) {
  @IsString()
  @MaxLength(30)
  @MinLength(0)
  public id!: string;

  @IsString()
  @MaxLength(30)
  @MinLength(0)
  public name!: string;

  @IsString()
  @MaxLength(30)
  @MinLength(0)
  public password!: string;
}

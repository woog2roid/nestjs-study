import { Todo } from 'src/todo/entities/todo.entity';
import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ schema: 'todo_study', name: 'user' })
export class User {
  @ApiProperty({ example: 'woog2roid', description: '유저 고유 아이디' })
  @PrimaryColumn({ name: 'id', type: 'varchar', unique: true, length: 30 })
  id: string;

  @ApiProperty({ example: '1234', description: '유저 비밀번호' })
  @Column({ name: 'password', type: 'varchar', length: 100, select: false })
  password: string;

  @ApiProperty({ example: '욱이', description: '유저 닉네임' })
  @Column({ name: 'nickname', type: 'varchar', length: 30 })
  name: string;

  @ApiProperty({ example: '2021-10-10T00:00:00.000Z', description: '생성일' })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({ example: '2021-10-10T00:00:00.000Z', description: '수정일' })
  @UpdateDateColumn()
  updatedAt: Date;

  @ApiProperty({ example: null, description: '탈퇴일' })
  @DeleteDateColumn()
  deletedAt: Date | null;

  @OneToMany(() => Todo, (todo) => todo.user)
  todos: Todo[];
}

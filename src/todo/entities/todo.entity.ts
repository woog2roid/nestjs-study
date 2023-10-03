import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ schema: 'todo_study', name: 'todo' })
export class Todo {
  @ApiProperty({ example: 1, description: '할 일 고유 아이디' })
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  id: number;

  @ApiProperty({ example: '강의 자료 만들기', description: '할 일 제목' })
  @Column({ name: 'title', type: 'varchar', length: 100 })
  title: string;

  @ApiProperty({
    example: 'GDSC KOREA UNIV. BackEnd STUDY',
    description: '할 일 설명',
  })
  @Column({ name: 'description', type: 'varchar', length: 100 })
  description: string;

  @ApiProperty({ example: false, description: '할 일 완료 여부' })
  @Column({ name: 'is_done', type: 'boolean', default: false })
  isDone: boolean;

  @ApiProperty({ example: '2021-10-10T00:00:00.000Z', description: '생성일' })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({ example: '2021-10-10T00:00:00.000Z', description: '수정일' })
  @UpdateDateColumn()
  updatedAt: Date;

  @ApiProperty({ example: null, description: '삭제일' })
  @DeleteDateColumn()
  deletedAt: Date | null;

  @ManyToOne(() => User, (user) => user.todos)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;
}

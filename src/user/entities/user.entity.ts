import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ schema: 'todo-study', name: 'user' })
export class User {
  @PrimaryColumn({ name: 'id', type: 'varchar', unique: true, length: 30 })
  id: string;

  @Column({ name: 'password', type: 'varchar', length: 100, select: false })
  password: string;

  @Column({ name: 'nickname', type: 'varchar', length: 30 })
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;
}

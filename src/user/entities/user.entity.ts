import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'name' })
  name?: string;

  @Column({ name: 'blocked', nullable: true })
  blocked?: boolean;
}
